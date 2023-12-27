import { SignUp } from "@clerk/nextjs"
import styles from '../signup/page.module.scss';

function signUpPage() {
  return (
    <div className={styles.signUpContainer}>
      <SignUp />
    </div>
  );
}

// apply styles to the page

export default signUpPage;
