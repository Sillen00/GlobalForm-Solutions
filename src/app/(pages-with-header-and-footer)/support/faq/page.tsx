"use client"
import FaqAccordion from "./../../../_components/FaqAccordion"
import styles from "./page.module.scss"

function faqPage() {
  return (
    <>
      <title>FAQ - GlobalForm Solutions</title>
      <div className={styles.faqContainer}>
        <h2>FAQ</h2>
        <div className={styles.accordionContainer}>
          <FaqAccordion title='Can I use the same payment method for multiple accounts?'>
            <p>
              Yes, you can. We recomend that you only use a personal debit card.
            </p>
          </FaqAccordion>
          <FaqAccordion title='I´ve created a form and want to change it, how do I do that?'>
            <p>
              Unfortonly you can´t change a form once it´s created. You can
              however create a new one and delete the old one. But rember that
              the old link will be invalid if you delete the old form.
            </p>
          </FaqAccordion>
          <FaqAccordion title='I´ve forgot my password, how can I retrieve it?'>
            <p>
              On the login page, there is an option "forgot password" click
              there and follow the instructions and a new password will be
              generated
            </p>
          </FaqAccordion>
          <FaqAccordion title='Is there a maxium number of forms I can create?'>
            <p>Yes, it´s 200 forms per account.</p>
          </FaqAccordion>
          <FaqAccordion title='Can I edit incoming answers from customers?'>
            <p>
              No, due to security reasons thats not allowed. But It´s in the
              pipeline as a feature in the future. Realese TBA.
            </p>
          </FaqAccordion>
          <FaqAccordion title='How much does this service cost?'>
            <p>IT`S FREE!!</p>
          </FaqAccordion>
        </div>
        <h3>
          If you havent found your answer, please feel free to contact us at{" "}
          <b>
            <i>
              <a href='mailto:help@gfs.com'>help@gfs.com</a>
            </i>
          </b>
        </h3>
      </div>
    </>
  )
}

export default faqPage
