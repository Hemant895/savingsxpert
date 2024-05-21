import { UserButton } from "@clerk/nextjs";
import React from "react";

function DashboardHeader() {
  return (
    <div className="p-2 border-b shadow-md flex justify-between ">
      <div className='p-5'>
       
        
      </div>
      <div className=" flex items-center justify-between ">
        <UserButton />
      </div>
    </div>
  );
}

export default DashboardHeader;
