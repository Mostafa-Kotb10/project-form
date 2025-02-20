import { Outlet } from 'react-router'

const AppLayout = () => {
  return (
    <div >
        This is the layout
        <Outlet />
    </div>
  )
}

export default AppLayout