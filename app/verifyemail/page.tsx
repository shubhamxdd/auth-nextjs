"use client";

import axios from "axios";
import Link from "next/link";
import { useState, useEffect } from "react";

const VerifyEmail = () => {
  const [token, setToken] = useState("");
  const [isVerified, setIsVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("api/users/verifyemail", { token: token });
      setIsVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const urlToken = window.location.search.split("=")[1];
    setToken(urlToken || "");
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <>
      <div className="mt-4 mx-10">
        <h1 className="text-4xl font-semibold">Verify Email</h1>
        <h2 className="text-3xl font-bold mt-3">
          {token ? `${token}` : "no token present"}
        </h2>
        {isVerified && (
          <div className="mt-5">
            <h1 className="tex2xl font-semibold">Email verified sucessfully</h1>
            <Link href="/login" className="text-blue-500 underline">
              Login
            </Link>
          </div>
        )}
        {error && (
          <div className="mt-5">
            <h1 className="text-2xl font-semibold text-red-500">
              An error occured
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default VerifyEmail;
