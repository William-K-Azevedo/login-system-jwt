import React from "react";
import { Link } from "@tanstack/react-location";

const Navbar = () => {
  return (
    <div className="flex flex-row max-w-3xl mx-auto items-center justify-between mt-5">
      <Link to="/"></Link>
    </div>
  );
};

export default Navbar;
