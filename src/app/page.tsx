// import Link from "next/link"

// import { CreatePost } from "~/app/_components/create-post"
// import { api } from "~/trpc/server"
import Image from "next/image"
import "./page.scss"

export default async function Home() {
  // const hello = await api.post.hello.query({ text: "from tRPC" })

  return (
    <main>
      <div className='main-page-wrapper'>
        <div className='hero'>
          <h1>
            GlobalForm <br />
            <span>Solutions</span>
          </h1>
          <div className='fake-input'></div>

          <p>
            Create your own customized form today and share it with friends or
            use the form as a invitation for a event or other. Create your own
            customized form today and share it with friends or use the form as a
            invitation for a event or other happenings!
          </p>
          <div className='arrow-btn'>&gt;</div>
        </div>

        <section>
          <div>
            <div>
              <Image
                src='/image1-landingpage.jpg'
                alt='Girl creating a form on the computer'
                width={500}
                height={500}
              />
            </div>
            <p>
              Empower your ideas and streamline your data collection process
              with our intuitive online form creator.
            </p>
          </div>
          <div>
            <div>
              <Image
                src='/image2-landingpage.jpg'
                alt='Guy writing a his idea on a paper on what to have on his custom form'
                width={500}
                height={500}
              />
            </div>
            <p>
              Whether you're designing a survey, registration form, or feedback
              questionnaire, our platform allows you to effortlessly craft
              custom forms tailored to your needs.
            </p>
          </div>
          <div>
            <div>
              <Image
                src='/image3-landingpage.jpg'
                alt='Some wooden cirkles triangles and rectangels standing on eachother to illustrate building and creating your own form.'
                width={500}
                height={500}
              />
            </div>
            <p>
              Unleash the power of your imagination with our platform designed
              to inspire creativity. Your creations, your way because innovation
              knows no bounds.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}

// async function CrudShowcase() {
//   const latestPost = await api.post.getLatest.query();

//   return (
//     <div className="w-full max-w-xs">
//       {latestPost ? (
//         <p className="truncate">Your most recent post: {latestPost.name}</p>
//       ) : (
//         <p>You have no posts yet.</p>
//       )}

//       <CreatePost />
//     </div>
//   );
// }
