interface Props {
  children: React.ReactNode
}

const HomeLayout = ({ children }: Props) => {
  return (
    <>
      <main className="landing-main">{children}</main>
    </>
  )
}

export default HomeLayout
