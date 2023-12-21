import { UserButton } from "@clerk/nextjs";
import Head from "next/head";

// import { api } from "~/utils/api";

export default function Home() {
  // const hello = api.post.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>GlobalFormSolutions</title>
        <meta
          name='description'
          content='Create your own forms. Customize and create after your needs.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main>
          <h1>Detta är main sidan...</h1>
          <UserButton afterSignOutUrl='/' />
      </main>
    </>
  )
}
   


