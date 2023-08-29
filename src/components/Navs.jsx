import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import Rozet from "./Rozet";

function Navs() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const handleClick = () => {
    navigate("/basket");
  };
  const navigate = useNavigate();
  return (
    <>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-evenly gap-3 items-center">
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwv5gjD8d5u3NBppyfAgP7o-L02h6XILOLKELciu4hMmHGM5ew2hUOeTN2jqdiRoL7eSA&usqp=CAU"
              className=" h-20 mr-3"
              alt=""
            />
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-gray-700">
        <div className="max-w-screen-xl px-4 py-3 mx-auto">
          <div className="flex justify-between items-center">
            <ul className="flex flex-wrap justify-center items-center gap-2">
              <li>
                <Link
                  to="/"
                  className="text-md hover:bg-slate-200 hover:rounded-sm p-3"
                >
                  Home
                </Link>
              </li>
            </ul>

            <ul className="flex justify-center items-end">
              <li>
                <Link to="/basket">
                  <Rozet />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navs;
