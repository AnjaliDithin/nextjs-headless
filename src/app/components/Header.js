"use client";
// import { useState } from "react";
import useStickyHeader from "../../js/Stickyheader";
import React from "react";

import Link from "next/link";
import "../globals.scss";
import "../../styles/_header.scss";
import "../../styles/_common.scss";


export default function Header () {
    useStickyHeader();
  return (
    <header className="header_block  header_sticky">
        <div className="header_container fullcontainer">
            <div className="header_area">
                <div className="logo">
                    <Link href="/">
                        <img src="/assets/hdr-logo.svg" alt="truppglobal" title="truppglobal" width="60" height="60" />
                    </Link>
                </div>
                <nav className="main-navigation">
                    <ul className="hdr_menu">
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="#about">About</Link></li>
                        <li><Link href="#testimonials">Testimonials</Link></li>
                        <li><Link href="#contact">Contact</Link></li>
                    </ul>
                </nav>
                <div className="common-btn-blk get-in-touch">
                    <Link href="#contact" className="common-black-btn"><span>Get a Free Quote</span></Link>
                </div>
                <div className="mobile-menu">
                    <div className="menu-icon">
                        <img className="mobile-open" src="/assets/menu.png" alt="mobile menu" title="mobile menu" width="32" height="32" />
                        <img className="mobile-close" src="/assets/close.png" alt="mobile menu" title="mobile menu" width="32" height="32" />
                    </div>
                </div>
            </div>
        </div>
    </header>
  )
}
