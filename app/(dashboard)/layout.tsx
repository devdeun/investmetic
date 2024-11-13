import DashboardNavigation from './_ui/navigation'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <DashboardNavigation />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
