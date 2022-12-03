/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeCustomContext } from "../../settings/theme-context";
import "./ErrorPage.css";
export default function ErrorPage() {
  const { theme } = useContext(ThemeCustomContext);

  return (
    <div>
      <section className="page_404">
        <div className="container-fluid">
          <div className="text-center">
            <div className="four_zero_four_bg">
              <h1 className="text-center font-bold" style={{ color: theme.backgroundMainColor }}>
                404
              </h1>
            </div>

            <div className="contant_box_404">
              <h3 className="h2">Look like you're lost</h3>
              <p>the page you are looking for not avaible!</p>
              <Link
                style={{
                  backgroundColor: theme.backgroundMainColor,
                }}
                to="/"
                className="mt-4 inline-block py-3 px-7 bg-red-700 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-red-700 hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
              >
                Go to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
