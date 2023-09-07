"use client"
import React from "react";
import { useEffect } from "react";
import Link from "next/link";
import NavLink from "next/link";
import { useRouter } from 'next/navigation';

import Sticky from "react-stickynode";
import Image from "next/image";

// Images
import logo from "../assets/images/logo.svg";
import { BsArrowRight } from "react-icons/bs";

function Header() {
  const router = useRouter();
  useEffect(() => {
    // Mobile Menu sidebar function
    var btn = document.querySelector(".menuicon");
    var nav = document.querySelector(".menu-links");

    function toggleFunc() {
      btn.classList.toggle("open");
      nav.classList.toggle("show");
    }

    btn.addEventListener("click", toggleFunc);

    // Mobile Submenu open close function
    var navMenu = [].slice.call(
      document.querySelectorAll(".menu-links > ul > li")
    );
    for (var y = 0; y < navMenu.length; y++) {
      navMenu[y].addEventListener("click", function () {
        menuClick(this);
      });
    }

    function menuClick(current) {
      const active = current.classList.contains("open");
      navMenu.forEach((el) => el.classList.remove("open"));

      if (active) {
        current.classList.remove("open");
        console.log("active");
      } else {
        current.classList.add("open");
        console.log("close");
      }
    }

    return () => {
      btn.removeEventListener("click", toggleFunc);
      navMenu.forEach((el) => el.removeEventListener("click", menuClick));
    };
  }, []);

  return (
    <header className="header rs-nav ">
      
      <Sticky enabled={true} className="sticky-header navbar-expand-lg">
        <div className="menu-bar clearfix">
          <div className="container clearfix">
            <div className="menu-logo">
              <Link href="/">
                <Image src={logo} alt="Infispark" />
              </Link>
            </div>

            <button
              className="navbar-toggler collapsed menuicon justify-content-end"
              type="button"
              data-toggle="collapse"
              data-target="#menuDropdown"
              aria-controls="menuDropdown"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>

            <div className="secondary-menu m-l10">
              <div className="header-contact">
                <Link href="https://rebrand.ly/InfiTrainers" className="btn-primary radius-sm ">
                  <span style={{fontSize: "14px"}} >Apply as Trainer</span>  <BsArrowRight />
                </Link>
              </div>
            </div>

            {/* <!-- Navigation Menu ==== --> */}
            <div
              className="menu-links navbar-collapse collapse justify-content-center"
              id="menuDropdown"
            >
              <div className="menu-logo m-t30">
                <Link href="/">
                  <Image src={logo} alt="" />
                </Link>
              </div>
              <ul className="nav navbar-nav">
                <li>
                  <NavLink href={"/"} className={router.pathname === '/' ? 'active' : ''}>
                  {router.pathname === '/'}
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink href={"/about-us"} className={router.pathname === '/about-us' ? 'active' : ''}>
                  {router.pathname === '/about-us'} About Us
                  </NavLink>
                </li>
                <li>
                  <Link href={"/what-we-do"} className={router.pathname === '/what-we-do' ? 'active' : ''}>
                  {router.pathname === '/what-we-do'} Services
                  </Link>
                </li>

                <li>
                  <NavLink href={"/how-we-do-it"} className={router.pathname === '/how-we-do-it' ? 'active' : ''}>
                  {router.pathname === '/how-we-do-it'} How we do it
                  </NavLink>
                </li>
                
                <li>
                  <NavLink href={"https://shelovescode.com/"} className={router.pathname === 'https://shelovescode.com/' ? 'active' : ''}>
                  {router.pathname === 'https://shelovescode.com/'} She Loves Code
                  </NavLink>
                </li>
                <li>
                  <NavLink href={"/unispark"} className={router.pathname === '/unispark' ? 'active' : ''}>
                  {router.pathname === '/unispark'} Unispark
                  </NavLink>
                </li>
                <li>
                  <NavLink href={"/contact-us"}>
                  {router.pathname === '/contact-us'} Contact Us
                  </NavLink>
                </li>

                <li className="hidden-desk" >
                  <NavLink href={"https://rebrand.ly/InfiTrainers"} >
                  Apply as Trainer
                  </NavLink>
                </li>
              </ul>
            </div>
            {/* <!-- Navigation Menu END ==== --> */}
          </div>
        </div>
      </Sticky>
    </header>
  );
}

export default Header;
