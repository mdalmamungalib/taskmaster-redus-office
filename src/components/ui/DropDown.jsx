import React from "react";
import { Menu } from "@headlessui/react";
import {
  ChevronDownIcon,
  UserIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "firebase/auth";
import { auth } from "../../Firebase/firebase.config";
import { useDispatch } from "react-redux";
import { logout } from "../../Redux/features/users/userSlice";

const DropDown = () => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    signOut(auth);
    dispatch(logout());
  };
  return (
    <div className="relative z-10 inline-block text-left">
      <Menu>
        <Menu.Button className="" aria-label="Profile menu">
          <div className="w-10 h-10 overflow-hidden bg-gray-600 rounded-full">
            <img
              src="https://images.unsplash.com/photo-1528892952291-009c663ce843?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=644&q=80"
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          </div>
          <ChevronDownIcon className="w-5 h-5 text-white/70" />
        </Menu.Button>

        <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-gray-100 divide-y divide-gray-200 rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`group flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm ${
                    active
                      ? "bg-gray-200 text-gray-700"
                      : "text-gray-700"
                  }`}
                >
                  <UserIcon className="w-5 h-5" />
                  Profile
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`group flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm ${
                    active
                      ? "bg-gray-200 text-gray-700"
                      : "text-gray-700"
                  }`}
                >
                  <Cog6ToothIcon className="w-5 h-5" />
                  Settings
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleLogout}
                  className={`group flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm ${
                    active
                      ? "bg-gray-200 text-gray-700"
                      : "text-gray-700"
                  }`}
                >
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  Logout
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Menu>
    </div>
  );
};

export default DropDown;
