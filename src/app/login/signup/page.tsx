import { SignUp } from "@clerk/nextjs"
import styles from '../signup/page.module.scss';

function signUpPage() {
  return (
    <div className={styles.signUpContainer}>
      <SignUp />
    </div>
  );
}

// Back to "/" arrow??

export default signUpPage;
