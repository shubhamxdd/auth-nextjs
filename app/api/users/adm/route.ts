import { getData } from "@/helper/getDataFromToken";
import User from "@/models/User";
import connectToDB from "@/utils/dbconfig";
import { NextRequest, NextResponse } from "next/server";

connectToDB();

export async function GET(request: NextRequest) {
  try {
    const userID = await getData(request);
    const user = await User.findOne({ _id: userID }).select("-password");
    return NextResponse.json({ message: "User found", data: user });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
