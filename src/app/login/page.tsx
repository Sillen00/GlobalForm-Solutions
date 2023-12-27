import { SignIn } from "@clerk/nextjs";
import React from "react";

function  LoginPage() {
  return (
    <div>
      <h1>Login</h1>
      <SignIn />
    </div>
  );
}

export default LoginPage;