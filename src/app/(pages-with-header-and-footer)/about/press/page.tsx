import styles from "./page.module.scss"

function pressPage() {
  return (
    <div className={styles.pressContainer}>
      <h1>Press</h1>
      <div className={styles.section}>
        <div>
          <h2>NEW CEO</h2>
          <span>
            <i>2023-10-25</i>
          </span>
        </div>
        <span>
          After a rocky start to the year, we are pleased to announce that we
          have replaced the former CEO Simon Bengtsson with a new CEO, Thomas
          Ingvarsson. Thomas has a long history of leading companies through
          difficult times and we are confident that he will be able to lead us
          through this comming months with ease.
        </span>
      </div>
      <div className={styles.section}>
        <div>
          <h2>PEOPLES CHOICE</h2>
          <span>
            <i>2023-07-13</i>
          </span>
        </div>
        <span>
          The people have spoken and we have listened. We are proud to announce
          that the stockholders have voted to replace the current CEO Simon
          Bengtsson. The main reason for this was the lack of attendence at the
          annual meeting. He decided that he want to have a vacation instead of
          attending the meeting. We are now looking for a new CEO.
        </span>
      </div>
      <div className={styles.section}>
        <div>
          <h2>SECURITY INFO</h2>
          <span>
            <i>2023-02-01</i>
          </span>
        </div>
        <span>
          Back in the day, hacking was a thing of the past. It was a time when
          people would use their computer skills to break into other people's
          computers and steal information. But now, with the advent of the
          hacking its not so easy anymore. The hackers have become more
          sophisticated and they are using new techniques to break into your
          computer. They are using social engineering techniques to trick you
          into giving them your password or other sensitive information. They
          are also using sophisticated software to break into your computer and
          steal your information. So, if you want to protect yourself from
          hackers, you should use a strong password and use a good antivirus
          software.
        </span>
      </div>
      <div className={styles.section}>
        <div>
          <h2>WALLSTREET STOCKEXCHANGE</h2>
          <span>
            <i>2023-01-29</i>
          </span>
        </div>
        <span>
          We are proud to announce that we are now listed on the Wallstreet
          Stockexchange. We are looking forward to a bright future with our new
          investors.
        </span>
      </div>
      <div className={styles.section}>
        <div>
          <h2>NEW BOARD MEMEBERS</h2>
          <span>
            <i>2023-07-13</i>
          </span>
        </div>
        <span>
          The board has decided to replace the current board members with new
          members. The new board members are: - Marcus Rosin Lindeberg - Thomas
          Ingvarsson - Arnold Schwarzenegger
        </span>
      </div>
    </div>
  )
}

export default pressPage
