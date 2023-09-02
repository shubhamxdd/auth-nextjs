"use client";

import { useState } from "react";

const page = () => {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });
  return (
    <>
      <div className="mt-4 mx-10">
        <h1 className="text-center text-4xl font-bold">Signup Page</h1>
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
              type="submit"
              className="bg-blue-500 text-white rounded-md outline-none hover:bg-blue-600 px-4 py-2 -pb-2"
            >
              SignUp
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
