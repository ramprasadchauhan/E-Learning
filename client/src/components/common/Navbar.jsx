import { Link, matchPath, useLocation } from "react-router-dom";
import { NavbarLinks } from "../../data/navbar-links";
import Logo from "../../assets/Logo/Logo-Full-Light.png";
const Navbar = () => {
  const location = useLocation();
  const matchRoute = (route) => {
    return matchPath({ path: route }, location.pathname);
  };
  return (
    <div className="flex h-14 items-center border-b-[1px] border-b-richblack-700">
      <div className="flex w-11/12 items-center mx-auto max-w-maxContent justify-between">
        <Link to="/">
          <img src={Logo} alt="logo" height={42} width={160} loading="lazy" />
        </Link>
        {/* Navlink */}
        <nav>
          <ul className="flex gap-x-6 text-richblack-25">
            {NavbarLinks.map((link, i) => (
              <li key={i}>
                {link.title === "Catalog" ? (
                  <div></div>
                ) : (
                  <Link to={link?.path}>
                    <p
                      className={`${
                        matchRoute(link?.path)
                          ? "text-yellow-25"
                          : "text-richblack-25"
                      } `}
                    >
                      {link.title}
                    </p>
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        {/* Login Signup Dashboard */}
        <div className="flex gap-x-4 items-center"></div>
      </div>
    </div>
  );
};

export default Navbar;
