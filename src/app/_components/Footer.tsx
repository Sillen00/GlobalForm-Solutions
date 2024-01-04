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
        <Link href='#'>
          <p>Customer Service</p>
        </Link>
        <Link href='#'>
          <p>Privacy Policy</p>
        </Link>
        <Link href='#'>
          <p>Cookie Settings</p>
        </Link>
      </AccordionSection>
      <AccordionSection title='About Us'>
        <Link href='/about/press'>
          <p>Press</p>
        </Link>
        <Link href='#'>
          <p>News</p>
        </Link>
        <Link href='#'>
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
        <Link href='#'>
          <p>FAQ</p>
        </Link>
        <Link href='#'>
          <p>Regulations</p>
        </Link>
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
