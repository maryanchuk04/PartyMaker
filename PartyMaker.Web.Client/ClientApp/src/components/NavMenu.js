import React, { useEffect, useState } from "react";
import { Container, Navbar, NavbarBrand, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import "./NavMenu.css";
import { getAuthState, isAuth, logOut } from "../utils/helpers";
import { useMedia } from "use-media";
import { Button } from "@mui/material";

export function NavMenu() {
  const [state, setState] = useState({
    userAuth: false,
    authState: {},
  });
  const [open, setOpen] = useState(false);
  const media = useMedia({ maxWidth: 590 });

  useEffect(() => {
    if (isAuth()) {
      setState({
        userAuth: true,
        authState: getAuthState(),
      });
    } else
      setState({
        userAuth: false,
      });
  }, []);

  const handleMenuClick = () => {
    if (open) {
      setOpen(false);
    } else setOpen(true);
  };

  return !media ? (
    <>
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white  box-shadow h-100 ">
          <Container>
            <NavbarBrand tag={Link} to="/">
              <h1>
                Party<span style={{ color: "#1aa94b" }}>Maker</span>
              </h1>
            </NavbarBrand>
            <ul className="navbar-nav flex-grow">
              <NavItem style={{ display: "contents" }}>
                <NavLink tag={Link} className="text-light m-1" to="/">
                  Home
                </NavLink>
              </NavItem>
              <NavItem style={{ display: "contents" }}>
                <NavLink tag={Link} className="text-light m-1" to="/сontact">
                  Contact Us
                </NavLink>
              </NavItem>
              {state.userAuth ? (
                state?.authState?.customerId !== "" ? (
                  <>
                    <NavItem style={{ display: "contents" }}>
                      <NavLink
                        tag={Link}
                        className="text-light m-1"
                        to="/create-order"
                      >
                        Create Order
                      </NavLink>
                    </NavItem>
                    <NavItem style={{ display: "contents" }}>
                      <NavLink
                        tag={Link}
                        className="text-light m-1"
                        to="/customer/profile"
                      >
                        Profile
                      </NavLink>
                      <NavItem style={{ display: "contents" }}>
                        <NavLink
                          tag={Link}
                          className="text-light create-account-li m-1"
                          onClick={logOut}
                        >
                          LogOut
                        </NavLink>
                      </NavItem>
                    </NavItem>
                  </>
                ) : (
                  <>
                    <NavItem style={{ display: "contents" }}>
                      <NavLink
                        tag={Link}
                        className="text-light m-1"
                        to="/supplier/workspace"
                      >
                        Workspace
                      </NavLink>
                    </NavItem>
                    <NavItem style={{ display: "contents" }}>
                      <NavLink
                        tag={Link}
                        className="text-light m-1"
                        to="/supplier/profile-edit"
                      >
                        Profile
                      </NavLink>
                    </NavItem>
                    <NavItem style={{ display: "contents" }}>
                      <NavLink
                        tag={Link}
                        className="text-light create-account-li m-1"
                        onClick={logOut}
                      >
                        LogOut
                      </NavLink>
                    </NavItem>
                  </>
                )
              ) : (
                <>
                  <NavItem style={{ display: "contents" }}>
                    <NavLink
                      tag={Link}
                      className="text-light sing-in m-1"
                      to="/auth/login"
                    >
                      Sign In
                    </NavLink>
                  </NavItem>
                  <NavItem style={{ display: "contents" }}>
                    <NavLink
                      tag={Link}
                      className="text-light  create-account-li ms-1"
                      to="/create-account"
                    >
                      Sign Up
                    </NavLink>
                  </NavItem>
                </>
              )}
            </ul>
          </Container>
        </Navbar>
      </header>
    </>
  ) : (
    <>
      <header className="responsive-header container">
        <NavbarBrand tag={Link} to="/">
          <h1>
            Party<span style={{ color: "#1aa94b" }}>Maker</span>
          </h1>
        </NavbarBrand>
        <div className="responsive_menu">
          <div
            className={`btnn ${open ? "active" : "not-active"}`}
            onClick={handleMenuClick}
            id="btn"
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          className="dropdown-menu-block container"
          style={{ display: open ? "block" : "none" }}
        >
          <NavItem style={{ display: "contents" }}>
            <NavLink
              tag={Link}
              className="text-light m-1"
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>
          </NavItem>
          <NavItem style={{ display: "contents" }}>
            <NavLink
              tag={Link}
              className="text-light m-1"
              to="/сontact"
              onClick={() => setOpen(false)}
            >
              Contact Us
            </NavLink>
          </NavItem>
          {state.userAuth ? (
            state?.authState?.customerId !== "" ? (
              <>
                <NavItem style={{ display: "contents" }}>
                  <NavLink
                    tag={Link}
                    className="text-light m-1"
                    to="/create-order"
                    onClick={() => setOpen(false)}
                  >
                    Create Order
                  </NavLink>
                </NavItem>
                <NavItem style={{ display: "contents" }}>
                  <NavLink
                    tag={Link}
                    className="text-light m-1"
                    to="/customer/profile"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </NavLink>
                  <NavItem style={{ display: "contents" }}>
                    <NavLink
                      tag={Link}
                      className="text-light create-account-li m-1"
                      onClick={logOut}
                    >
                      LogOut
                    </NavLink>
                  </NavItem>
                </NavItem>
              </>
            ) : (
              <>
                <NavItem style={{ display: "contents" }}>
                  <NavLink
                    tag={Link}
                    className="text-light m-1"
                    to="/supplier/workspace"
                    onClick={() => setOpen(false)}
                  >
                    Workspace
                  </NavLink>
                </NavItem>
                <NavItem style={{ display: "contents" }}>
                  <NavLink
                    tag={Link}
                    className="text-light m-1"
                    to="/supplier/profile-edit"
                    onClick={() => setOpen(false)}
                  >
                    Profile
                  </NavLink>
                </NavItem>
                <NavItem style={{ display: "contents" }}>
                  <NavLink
                    tag={Link}
                    className="text-light create-account-li m-1"
                    onClick={logOut}
                  >
                    LogOut
                  </NavLink>
                </NavItem>
              </>
            )
          ) : (
            <>
              <NavItem style={{ display: "contents" }}>
                <NavLink
                  tag={Link}
                  className="text-light sing-in m-1"
                  to="/auth/login"
                  onClick={() => setOpen(false)}
                >
                  Sign In
                </NavLink>
              </NavItem>
              <NavItem style={{ display: "contents" }}>
                <NavLink
                  tag={Link}
                  className="text-light  create-account-li ms-1"
                  to="/create-account"
                  onClick={() => setOpen(false)}
                >
                  Sign Up
                </NavLink>
              </NavItem>
            </>
          )}
        </div>
      </header>
    </>
  );
}
