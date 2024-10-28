import React from "react";
import {
  Compass,
  Projector,
  Bookmark,
  ThumbsUp,
  BookmarkPlus,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="flex">
      <aside className="flex flex-col w-56 h-screen sticky top-0 px-4 py-8 overflow-y-auto bg-white dark:bg-zinc-900 dark:border-gray-700">
        <a href="#">
          <div className="flex items-center gap-x-4 justify-start mx-4 font-semibold text-zinc-600 dark:text-zinc-300">
            <h1 className="text-lg ml-2 font-bold dark:text-white">
              Watch<span className="text-red-600">Me</span>
            </h1>
          </div>
        </a>

        <div className="flex flex-col justify-between flex-1 mt-10">
          <nav>
            <div className="mb-10">
              <Link
                to="/"
                className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-100 transform rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <Compass size={20} />
                <span className="mx-4 font-medium text-sm">Home</span>
              </Link>
              <Link
                to="/movie"
                className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-100 transform rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-gray-200 hover:text-gray-700"
                href="#"
              >
                <Projector size={20} />

                <span className="mx-4 font-medium text-sm">Explore</span>
              </Link>
            </div>

            <hr className="my-6 mx-3 border-gray-200 dark:border-gray-600/50" />

            <Link
              to="/favorite"
              className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-100 transform rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <Bookmark size={20} />

              <span className="mx-4 font-medium text-sm">Watchlist</span>
            </Link>

            <Link
              to="/rating"
              className="flex items-center px-4 py-2 mt-2 text-gray-600 transition-colors duration-100 transform rounded-md dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-zinc-800 dark:hover:text-gray-200 hover:text-gray-700"
              href="#"
            >
              <ThumbsUp size={20} />

              <span className="mx-4 font-medium text-sm">Rate List</span>
            </Link>
          </nav>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
