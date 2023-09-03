"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast/headless";

const LoginPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [disabledBtn, setDisabledBtn] = useState(false);
  useEffect(() => {
    if (user.email.length > 0 && user.password.length > 0) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [user]);

  const onLogin = async () => {
    try {
      const res = await axios.post("/api/users/login", user);
      console.log("success login", res.data);
      toast.success("Login Success");
      router.push("/profile");
    } catch (error: any) {
      console.log("error login", error.message);
      toast.error(error.message);
    }
  };
  return (
    <>
      <div className="mt-4 mx-10">
        <h1 className="text-center text-4xl font-bold">Login Page</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(user);
          }}
        >
          <div className="mt-5 items-center flex flex-col">
            <label htmlFor="email" className="font-semibold mb-3 mt-3">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="border-zinc-500 border-2 outline-none px-3 py-2 mx-3"
            />
            <label htmlFor="password" className="font-semibold mb-3 mt-3">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="border-zinc-500 border-2 outline-none px-3 py-2 mx-3 mb-3"
            />
            <button
              type="submit"
              onClick={() => onLogin()}
              disabled={disabledBtn ? true : false}
              className="bg-blue-500 text-white rounded-md outline-none hover:bg-blue-600 disabled:bg-slate-600 px-4 py-2 -pb-2"
            >
              Login
            </button>
            <Link href={"signup"} className="underline py-2 px-4">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default LoginPage;
