import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import { Jura } from "next/font/google"
import { cookies } from "next/headers"
import "~/styles/globals.css"
import { TRPCReactProvider } from "~/trpc/react"
import FormContextProvider from "../contexts/FormContext"
import "../styles/clerk.scss"

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
    <ClerkProvider
      appearance={{
        baseTheme: dark,
        variables: {
          colorPrimary: "#4159b9",
        },
        elements: { logoBox: "logo-placement" },
      }}
    >
      <html lang='en'>
        <body className={`font-sans ${inter.variable}`}>
          <TRPCReactProvider cookies={cookies().toString()}>
            <FormContextProvider>
              <div className='body-container'>{children}</div>
            </FormContextProvider>
          </TRPCReactProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
