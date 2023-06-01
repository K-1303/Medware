import React, { useState } from "react";

const Sidebar = () => {
  const [activeTab, setActiveTab] = useState("profile");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const TabItem = ({ tab, icon }) => (
    <li className="mr-2">
      <a
        className={`inline-flex p-4 border-b-2 rounded-t-lg ${
          activeTab === tab
            ? "text-teal-300 border-teal-300 dark:text-teal-300 dark:border-teal-300"
            : "hover:text-gray-300 hover:border-gray-300 dark:hover:text-gray-300"
        }`}
        onClick={() => handleTabClick(tab)}
      >
        <svg
          aria-hidden="true"
          className={`w-7 h-7 ${
            activeTab === tab
              ? "text-teal-300 dark:text-teal-300"
              : "group-hover:text-gray-300 dark:group-hover:text-gray-300"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          {icon}
        </svg>
      </a>
    </li>
  );

  return (
    <div className="border-b border-gray-200 dark:border-gray-700">
      <ul className="flex flex-col -mb-px text-sm font-medium text-center text-gray-300 dark:text-gray-400">
        <TabItem
          tab="profile"
          icon={
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
              clipRule="evenodd"
            ></path>
          }
        />
        <TabItem
          tab="dashboard"
          icon={
            <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
          }
        />
        <TabItem
          tab="settings"
          icon={
            <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
          }
        />
        <TabItem
          tab="contacts"
          icon={
            <g>
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
              <path
                fillRule="evenodd"
                d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                clipRule="evenodd"
              ></path>
            </g>
          }
        />
      </ul>
    </div>
  );
};

export default Sidebar;
