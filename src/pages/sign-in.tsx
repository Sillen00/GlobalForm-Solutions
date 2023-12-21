import { SignIn as Signinmodal } from "@clerk/nextjs"

function SignIn() {
  return (
    <div>
      <h1>DETTA ÄR SIGN IN SIDAN.</h1>
      <Signinmodal />
    </div>
  )
}

export default SignIn
