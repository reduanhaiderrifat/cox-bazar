import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = (
    <>
      <li>
        <NavLink
          //   style={({ isActive, isTransitioning }) => {
          //     return {
          //       fontWeight: isActive ? "bold" : "",
          //       backgroundColor: isActive ? "transparent" : "",
          //       border: isActive ? "1px solid red" : "",
          //       color: isActive ? "red" : "black",
          //       viewTransitionName: isTransitioning ? "slide" : "",
          //     };
          //   }}
          style={({ isActive, isTransitioning }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid red" : "",
            backgroundColor: isActive ? "transparent" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          })}
          to="/"
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid red" : "",
            backgroundColor: isActive ? "transparent" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          })}
          to="/destination"
        >
          Destination
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid red" : "",
            backgroundColor: isActive ? "transparent" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          })}
          to="/blog"
        >
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink
          style={({ isActive, isTransitioning }) => ({
            color: isActive ? "red" : "black",
            fontWeight: isActive ? "bold" : "",
            border: isActive ? "1px solid red" : "",
            backgroundColor: isActive ? "transparent" : "",
            viewTransitionName: isTransitioning ? "slide" : "",
          })}
          to="/contact"
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              {links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal flex items-center px-1">
            <div className="mr-3">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
            {links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Login</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
