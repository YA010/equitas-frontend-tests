import * as React from 'react';
import styles from './header.module.css'
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
  return (
    <Navbar>
    <NavbarBrand>
     
      <p className="font-bold text-inherit">Ortex</p>
    </NavbarBrand>
    <NavbarContent justify="end">
      <NavbarItem>
        <Button color="primary" variant="shadow">
          Login
        </Button>
      </NavbarItem>
    </NavbarContent>
  </Navbar>
  );
}