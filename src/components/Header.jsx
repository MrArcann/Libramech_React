import React from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Header() {
  return (
    <header className=" bg-orange-500 shadow-sm">
      <div className=" flex justify-between items-center max-w-6xl mx-auto p-3 h-32">
        <Link to="/">
          <img
            className=" w-80"
            src="src\assets\images\Libra_transparan.png"
            alt=""
          />
        </Link>

        <ul className=" flex gap-7">
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
            <li className=" text-black transition ease-in-out delay-50  hover:-translate-y-1 hover:scale-110  duration-300 font-medium">
              Hizmetler
            </li>
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
