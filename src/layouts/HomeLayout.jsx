import { Link, Outlet } from "react-router-dom";
import { HiMenuAlt1 } from "react-icons/hi";

const HomeLayout = () => {
  const sideBarItem = (
    <>
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/"}>Profile</Link>
      </li>
      <li>
        <Link to={"/"}>Events</Link>
      </li>
      <li>
        <Link to={"/"}>Bookings</Link>
      </li>
    </>
  );
  return (
    <>
      <div className="relative drawer lg:drawer-open">
        <input id="sidebar" type="checkbox" className="drawer-toggle" />
        <div className="relative drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <Outlet />
          
          <label
            htmlFor="sidebar"
            className="absolute left-0 btn btn-ghost drawer-button lg:hidden"
          >
            <HiMenuAlt1 className="w-7 h-7" />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="sidebar"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* <h1>Ev Tickets</h1> */}
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <Link to={"/"} className="text-xl mb-2 font-bold">
              Ev Tickets
            </Link>
            {sideBarItem}

            <li className="mt-auto">
              <div className="flex items-center">
                <button className="btn btn-ghost grow">Homepage</button>
                <button className="btn btn-ghost grow">Logout</button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default HomeLayout;
