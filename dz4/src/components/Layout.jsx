import { Link, Outlet } from "react-router-dom"
import "../App.css"
const Layout = () => {
  return (
    <div>
      <header className="header">
        <Link to="/">home</Link>
        <Link to="/Counter">counter</Link>
        <Link to="/Users">users</Link>
        <Link to="/todos">todos</Link>
        <Link to="/post">post</Link>
      </header>

      <Outlet/>

      <footer></footer>
    </div>
  )
}

export default Layout
