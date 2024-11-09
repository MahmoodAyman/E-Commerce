import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="w-full mt-auto">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <NavLink to="/" className="flex justify-center lg:justify-start">
              <img
                src="/src/assets/Images/logo.png"
                alt="e-commerce-logo"
                width={100}
                height={55}
              />
            </NavLink>
            <p className="py-8 text-sm text-gray-500 lg:max-w-xs text-center lg:text-left">
              an E-Commerce for practicing my front-end skills
            </p>
            <NavLink
              to="#"
              className="py-2.5 px-5 h-9 block w-fit bg-blue-600 rounded-full shadow-sm text-xs text-white mx-auto transition-all  duration-500 hover:bg-blue-700 lg:mx-0"
            >
              Contact us
            </NavLink>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Navigation
            </h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <NavLink to="/" className="text-gray-600 hover:text-blue-400">
                  Home
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink
                  to="catigories"
                  className=" text-gray-600 hover:text-blue-400"
                >
                  Catigories
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="about-us"
                  className=" text-gray-600 hover:text-blue-400"
                >
                  About Us
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">Support</h4>
            <ul className="text-sm  transition-all duration-500">
              <li className="mb-6">
                <NavLink to="#" className="text-gray-600 hover:text-gray-900">
                  Customer Support
                </NavLink>
              </li>
              <li className="mb-6">
                <NavLink to="#" className=" text-gray-600 hover:text-gray-900">
                  Terms & Conditions
                </NavLink>
              </li>
              <li>
                <NavLink to="#" className=" text-gray-600 hover:text-gray-900">
                  Privacy Policy
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="lg:mx-auto text-left ">
            <h4 className="text-lg text-gray-900 font-medium mb-7">
              Subscribe
            </h4>
            <p className="text-sm text-gray-500 leading-6 mb-7">
              Subscribe to get the latest news from us
            </p>
            <a
              href="javascript:;"
              className="flex items-center justify-center gap-2 border border-blue-400 rounded-full py-3 px-6 w-fit lg:mx-0  text-sm text-blue-400 font-semibold transition-all duration-500 hover:bg-indigo-50"
            >
              Subscribe
              <svg
                width="15"
                height="12"
                viewBox="0 0 15 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25 6L13.25 6M9.5 10.5L13.4697 6.53033C13.7197 6.28033 13.8447 6.15533 13.8447 6C13.8447 5.84467 13.7197 5.71967 13.4697 5.46967L9.5 1.5"
                  stroke="#46b3e5"
                  stroke-width="1.8"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
        <div className="py-3 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col ">
            <span className="text-sm text-gray-500 ">
              ©{" "}
              <a
                href="https://www.linkedin.com/in/mahm0udayman/"
                target="_blank"
                className="hover:underline"
              >
                {" "}
                Mahmoud Ayman
              </a>{" "}
              2024, All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
