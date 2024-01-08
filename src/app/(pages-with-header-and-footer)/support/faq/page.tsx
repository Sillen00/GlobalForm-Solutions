"use client"
import Accordion from "./../../../_components/FaqAccordion"
import styles from "./page.module.scss"

function faqPage() {
  return (
    <>
      {/* This struggles alot with the scss
      created a module file to this but seems like the local accordian.sccs
      is overriding accordian .content display: block that should be none */}

      {/* Set module on both accordian sccs file and faqAccordian file, still 
      overridden by component scss....why?? */}
      <div className={styles.faqContainer}>
        <h1>FAQ</h1>
        <div className={styles.accordionContainer}>
          <Accordion title='Can I use the same payment method for multiple accounts?'>
            <p>
              Yes, you can. We recomend that you only use a personal debit card.
            </p>
          </Accordion>
          <Accordion title='Är jorden platt?'>
            <p>
              Klart den är, annars hade du inte kunnat se en byggnad flera
              kilometer bort.
            </p>
          </Accordion>
          <Accordion title='Hur långt bromsar man på 30m?'>
            <p>4504 sek tar det.</p>
          </Accordion>
          <Accordion title='Hur långt är ett snöre?'>
            <p>Långt som fan!!</p>
          </Accordion>
          <Accordion title='Varför kan man inte äta luft?'>
            <p>Det kan man, gapa större bara!!</p>
          </Accordion>
          <Accordion title='Är fem myror fler än 4 elefanter?'>
            <p>Ja det är det.</p>
          </Accordion>
        </div>
      </div>
      <div>
        <h3>
          If you havent found your answer, please feel free to contact us at{" "}
          <b>
            <i>
              <a href='mailto:help@gfs.com'>help@gfs.com</a>
            </i>{" "}
          </b>{" "}
        </h3>
      </div>
    </>
  )
}

export default faqPage
