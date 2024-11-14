import AdminNavigation from './_ui/navigation'

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <AdminNavigation />
      <main>{children}</main>
    </>
  )
}

export default DashboardLayout
