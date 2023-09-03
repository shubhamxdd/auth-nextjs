import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import connectToDB from "@/utils/dbconfig";
import jwt from "jsonwebtoken";

connectToDB();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;

    // if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist!" },
        { status: 400 }
      );
    }

    // check if password is correct
    const validPassword = await bcryptjs.compare(password, user.password);
    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password!" }, { status: 400 });
    }

    // create and assign a token
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "3d",
    });

    const resp = NextResponse.json({
      message: "User logged in successfully!",
      success: true,
    });
    resp.cookies.set("token", token, { httpOnly: true });

    return resp;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
