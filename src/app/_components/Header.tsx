"use client"
import { SignOutButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { IoClose, IoMenu } from "react-icons/io5"
import "./Header.scss"

function Header() {
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
          <li>
            <Link onClick={toggleMenu} href='/'>
              Home
            </Link>
          </li>

          {/* Only shows when you are logged out. */}
          <SignedOut>
            <li>
              <Link onClick={toggleMenu} href='/login'>
                Login
              </Link>
            </li>
            <li>
              <Link onClick={toggleMenu} href='/signup'>
                Create Account
              </Link>
            </li>
          </SignedOut>

          {/* Only shows when you are logged in. */}
          <SignedIn>
            <li>
              <Link onClick={toggleMenu} href='/dashboard'>
                Dashboard
              </Link>
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
