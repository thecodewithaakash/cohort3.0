import React, { use, useState } from "react";
import { LogOut, Menu, ShoppingCart, X, Zap } from "lucide-react";
import { NavLink } from "react-router";
import Aside from "./Aside";

const navLinks = [
  { to: "/home", label: "Home" },
  { to: "/products", label: "Shop" },
  { to: "/about", label: "About" },
];

const Navbar = () => {
  return (
    <div>
      <header className="sticky top-0 z-30 transition-all duration-300 bg-[#0d0d0d]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-6">
            <a
              aria-current="page"
              className="flex items-center gap-2 shrink-0 active"
              href="/home"
            >
              <div className="w-8 h-8 bg-volt rounded-xl flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-zap text-ink fill-ink"
                >
                  <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path>
                </svg>
              </div>
              <span className="font-heading font-bold text-lg text-white">
                Sky<span className="text-volt">Mart</span>
              </span>
            </a>
            <nav className="hidden md:flex items-center gap-6 text-white">
              <a aria-current="page" className="nav-link active " href="/home">
                Home
              </a>
              <a className="nav-link " href="/products">
                Shop
              </a>
              <a className="nav-link " href="/about">
                About
              </a>
            </nav>
            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                <div className="w-6 h-6 bg-volt rounded-lg flex items-center justify-center text-ink text-xs font-bold">
                  A
                </div>
                <span className="text-sm text-white/70 font-body max-w-[100px] truncate">
                  Aakash saha
                </span>
              </div>
              <button
                className="relative p-2.5 bg-white/8 hover:bg-white/12 border border-white/10 rounded-xl transition-all"
                fdprocessedid="r11l0t"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart text-white"
                >
                  <circle cx="8" cy="21" r="1"></circle>
                  <circle cx="19" cy="21" r="1"></circle>
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
                </svg>
              </button>
              <button
                title="Logout"
                className="p-2.5 bg-white/8 hover:bg-red-500/20 hover:border-red-500/30 border border-white/10 rounded-xl transition-all text-white/60 hover:text-red-400"
                fdprocessedid="o6ajzx"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                  <polyline points="16 17 21 12 16 7"></polyline>
                  <line x1="21" x2="9" y1="12" y2="12"></line>
                </svg>
              </button>
              <button className="md:hidden p-2.5 bg-white/8 border border-white/10 rounded-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </button>
            </div>
          </div>
        </header>
    </div>
  );
};

export default Navbar;
