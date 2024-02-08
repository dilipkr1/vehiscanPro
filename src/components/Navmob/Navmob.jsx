import React from "react";

export default function () {
  return (
    <div>
      <div
        class=" bg-gray-800 text-black w-56 min-h-screen overflow-y-auto transition-transform transform -translate-x-full ease-in-out duration-300"
        id="sidebar"
      >
        <div class="p-4">
          <h1 class="text-2xl font-semibold">Sidebar</h1>
          <ul class="mt-4">
            <li class="mb-2">
              <a href="#" class="block hover:text-indigo-400">
                Home
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="block hover:text-indigo-400">
                About
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="block hover:text-indigo-400">
                Services
              </a>
            </li>
            <li class="mb-2">
              <a href="#" class="block hover:text-indigo-400">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
