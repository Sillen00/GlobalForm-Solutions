"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import "./Header.scss"

function Header() {
  //   const [isLoggedin, setIsLoggedin] = useState(false) //Används inte än så länge... Förberädde för login länkarna.
  const [isMenuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  return (
    <header>
      <nav>
        <Image
          src='/favicon.png'
          alt='Global Form Solutions logo'
          width={50}
          height={50}
        />
        <ul className={isMenuOpen ? "display-block" : ""}>
          <Link onClick={toggleMenu} href='/'>
            <li>Home</li>
          </Link>
          <Link onClick={toggleMenu} href='/login'>
            <li>Login</li>
          </Link>
          <Link onClick={toggleMenu} href='/'>
            <li>Create Account</li>
          </Link>

          {false && (
            <>
              <Link onClick={toggleMenu} href='/'></Link>
              <Link onClick={toggleMenu} href='/'></Link>
            </>
          )}
        </ul>

        <div className='hamburger' onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  )
}

export default Header
