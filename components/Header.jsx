import React from "react";
import { Container, Row, Navbar, Nav, Offcanvas,Image } from "react-bootstrap";
import NavbarToggle from "react-bootstrap/NavbarToggle";
import NavbarCollapse from "react-bootstrap/NavbarCollapse";

import style from "../styles/_header.module.css";

export const Header = () => {
  return (
    <>
      <div className={style.HeaderSection}>
        <Container>
          <Row>
            <div className={style.header_section}>
              <div className="desktop_nav">
                <Container>
                  <Row>
                    <Navbar expand="lg">
                      <Navbar.Brand href="#home">
                        <img src="/images/Logo.png" />
                      </Navbar.Brand>
                      <NavbarToggle />
                      <NavbarCollapse
                        id="responsive-navbar-nav"
                        className={style.navbar}
                      >
                        <Nav className={style.header_nav}>
                          <Nav.Link
                            href="Home"
                            //   active={activeLink == "/Home"}
                            className={[style.navlink, style.active]}
                          >
                            Home
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            About Us
                          </Nav.Link>

                          <Nav.Link href="Service" className={style.navlink}>
                            Services
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            Blog
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            Contact
                          </Nav.Link>
                          <Image src="images/Call.png" className={style.CallImage} />
                          <div className={style.Assistance}>
                            <label className={style.Name}>
                              Road Assistance
                            </label>
                            <label className={style.NumberText}>
                              1800 265 24 52
                            </label>
                          </div>
                        </Nav>
                      </NavbarCollapse>
                    </Navbar>
                  </Row>
                </Container>
              </div>

              <div className="mobile_nav">
                <Navbar expand={false}>
                  <Container fluid>
                    <Navbar.Brand href="#">
                      {" "}
                      <img src="/images/Logo.png" />
                    </Navbar.Brand>
                    <Navbar.Toggle
                      aria-controls="offcanvasNavbar"
                      className={style.menu_icon}
                    />
                    <Navbar.Offcanvas
                      id="offcanvasNavbar"
                      aria-labelledby="offcanvasNavbarLabel"
                      placement="start"
                      className={style.leftmenu}
                    >
                      <Offcanvas.Header
                        closeButton
                        // className={style.CloseBtn}
                      ></Offcanvas.Header>
                      <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link
                            href="Home"
                            className={[style.navlink, style.active]}
                          >
                            Home
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            About Us
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            Service
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            Blog
                          </Nav.Link>
                          <Nav.Link href="" className={style.navlink}>
                            Contact
                          </Nav.Link>
                        </Nav>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              </div>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};
