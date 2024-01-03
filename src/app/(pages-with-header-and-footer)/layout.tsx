import Footer from "../_components/Footer"

const HeaderFooterLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className='body-padding'>{children}</div>
      <Footer />
    </>
  )
}

export default HeaderFooterLayout
