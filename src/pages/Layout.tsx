import { Outlet } from "react-router-dom"
import "./styles/Layout.scss"

const Layout = () => {
  return (
    <div>
        Layout
        <Outlet />
    </div>
  )
}

export default Layout