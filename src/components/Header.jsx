import React from "react";
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {
  return (
    <header>
      <h1>
        <span className=" text-slate-500">Libramech</span>
        <span className=" text-slate-800">Mekatronik</span>
      </h1>

      <ul className=" flex gap-4">
        <Link to="/">
          <li>Anasayfa</li>
        </Link>

        <Link to="/hakkımızda">
          <li>Hakkımızda</li>
        </Link>

        <Link to="/projeler">
          <li>Projeler</li>
        </Link>

        <Link to="/referanslar">
          <li>Referanslar</li>
        </Link>

        <Link to="/iletişim ">
          <li>İletişim</li>
        </Link>
      </ul>
    </header>
    
    
    
  );
}
