import { UserButton } from "@clerk/nextjs"
import Link from "next/link"

// import { CreatePost } from "~/app/_components/create-post"
import { api } from "~/trpc/server"

export default async function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-white'>
      <div className='container flex flex-col items-center justify-center gap-12 px-4 py-16 '>
        <UserButton afterSignOutUrl='/' />
        <Link href='/login'>
          <p className='text-2xl font-bold cursor-pointer'>Login</p>
        </Link>
        {/* <CrudShowcase /> */}
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
