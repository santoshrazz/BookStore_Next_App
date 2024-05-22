import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="bg-zinc-800 p-6">
      <nav className="flex justify-between text-white items-center flex-wrap gap-5">
        <h2 className="text-xl font-extrabold cursor-pointer">Booky Geek</h2>
        <ul className="flex gap-5 list-none flex-wrap ">
          <li>
            <Link
              href="/"
              className="text-xl font-semibold hover:text-blue-600"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/Product"
              className="text-xl font-semibold hover:text-blue-600"
            >
              Product
            </Link>
          </li>
          <li>
            <Link
              href="/Contact"
              className="text-xl font-semibold hover:text-blue-600"
            >
              Contact
            </Link>
          </li>
        </ul>
        <button className=" outline hover:bg-white hover:text-black delay-75 ease-in font-serif outline-white py-2 px-6 rounded-md text-white">
          Be a Seller
        </button>
      </nav>
    </div>
  );
};

export default Navbar;
