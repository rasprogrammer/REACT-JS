import { Link, Outlet } from "react-router-dom";

export default function Profile() {
  return <> 
    <br />
    <br />
    <br />

    <nav>
      <Link to="sideProject">Side Projects</Link> | {" "}
      <Link to="companyProject">Company Projects</Link>
    </nav>

    <Outlet />
  </>
}