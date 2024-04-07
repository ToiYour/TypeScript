import { useEffect } from "react";
import { Link } from "react-router-dom";
const Filter = () => {
  useEffect(() => {
    const dropdownButton = document.getElementById(
      "dropdown-button"
    ) as HTMLElement;
    const dropdownMenu = document.getElementById(
      "dropdown-menu"
    ) as HTMLElement;
    let isDropdownOpen = false; // Set to true to open the dropdown by default, false to close it by default

    // Function to toggle the dropdown
    function toggleDropdown() {
      isDropdownOpen = !isDropdownOpen;
      if (isDropdownOpen) {
        dropdownMenu.classList.add("hidden");
      } else {
        dropdownMenu.classList.remove("hidden");
      }
    }

    // Initialize the dropdown state
    toggleDropdown();

    // Toggle the dropdown when the button is clicked
    dropdownButton.addEventListener("click", toggleDropdown);

    // Close the dropdown when clicking outside of it
    window.addEventListener("click", (event) => {
      if (
        !dropdownButton.contains(event.target) &&
        !dropdownMenu.contains(event.target)
      ) {
        dropdownMenu.classList.add("hidden");
        isDropdownOpen = false;
      }
    });
  });
  return (
    <div className="bg-gray-100  flex items-center justify-center">
      <div className="relative  inline-block text-left">
        <button
          id="dropdown-button"
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-blue-500"
        >
          Lọc
        </button>
        <div
          id="dropdown-menu"
          className="hidden origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
        >
          <div
            className="py-2 p-2"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="dropdown-button"
          >
            <Link
              to={""}
              className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              3 ngày tiếp theo
            </Link>
            <Link
              to={""}
              className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              1 tuần tiếp theo
            </Link>
            <Link
              to={""}
              className="flex justify-center rounded-md px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 active:bg-blue-100 cursor-pointer"
              role="menuitem"
            >
              1 tháng tiếp theo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
