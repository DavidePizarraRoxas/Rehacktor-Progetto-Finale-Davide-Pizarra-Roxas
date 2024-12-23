import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, Input } from "@nextui-org/react";
import { useState } from "react";
import { Link } from "react-router";
import ModalNav from "../ModalUI/ModaNav";




export const SearchIcon = ({ size = 24, strokeWidth = 1.5, width, height, ...props }) => {
      return (
            <svg
                  aria-hidden="true"
                  fill="none"
                  focusable="false"
                  height={height || size}
                  role="presentation"
                  viewBox="0 0 24 24"
                  width={width || size}
                  {...props}
            >
                  <path
                        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                  />
                  <path
                        d="M22 22L20 20"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={strokeWidth}
                  />
            </svg>
      );
};


export default function Navabar() {


      return (
            <Navbar shouldHideOnScroll isBordered className="navbar">
                  <NavbarBrand>
                        <Link to={`/`}>
                              <h1 className="font-bold text-inherit">Reahcktor</h1>
                        </Link>
                  </NavbarBrand>
                  <NavbarContent className="hidden lg:flex gap-4 w-[50%]" justify="center">
                        <ModalNav/>
                  </NavbarContent>
                  <NavbarContent justify="end">
                        <NavbarItem className="hidden lg:flex">
                              <Button color="primary" href="#" variant="flat">
                                    Login
                              </Button>

                        </NavbarItem>

                        <NavbarItem>
                              <Button color="primary" href="#" variant="flat">
                                    Sign Up
                              </Button>
                        </NavbarItem>
                  </NavbarContent>
            </Navbar>
      )
}