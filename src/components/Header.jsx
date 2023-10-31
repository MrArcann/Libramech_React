import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <header className=" shadow-sm">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 h-32">
        <Link to="/">
          <img
            className=" flex w-auto"
            src="src\assets\images\libramech-WBG.png"
            alt=""
          />
        </Link>

        <ul className="flex gap-7">
          <Link to="/">
            <li className=" text-black transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
              Anasayfa
            </li>
          </Link>

          <Link to="/hakkımızda">
            <li className=" text-black transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
              Hakkımızda
            </li>
          </Link>

          <Link to="/projeler">
            <li className=" text-black transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
              Projeler
            </li>
          </Link>

          <Link to="/hizmetler">
            <div className="dropdown dropdown-hover">
              <button tabindex="0" className="cursor-pointer text-black transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
                Hizmetler
              </button>
              <ul
                tabindex="0"
                className="dropdown-content z-[1] menu p-4 shadow bg-base-100 rounded-box w-40"
              >
                <li className="bg-orange-400 rounded-md">
                  <a>Danışmanlık</a>
                </li>
                <li>
                  <a>İmalat</a>
                </li>
                <li>
                  <a>Mekatronik</a>
                </li>
                <li>
                  <a>Proje</a>
                </li>
                <li>
                  <a>Temsilcilik</a>
                </li>
              </ul>
            </div>
          </Link>

          <Link to="/referanslar">
            <li className=" text-black transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
              Referanslar
            </li>
          </Link>

          <Link to="/iletişim ">
            <li className=" text-black transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
              İletişim
            </li>
          </Link>
        </ul>
      </div>
    </header>
  );
}
