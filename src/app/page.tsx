import { SignedIn, SignedOut } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { IoCreateOutline } from "react-icons/io5"
import Footer from "./_components/Footer"
import Header from "./_components/Header"
import "./page.scss"

export default async function Home() {
  return (
    <>
      <Header />
      <div className='body-padding'>
        <main>
          <div className='hero'>
            <div className='heroLeft'>
              <h1>
                GlobalForm <br />
                <span>Solutions</span>
              </h1>
              <p>
                Create your own customized form today and share it with friends
                or use the form as a invitation for a event or other. Create
                your own customized form today and share it with friends or use
                the form as a invitation for a event or other happenings!
              </p>
              <SignedOut>
                <Link href='/login'>
                  <button>
                    <span>Create an account and create your own form!</span>
                    <IoCreateOutline aria-label='Create ouline icon' />
                  </button>
                </Link>
              </SignedOut>
              <SignedIn>
                <Link href='/dashboard'>
                  <button>
                    <span>Create your own form</span>
                    <IoCreateOutline aria-label='Create outline icon' />
                  </button>
                </Link>
              </SignedIn>
            </div>

            <div className='heroRight'>
              <Image
                src='/MaskotGFS.png'
                alt='Robot holding an inputfield'
                width={250}
                height={250}
              />
            </div>
          </div>

          <section className='landingPageSection'>
            <div>
              <Image
                src='/image1-landingpage.jpg'
                alt='Girl creating a form on the computer'
                width={1080}
                height={1080}
              />
            </div>
            <p>
              Empower your ideas and streamline your data collection process
              with our intuitive online form creator.
            </p>
            <div>
              <Image
                src='/image2-landingpage.jpg'
                alt='Guy writing a his idea on a paper on what to have on his custom form'
                width={1080}
                height={1080}
              />
            </div>
            <p>
              Whether you're designing a survey, registration form, or feedback
              questionnaire, our platform allows you to effortlessly craft
              custom forms tailored to your needs.
            </p>
            <div>
              <Image
                src='/image3-landingpage.jpg'
                alt='Some wooden cirkles triangles and rectangels standing on eachother to illustrate building and creating your own form.'
                width={1080}
                height={1080}
              />
            </div>
            <p>
              Unleash the power of your imagination with our platform designed
              to inspire creativity. Your creations, your way because innovation
              knows no bounds.
            </p>
          </section>
        </main>
      </div>
      <Footer />
    </>
  )
}
