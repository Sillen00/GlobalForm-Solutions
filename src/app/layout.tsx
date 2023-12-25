import { ClerkProvider } from "@clerk/nextjs"
import { Jura } from "next/font/google"
import { cookies } from "next/headers"
import "~/styles/globals.css"
import { TRPCReactProvider } from "~/trpc/react"

const inter = Jura({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata = {
  title: "GlobalForm Solutions",
  description:
    "Create forms and surveys with ease. Customise your forms to suit your needs.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`font-sans ${inter.variable}`}>
          <div className='body-container'>
            <TRPCReactProvider cookies={cookies().toString()}>
              {children}
            </TRPCReactProvider>
          </div>
        </body>
      </html>
    </ClerkProvider>
  )
}
