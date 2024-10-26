import { Link } from "lucide-react";
import React from "react";

const FavListView = () => {
  return (
    <div>
      <section>
        <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div class="mx-auto max-w-screen-sm text-center">
            <h1 class="mb-4 text-7xl font-extrabold lg:text-9xl text-red-600 dark:text-red-500">
              Sorry
            </h1>
            <p class="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">
              Page is under construction
            </p>
            <p class="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
              sorry, this page is still empty :(
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FavListView;
