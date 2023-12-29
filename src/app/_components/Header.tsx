"use client"
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
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
        <Link href='/'>
          <Image
            className='logo'
            src='/favicon.png'
            alt='Global Form Solutions logo'
            width={50}
            height={50}
          />
        </Link>
        <ul className={isMenuOpen ? "display-flex" : ""}>
          <Link onClick={toggleMenu} href='/'>
            <li>Home</li>
          </Link>

          {/* Only shows when you are logged out. */}
          <SignedOut>
            <Link onClick={toggleMenu} href='/login'>
              <li>Login</li>
            </Link>
            <Link onClick={toggleMenu} href='/signup'>
              <li>Create Account</li>
            </Link>
          </SignedOut>

          {/* Only shows when you are logged in. */}
          <SignedIn>
            <Link onClick={toggleMenu} href='/dashboard'>
              <li>Dashboard</li>
            </Link>

            <li className='signout-btn-li'>
              <SignOutButton />
            </li>

            {/* Account handler */}
            <li>
              <UserButton />
            </li>
          </SignedIn>
        </ul>

        <div className='hamburger' onClick={toggleMenu}>
          {isMenuOpen ? <IoClose /> : <IoMenu />}
        </div>
      </nav>
    </header>
  )
}

export default Header
