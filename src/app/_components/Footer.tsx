import { FaInstagram, FaLinkedin } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import AccordionSection from "./AccordionSection"

import Link from "next/link"
import "./Footer.scss"

function Footer() {
  return (
    <footer>
      <AccordionSection title='Info'>
        <Link href='#'>
          <p>Terms & Conditions</p>
        </Link>
        <p>Customer Service</p>
        <p>Privacy Policy</p>
        <p>Cookie Settings</p>
      </AccordionSection>
      <AccordionSection title='About Us'>
        <p>Press</p>
        <p>News</p>
        <p>Career</p>
      </AccordionSection>
      <AccordionSection title='Contact'>
        <p>+46 073 369 69 69</p>
        <p>gfs@globalformsolutions.se</p>
      </AccordionSection>
      <AccordionSection title='Support'>
        <p>FAQ</p>
        <p>Regulations</p>
      </AccordionSection>

      <div className='socials'>
        <Link href='#'>
          <FaLinkedin />
        </Link>
        <Link href='#'>
          <FaInstagram />
        </Link>
        <Link href='#'>
          <FaXTwitter />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
