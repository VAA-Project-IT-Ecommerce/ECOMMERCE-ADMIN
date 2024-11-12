"use client";

import { UserButton } from "@clerk/nextjs";
import { MainNav } from "@/components/main-nav";
import StoreSwitcher from "@/components/store-switcher";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { ModeToggle } from "./theme";

const NavbarClient = ({ store }: { store: any[] }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="border-b bg-white dark:bg-gray-800">
      <div className="flex h-16 items-center px-4 justify-between">
        {/* StoreSwitcher */}
        <StoreSwitcher items={store} />

        {/* Hamburger Menu for Mobile */}
        <button
          className="md:hidden p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <FiMenu size={24} />
        </button>

        {/* User Button - Visible on larger screens */}
        <div className="hidden md:flex items-center space-x-4">
          <UserButton />
          <ModeToggle />
        </div>
      </div>

      {/* MainNav as Sidebar for Mobile */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-10 flex">
          {/* Sidebar Menu */}
          <div className="bg-white dark:bg-gray-800 w-3/4 sm:w-1/2 h-full p-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-semibold text-black dark:text-white">
                Menu
              </span>
              <button
                className="p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Close
              </button>
            </div>
            <MainNav className="flex flex-col space-y-4" />
          </div>

          {/* Close area outside the sidebar */}
          <div className="flex-1" onClick={() => setMenuOpen(false)} />
        </div>
      )}

      {/* MainNav visible on larger screens */}
      <div className="hidden md:block">
        <MainNav className="p-6" />
      </div>
    </div>
  );
};

export default NavbarClient;
