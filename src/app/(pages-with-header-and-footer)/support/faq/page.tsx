"use client"
import AccordionSection from "../../../_components/AccordionSection"
import faqStyles from "./faqAccordian.module.scss"
import styles from "./page.module.scss"

function faqPage() {
  return (
    <>
      {/* This struggles alot with the scss
      created a module file to this but seems like the local accordian.sccs
      is overriding accordian .content display: block that should be none */}
      <div className={styles.pressContainer}>
        <h1>FAQ</h1>
        <AccordionSection
          className={faqStyles.accordionsection}
          title='Can I use the same payment method for multiple accounts?'
        >
          <div>
            <p>
              Yes, you can. We recomend that you only use a personal debit card.
            </p>
          </div>
        </AccordionSection>

        <div className={styles.section}>
          <div>
            <h2>Är jorden platt?</h2>
          </div>
          <span>
            Klart den är, annars hade du inte kunnat se en byggnad flera
            kilometer bort.
          </span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>Hur långt bromsar man på 30m?</h2>
          </div>
          <span>4504 sek tar det.</span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>Hur långt är ett snöre?</h2>
          </div>
          <span>Långt som fan!!</span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>Varför kan man inte äta luft?</h2>
          </div>
          <span>Det kan man, gapa större bara!!</span>
        </div>
        <div className={styles.section}>
          <div>
            <h2>Är fem myror fler än 4 elefanter?</h2>
          </div>
          <span>NEJ!!</span>
        </div>
      </div>
    </>
  )
}

export default faqPage
