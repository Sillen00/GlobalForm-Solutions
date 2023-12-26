import Image from "next/image"
import Link from "next/link"
import "./Header.scss"
import { IoMenu } from "react-icons/io5"

function Header() {
//   const [isLoggedin, setIsLoggedin] = useState(false) //Används inte än så länge... Förberädde för login länkarna.

  return (
    <header>
      <nav>
        <Image src='/favicon.png' alt='Global Form Solutions logo' width={50} height={50} />
        <ul>
          <Link href='/'>Home</Link>
          <Link href='/login'>Login</Link>
          <Link href='/'>Create Account</Link>

          {true === true && (
            <>
              <Link href='/'></Link>
              <Link href='/'></Link>
            </>
          )}
        </ul>

        <Link href='#' className='hamburger'>
            <IoMenu />
        </Link>
      </nav>
    </header>
  )
}

export default Header
