"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";

const AuthButton = () => {
  const session = useSession();
  return (
    <>
      {session.status == "authenticated" ? (
        <>
          {" "}
          <button onClick={() => signOut()} className="btn">
            LogOut
          </button>{" "}
        </>
      ) : (
        <>
          <Link href={"/login"} className="btn">
            LogIn
          </Link>
        </>
      )}
    </>
  );
};

export default AuthButton;
