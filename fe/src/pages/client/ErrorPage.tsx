/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeCustomContext } from "../../settings/theme-context";

export default function ErrorPage() {
  const { theme } = useContext(ThemeCustomContext);

  return (
    <div>
      <main
      style={{ color: theme.color, backgroundColor: theme.backgroundColorMint }}
      
      className="h-screen w-full flex flex-col justify-center items-center">
        <h1 className="text-9xl font-extrabold text-[#5a0606] tracking-widest">404</h1>
        <div className="border-3 px-2 text-sm rounded rotate-12 absolute "
        style={{ color: theme.color, borderColor: theme.borderColor, backgroundColor: theme.backgroundColor }}>
          Page Not Found
        </div>
        <button className="mt-5">
          <a className="relative inline-block text-sm font-medium text-[#5a0606] group active:text-red-600 focus:outline-none focus:ring">
            <span className="absolute inset-0 transition-transform translate-x-0.5 translate-y-0.5 bg-[#5a0606] group-hover:translate-y-0 group-hover:translate-x-0" />
            <span className="relative block px-8 py-3 bg-[#ffffff] border border-current">
              <Link to="/">Go Home</Link>
            </span>
          </a>
        </button>
      </main>

    </div>
  );
}

