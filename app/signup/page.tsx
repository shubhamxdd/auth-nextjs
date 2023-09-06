"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const SignupPage = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  const [disabledBtn, setDisabledBtn] = useState(false);
  const [loading, setLoading] = useState(false);
  const onSignup = async () => {
    try {
      setLoading(true);
      const res = await axios.post("/api/users/signup", user);
      console.log("Signup sucess! ", res.data);
      router.push("/login");
      toast.success("Signup Success");
      setLoading(false);
    } catch (error: any) {
      setLoading(false);
      console.log(error.message);
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.username.length > 0 &&
      user.password.length > 0
    ) {
      setDisabledBtn(false);
    } else {
      setDisabledBtn(true);
    }
  }, [user]);

  return (
    <>
      <div className="mt-4 mx-10">
        <h1 className="text-center text-4xl font-bold">Signup Page</h1>
        <h1
          className={`text-center text-2xl font-semibold mt-4 ${
            loading ? "" : "hidden"
          }`}
        >
          {loading ? "Adding user to db" : ""}
        </h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log(user);
          }}
        >
          <div className="mt-5 items-center flex flex-col">
            <label htmlFor="username" className="font-semibold mb-3">
              Username
            </label>
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="border-zinc-500 border-2 outline-none px-3 py-2 mx-3"
            />
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
              onClick={() => onSignup()}
              type="submit"
              disabled={disabledBtn ? true : false}
              className="bg-blue-500 text-white rounded-md outline-none hover:bg-blue-600 disabled:bg-slate-600 px-4 py-2 -pb-2"
            >
              SignUp
            </button>
            <Link href={"login"} className="underline py-2 px-4">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default SignupPage;
