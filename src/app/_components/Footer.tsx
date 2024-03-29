import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import AccordionSection from "./FooterAccordion"

import Link from "next/link"
import styles from "./Footer.module.scss"

function Footer() {
  return (
    <footer className={styles.footer}>
      <AccordionSection title='Info'>
        <Link href='/info/terms'>
          <p>Terms & Conditions</p>
        </Link>
        <Link href='/info/customer-service'>
          <p>Customer Service</p>
        </Link>
        <Link href='/info/privacy-policies'>
          <p>Privacy Policy</p>
        </Link>
        <Link href='/info/cookie-settings'>
          <p>Cookie Settings</p>
        </Link>
      </AccordionSection>
      <AccordionSection title='About Us'>
        <Link href='/about/press'>
          <p>Press</p>
        </Link>
        <Link href='/about/news'>
          <p>News</p>
        </Link>
        <Link href='/about/career'>
          <p>Career</p>
        </Link>
      </AccordionSection>
      <AccordionSection title='Contact'>
        <Link href='tel:+46 073 369 69 69'>
          <p>+46 073 369 69 69</p>
        </Link>
        <Link href='mailto:gfs@globalformsolutions.se'>
          <p>gfs@globalformsolutions.se</p>
        </Link>
      </AccordionSection>
      <AccordionSection title='Support'>
        <Link href='/support/faq'>
          <p>FAQ</p>
        </Link>
      </AccordionSection>

      <div className={styles.socials}>
        {/* <Link href='#'> */}
        <FaLinkedin />
        {/* </Link> */}
        {/* <Link href='#'> */}
        <FaInstagram />
        {/* </Link> */}
        {/* <Link href='#'> */}
        <FaXTwitter />
        {/* </Link> */}
      </div>
    </footer>
  )
}

export default Footer
