import { useState } from "react";
import { Dialog, DialogPanel, PopoverGroup } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";
export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <div className="max-w-7xl flex justify-end mx-auto px-6 gap-2 lg:px-10">
        <div className="cart relative">
          <span className="text-white bg-blue-400 h-6 w-6 rounded-full text-center border-blue-400 absolute top-[-15px] right-[-12px] font-semibold">
            1
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </div>
        <span className="font-semibold">Cart</span>
      </div>

      <nav
        aria-label="Global"
        className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <NavLink to="/" className="-m-1.5 p-1.5 w-24">
            <span className="sr-only">E-Commerce</span>
            <img
              alt="ecommerce logo"
              src="/src/assets/Images/logo.png"
              width="116px"
              height="55px"
              className="w-full"
            />
          </NavLink>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <NavLink
            to="/"
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-400 hover:underline transition-all duration-300"
          >
            Home
          </NavLink>
          <NavLink
            to="categories"
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-400 hover:underline transition-all duration-300"
          >
            Catigories
          </NavLink>
          <NavLink
            to="about-us"
            className="text-sm/6 font-semibold text-gray-900 cursor-pointer hover:text-blue-400 hover:underline transition-all duration-300"
          >
            About Us
          </NavLink>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-7">
          <NavLink
            to="login"
            className="text-sm/6 font-semibold text-gray-900 flex items-center justify-between gap-2 ring-1 ring-offset-blue-400 p-2 rounded-2xl hover:bg-blue-400 transition-colors duration-300 hover:text-white"
          >
            Log in{" "}
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </span>
          </NavLink>
          <NavLink
            to="sign-up"
            className="text-sm/6 font-semibold text-gray-900 flex items-center justify-between gap-2 ring-1 ring-offset-blue-400 p-2 rounded-2xl hover:bg-blue-400 transition-colors duration-300 hover:text-white"
          >
            Register{" "}
            <span aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
                />
              </svg>
            </span>
          </NavLink>
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <NavLink to="/" className="-m-1.5 p-1.5 w-24">
              <span className="sr-only">E-Commerce</span>
              <img
                alt="ecommerce logo"
                src="/src/assets/Images/logo.png"
                className="w-full"
              />
            </NavLink>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <NavLink
                  to="/"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 "
                >
                  Home
                </NavLink>
                <NavLink
                  to="/categories"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                >
                  Catigories
                </NavLink>
                <NavLink
                  to="about-us"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50 "
                >
                  About Us
                </NavLink>
              </div>
              <div className="py-6 flex flex-col gap-5">
                <NavLink
                  to="login"
                  className="-mx-3 px-3 py-2.5 flex items-center justify-between gap-2 ring-1 ring-offset-blue-400 p-2 rounded-2xl hover:bg-blue-400 transition-colors duration-300 hover:text-white cursor-pointer"
                >
                  Log in
                </NavLink>
                <NavLink
                  to="sign-up"
                  className="-mx-3 block  px-3 py-2.5  items-center justify-between gap-2 ring-1 ring-offset-blue-400 p-2 rounded-2xl hover:bg-blue-400 transition-colors duration-300 hover:text-white cursor-pointer"
                >
                  Register
                </NavLink>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
