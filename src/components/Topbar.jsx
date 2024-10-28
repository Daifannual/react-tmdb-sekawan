import React from "react";
import Switcher from "./ui/Switcher";

const Topbar = () => {
  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 top-0 sticky p-6 items-center z-50 dark:bg-zinc-900 dark:border-gray-700 bg-zinc-100">
      <div className="lg:col-span-2 flex gap-6">
      </div>

      <div className="justify-self-end">
        <Switcher></Switcher>
      </div>
    </div>
  );
};

export default Topbar;
