import { Outlet, ScrollRestoration } from "react-router-dom"
import Navbar from "../components/Navbar"

const Root = () => {
  return (
    <div>
        <Navbar />
        <Outlet />
        <ScrollRestoration />
    </div>
  )
}

export default Root