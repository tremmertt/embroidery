/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import PaymentsIcon from "@mui/icons-material/Payments";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import EuroIcon from "@mui/icons-material/Euro";
import CurrencyYenIcon from "@mui/icons-material/CurrencyYen";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import { ThemeCustomContext } from "settings/theme-context";
import { useContext, useEffect } from "react";

const Footer = () => {
  const { theme } = useContext(ThemeCustomContext);
  const transToComponent = () => {
    const timeout = setTimeout(() => {
      handleTransitionToPurposeComponent(`${window.location.hash.split("#").join("")}-component`);
      clearTimeout(timeout);
    }, 300);
  };

  const handleTransitionToPurposeComponent = (id: string) => {
    if (id === "home-component") window.scrollTo({ left: 0, top: -20, behavior: "smooth" });
    else {
      try {
        const ele = document.getElementById(id);
        if (ele)
          window.scroll({
            left: ele.offsetLeft,
            top: isSP ? ele.offsetTop - 40 : ele.offsetTop - 60,
            behavior: "smooth",
          });
      } catch (err) {
        console.log("err", err);
      }
    }
  };

  const isSP = window.innerWidth < 640 ? true : false;
  if (window.location.hash) transToComponent();

  useEffect(() => {
    if (window.location.hash) transToComponent();
  });

  return (
    <footer
      className=" md:mx-auto shadow-md"
      style={{
        backgroundColor: theme.backgroundMainColor,
        color: theme.colorMain,
      }}
    >
      <div className="container px-5 md:py-10 py-5 mx-auto">
        <div className="flex flex-wrap items-between justify-between md:text-left order-first">
          <div className="lg:w-1/2 md:w-auto w-full px-4">
            <div className="flex py-3">
              <img
                className="md:h-14 md:w-14 w-10 h-10 rounded-xl "
                src="https://media.istockphoto.com/vectors/needle-with-thread-vector-icon-sewing-concept-symbol-or-design-vector-id898233082?k=20&m=898233082&s=612x612&w=0&h=6gffKipltwm055qY0M5wZ_TmZJ_uqK3n7EyOjwh2wEY="
                alt=""
              />
              <h2 className="text-md md:text-lg mt-5 md:mt-7 font-bold px-4"> Embroidery </h2>
            </div>
            <p className="text-sm font-thin">
              {" "}
              We guarantee that you will get best sew out embroidery design that will be created particularly as
              client's demand.
            </p>
          </div>
          <div className="lg:w-1/3 md:w-auto w-full px-4 justify-center">
            <h2 className="font-bold tracking-wide underline underline-offset-3 mt-4 text-xl mb-3">More info</h2>
            <nav className="list-none mb-10">
              <li>
                <Link
                  to="/#home"
                  onClick={() => handleTransitionToPurposeComponent("home-component")}
                  className="text-sm md:text-md"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="#"
                  onClick={() => handleTransitionToPurposeComponent("contact-component")}
                  className="text-sm md:text-md"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/design" className="text-sm md:text-md">
                  Design
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-md">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm md:text-md">
                  Terms & Conditions
                </Link>
              </li>
            </nav>
          </div>
        </div>
        <div className="sm:flex sm:items-center px-4 sm:justify-between">
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Facebook page</span>
            </a>
            <a href="#" className="hover:text-gray-900">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="sr-only">Instagram page</span>
            </a>
          </div>

          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
            <a href="#" className="hover:text-gray-900">
              <PaymentsIcon />
              <span className="sr-only">Payment</span>
            </a>
            <a href="#" className="hover:text-gray-900">
              <AttachMoneyIcon />
              <span className="sr-only">Dollars</span>
            </a>
            <a href="#" className="hover:text-gray-900">
              <EuroIcon />
              <span className="sr-only">Euro</span>
            </a>
            <a href="#" className="hover:text-gray-900">
              <CurrencyYenIcon />
              <span className="sr-only">Yen</span>
            </a>
            <a href="#" className="hover:text-gray-900">
              <CreditCardIcon />
              <span className="sr-only">Credit Card</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
