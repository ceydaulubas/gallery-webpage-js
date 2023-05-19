// NavBar.js

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logoImg from '../../images/logo.png';
import './NavBar.css';

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="white" variant="light" className="my-4">
            <div className="navbar-container">
                <div>
                    <Navbar.Brand href="/">
                        <img
                            src={logoImg}
                            width="43.33"
                            height="25"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                        <span className="d-none d-lg-inline-block">HAPPY GALERİ</span>
                    </Navbar.Brand>
                </div>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <Nav.Link href="/hakkimizda" className="navbar-link">HAKKIMIZDA</Nav.Link>
                        <Nav.Link href="/sikcasorulansorular" className="navbar-link">SIKÇA SORULAN SORULAR</Nav.Link>
                        <Nav.Link href="/galeri" className="navbar-link">GALERİ</Nav.Link>
                        <Nav.Link href="/iletisim" className="navbar-link">İLETİŞİM</Nav.Link>
                        <Nav.Link href="/girisyap" className="navbar-link">GİRİŞ YAP</Nav.Link>
                        <Nav.Link href="/alisveris" className="navbar-link">ALIŞVERİŞ</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </div>
        </Navbar>
    )
}

export default NavBar;

