import Footer from "../_components/Footer"
import Header from "../_components/Header"

const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div className='body-padding'>{children}</div>
      <Footer />
    </>
  )
}

export default HeaderFooterLayout
