import React from "react";
import { CiSearch } from "react-icons/ci";
import { FiMoreHorizontal } from "react-icons/fi";

const Aside = () => {
  const hashtags = [
    "#yazilim",
    "#herseycokguzelolacak",
    "#prisonbreak",
    "#besiktas",
    "#Isvecegitmekistiyorum?",
    "#isvec",
    "#farkyaratanyazilim",
    "#istanbuldayazilim",
  ];

  const extractHashtags = (text) => {
    const hashtags = text.match(/#[\w]+/g);
    return hashtags ? hashtags.join(" ") : "";
  };

  return (
    <div className="max-xl:hidden border border-zinc-600 rounded">
      <form className="max-w-md mx-auto">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-white sr-only"
        ></label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 text-2xl pointer-events-none">
            <CiSearch className="w-6 h-6 text-zinc-300" />
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-4 ps-14 text-s text-white outline-none rounded-full bg-gray-700 dark:bg-gray-700 placeholder:text-lg"
            placeholder="Ara"
          />
        </div>
      </form>
      <div className="m-10 h-full w-[350px] border border-zinc-600 rounded-md p-4">
        <h2 className="text-lg font-bold mb-4">Trend Hashtagler</h2>
        {hashtags.length > 0 ? (
          hashtags.map((item, index) => (
            <div key={index} className="flex justify-between items-center mb-2">
              <p>{item}</p>
              <FiMoreHorizontal className="text-zinc-600 cursor-pointer transition hover:scale-150" />
            </div>
          ))
        ) : (
          <p>No data available</p>
        )}
      </div>
    </div>
  );
};

export default Aside;
