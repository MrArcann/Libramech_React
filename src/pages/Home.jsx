import React from "react";

export default function Home() {
  return (
    <div>
      <div className="carousel w-auto h-96 ">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src="src\assets\images\Anasayfa\001.jpg" className="w-full   " />
          <div className=" absolute flex max-w-2xl ml-44 mt-24 ">
            <h1 className="text-5xl font-bold text-white">
              Eğer doğru seçimi yapamazsak, onlar da hata yapar.
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full ">
          <img src="src\assets\images\Anasayfa\002.JPG" className="w-full" />
          <div className=" absolute flex max-w-2xl ml-44 mt-24 ">
            <h1 className="text-5xl font-bold text-white">
              Eğer doğru seçimi yapamazsak, onlar da hata yapar.
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src="src\assets\images\Anasayfa\003.jpg" className="w-full" />
          <div className=" absolute flex max-w-2xl ml-44 mt-24 ">
            <h1 className="text-5xl font-bold text-white">
              Eğer doğru seçimi yapamazsak, onlar da hata yapar.
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide4" className="carousel-item relative w-full">
          <img src="src\assets\images\Anasayfa\006.jpg" className="w-full" />
          <div className=" absolute flex max-w-2xl ml-44 mt-24 ">
            <h1 className="text-5xl font-bold text-white">
              Eğer doğru seçimi yapamazsak, onlar da hata yapar.
            </h1>
          </div>
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>

      
    </div>
  );
}
