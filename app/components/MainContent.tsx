"use client";

import { useState, useEffect, useRef } from "react";
import { IoIosArrowUp } from "react-icons/io";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import CountdownTimer from "./Countdown";
import { config } from "@/lib/config";

type WeddingScreenProps = {
  name?: string;
};

const WeddingScreen = ({ name }: WeddingScreenProps) => {
  const [fadeClass, setFadeClass] = useState("opacity-0");
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef(null);

  // Untuk fade-in pertama kali
  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeClass("opacity-100");
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  const handleOpen = () => {
    setIsOpen(!isOpen);
    if (!isOpen && audioRef.current) {
      // Play music when "Open" is clicked
      (audioRef.current as HTMLAudioElement).play();
    }
  };

  const { ref: mainRef, inView: isMainInView } = useInView({
    threshold: 0.5,
  });
  const { ref: main2Ref, inView: isMain2InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide1Ref, inView: isSlide1InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide5Ref, inView: isSlide5InView } = useInView({
    threshold: 0.5,
  });
  const { ref: slide6Ref, inView: isSlide6InView } = useInView({
    threshold: 0.5,
  });
  const { ref: endRef, inView: isEndInView } = useInView({
    threshold: 0.5,
  });

  return (
    <div
      className={`h-screen w-screen flex flex-col md:flex-row ${fadeClass} transition-opacity duration-1000`}
    >
      {/* Gambar sisi kiri Wide Untuk Komputer */}
      <div
        className="md:flex justify-center hidden items-end pb-12 w-2/3 h-1/2 md:h-full"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
            url(/gambar_1.jpeg)
          `,
           backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          className={`bottom-10 left-20 font-ovo text-lg text-white tracking-[5px] uppercase`}
        >
          {config.coupleNames}
        </div>
      </div>

      {/* Konten teks sisi kanan bisa scroll untuk pc */}
      <div className=" md:w-1/3 h-full overflow-y-scroll snap-y snap-mandatory scroll-smooth">
        <div
          id="backgroundWedding"
          className=" snap-start  w-full h-screen flex items-center justify-center "
        >
          <div className="text-center p-5 flex flex-col h-full justify-between py-20">
            <div className="gap-y-2 md:gap-y-4 flex flex-col">
              <h5
                className={`text-sm font-legan text-white uppercase tracking-wide fadeMain2 ${
                  isMain2InView ? "active" : ""
                } `}
                ref={main2Ref}
              >
                Ngunduh Mantu
              </h5>
              <h1
                className={`text-2xl md:text-3xl font-ovo t text-white uppercase fadeMain ${
                  isMainInView ? "active" : ""
                } `}
                ref={mainRef}
              >
                {config.coupleNames}
              </h1>
              <h5
                className={`text-sm  font-legan text-white uppercase tracking-wide  fadeMain2 ${
                  isMain2InView ? "active" : ""
                } `}
                ref={main2Ref}
              >
                {new Date(config.eventDate).toLocaleDateString("id-ID", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </h5>
            </div>
            <div>
              <p className="mt-5 text-lg uppercase font-xs tracking-widest text-white">
                {name ? `Dear ${name},` : "Selamat Datang"}
              </p>
              {!isOpen ? (
                <button
                  className="animate-bounce  mt-5 px-5 py-1 uppercase text-xs border border-white hover:text-white hover:bg-transparent rounded-full bg-white text-black transition"
                  onClick={handleOpen}
                >
                  Buka Undangan
                </button>
              ) : (
                <IoIosArrowUp
                  stroke="4"
                  className="mx-auto mt-20 animate-upDown text-white"
                />
              )}
            </div>
          </div>
        </div>
        {isOpen && (
          <>
            <div
              className={`text-white h-screen flex pt-12 p-5 px-12 snap-start `}
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(/gambar_1.jpeg)
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide1Ref}
                className={` ${isSlide1InView ? "active" : ""}  fadeInMove`}
              >
                <h1 className="text-xl md:text-2xl font-ovo tracking-wide text-white uppercase">
                  {config.bibleVerse}
                </h1>
                <p className="text-sm mt-5 font-legan">
                  {config.bibleVerseContent}
                </p>
                <p className="text-6xl mt-5 font-wonder">
                  {config.coupleNames}
                </p>
              </div>
            </div>
            {/* Slide 5 */}
            <div
              className="snap-start  text-white h-screen flex flex-col items-center px-12 "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(/gambar_2.jpeg)
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide5Ref}
                className={` ${
                  isSlide5InView ? "active" : ""
                }  fadeInMove flex items-center flex-col pt-32 `}
              >
                <h3 className="uppercase font-legan text-xs tracking-wide mt-5 mb-2">
                  simpan tanggal kami
                </h3>
                <h1 className="text-2xl w-[200px] text-center text-white font-ovo uppercase">
                  {new Date(config.eventDate).toLocaleDateString("id-ID", {
                    weekday: "long",
                  })}{" "}
                  <br />{" "}
                  {new Date(config.eventDate).toLocaleDateString("id-ID", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </h1>
                {config.holyMatrimony.enabled && (
                  <div className="mt-5 mx-auto flex flex-col items-center">
                    <h3 className="uppercase font-ovo text-sm text-center mt-5 mb-2">
                      Rumah Bu Tirah <br /> {config.holyMatrimony.time}
                    </h3>
                    <p className="text-sm text-center font-legan text-white">
                      {config.holyMatrimony.place_details}
                    </p>
                    <Link
                      href={config.holyMatrimony.googleMapsLink}
                      target="_blank"
                      className="cursor-pointer hover:text-black/20 text-sm rounded-full flex items-center gap-x-2 text-center font-legan mt-5 bg-white w-fit px-4 py-2 text-black"
                    >
                      Google Maps
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div
              className="snap-start  text-white h-screen flex flex-col items-center justify-end pb-16 px-12 "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(/gambar_1.jpeg)
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={slide6Ref}
                className={` ${
                  isSlide6InView ? "active" : ""
                }  fadeInMove flex items-center flex-col`}
              >
                <h1 className="text-2xl text-center text-white  font-ovo">
                  WAKTU PERAYAAN KITA SUDAH DEKAT
                </h1>
                <CountdownTimer />
              </div>
            </div>
            <div
              className="snap-start text-white h-screen flex flex-col justify-end pt-16 pb-16 px-12 "
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
                  url(/gambar_2.jpeg)
                `,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                ref={endRef}
                className={` ${isEndInView ? "active" : ""} fadeInMove `}
              >
                <h1 className="text-3xl text-white  font-ovo text-center uppercase">
                  {config.thankyou}
                </h1>

                <div className="mt-5 mx-auto flex flex-col ">
                  <p className="text-sm font-legan text-white text-center">
                    {config.thankyouDetail}
                  </p>
                  <p className="text-sm rounded-full text-center font-ovo mt-5 px-6 py-2 text-white uppercase">
                    {config.coupleNames}
                  </p>
                </div>
              </div>

              <footer className="flex flex-col items-center mt-8">
                <p className="text-[0.5rem] uppercase text-center">
                  Created By
                  <a
                    href="http://azzamrafizafran.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Azmrfii
                  </a>
                </p>
                <p className="text-xs">© All rights reserved by Azmrfii</p>
              </footer>
            </div>
          </>
        )}
      </div>
      {/* Audio Element */}
      <audio ref={audioRef} src="/music/wedding_song.mp3" preload="auto" />
    </div>
  );
};

export default WeddingScreen;
