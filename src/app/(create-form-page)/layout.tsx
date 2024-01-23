import Header from "../_components/Header"

const CreateFormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default CreateFormLayout
