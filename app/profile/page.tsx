"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast/headless";
import { useEffect, useState } from "react";

const page = () => {
  const [data, setData] = useState("");
  const router = useRouter();
  const logout = async () => {
    try {
      await axios.get("/api/users/logout");
      toast.success("Logged out successfully");
      router.push("/");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Error logging out ", error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/api/users/adm");
    console.log(res.data);
    setData(res.data.data._id);
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <>
      <div className="mx-10 mt-4">
        <button
          className=" bg-black text-white rounded px-3 py-1 float-right"
          onClick={logout}
        >
          Log Out
        </button>
        <h1 className="text-center text-4xl font-bold mx-16">Profile Page</h1>
        <div className="justify-center items-center flex">
          <Link
            href={"/"}
            className="mx-40 mt-4 text-xl font-medium underline hover:text-blue-600"
          >
            Go to homepage
          </Link>
        </div>
        <h1 className="font-semibold text-3xl text-center mt-4">
          {data === "" ? (
            "kuch nahi"
          ) : (
            <Link href={`/profile/${data}`}>{data}</Link>
          )}
        </h1>
      </div>
    </>
  );
};

export default page;
