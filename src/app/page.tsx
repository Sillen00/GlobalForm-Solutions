// import Link from "next/link"

// import { CreatePost } from "~/app/_components/create-post"
// import { api } from "~/trpc/server"
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

        <section className='min-h-screen'>sd</section>
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
