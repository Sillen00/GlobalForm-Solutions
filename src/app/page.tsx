import { UserButton } from "@clerk/nextjs"
import Link from "next/link"
import { IoIosArrowDroprightCircle } from "react-icons/io"

// import { CreatePost } from "~/app/_components/create-post"
// import { api } from "~/trpc/server"
import Image from "next/image"
import "./page.scss"

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" })

  return (
    <main>
        <UserButton afterSignOutUrl='/' />
        <Link href='/login'>
          <p className='text-2xl font-bold cursor-pointer text-black'>Login</p>
        </Link>
      <div className='hero'>
        <h1>
          GlobalForm <br />
          <span>Solutions</span>
        </h1>
        <div className='fake-input'></div>

        <p>
          Create your own customized form today and share it with friends or use
          the form as a invitation for a event or other. Create your own
          customized form today and share it with friends or use the form as a
          invitation for a event or other happenings!
        </p>
        <IoIosArrowDroprightCircle className='arrow-btn' />
      </div>

      <section>
        <div>
          <Image
            src='/image1-landingpage.jpg'
            alt='Girl creating a form on the computer'
            width={767}
            height={767}
          />
        </div>
        <p>
          Empower your ideas and streamline your data collection process with
          our intuitive online form creator.
        </p>
        <div>
          <Image
            src='/image2-landingpage.jpg'
            alt='Guy writing a his idea on a paper on what to have on his custom form'
            width={767}
            height={767}
          />
        </div>
        <p>
          Whether you're designing a survey, registration form, or feedback
          questionnaire, our platform allows you to effortlessly craft custom
          forms tailored to your needs.
        </p>
        <div>
          <Image
            src='/image3-landingpage.jpg'
            alt='Some wooden cirkles triangles and rectangels standing on eachother to illustrate building and creating your own form.'
            width={767}
            height={767}
          />
        </div>
        <p>
          Unleash the power of your imagination with our platform designed to
          inspire creativity. Your creations, your way because innovation knows
          no bounds.
        </p>
      </section>
    </main>
  )
}
