import Footer from "../_components/Footer"

export const metadata = {
  title: "GlobalForm Solutions",
  description:
    "Create forms and surveys with ease. Customise your forms to suit your needs.",
  icons: [{ rel: "icon", url: "/favicon.png" }],
}

const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='body-padding'>{children}</div>
      <Footer />
    </>
  )
}

export default HeaderFooterLayout
