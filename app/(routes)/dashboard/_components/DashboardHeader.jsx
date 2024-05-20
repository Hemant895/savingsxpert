import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-2 border-b shadow-md flex justify-between ">
      <div className="p-6">
        {/* <div className="flex items-center  space-x-4 bg-white rounded-xl  transform transition duration-500">
          <div className="flex bg-gray-100 p-4 lg:w-[800px] md:w-auto space-x-2 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 opacity-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              className="bg-gray-100 lg:w-[800px] outline-none"
              type="text"
              placeholder="Article name or keyword..."
            />
          </div>

          <div  className=" py-3 px-5 text-primary bg-white border border-primary font-semibold rounded-lg hover:shadow-lg hover:text-white hover:bg-primary  hover:border  transition duration-3000 cursor-pointer">
            <span>Search</span>
          </div>
        </div>
         */}
      </div>
      <div className=" flex items-center justify-between ">
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
