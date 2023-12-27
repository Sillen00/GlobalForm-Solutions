import { SignUp } from "@clerk/nextjs"
import styles from '../signup/page.module.scss';

function signUpPage() {
  return (
    <div className={styles.signupContainer}>
      <h1>Sign Up Page</h1>
      <SignUp />
    </div>
  );
}

// apply styles to the page

export default signUpPage;
