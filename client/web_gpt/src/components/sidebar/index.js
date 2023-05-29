import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { MdOutlineDashboard } from "react-icons/md";
import { ImParagraphLeft } from "react-icons/im";
import { SiJavascript } from "react-icons/si";
import { BsImages, BsRobot, BsReverseListColumnsReverse } from "react-icons/bs";
import { BiMenuAltRight, BiMenu } from "react-icons/bi";
import Head from "next/head";
const Menus = [
  {
    title: "Summary",
    src: "/",
    color: "#E08F62",
    icon: <ImParagraphLeft />,
    desc: "Aku tau semua yang ada di internet",
  },
  {
    title: "Paragraph",
    src: "/Paragraph",
    color: "#EB6383",
    icon: <BsReverseListColumnsReverse />,
    desc: "Aku bisa menjelaskan semuanya yang ada di internet",
  },
  {
    title: "Chat Bot",
    src: "/Chat_Bot",
    color: "#00A67E",
    icon: <BsRobot />,
    desc: "Aku bisa menjadi teman ngobrol kamu",
  },
  {
    title: "JavaScript Code ",
    src: "/JavaScript_Code",
    color: "#EEBB4D",
    icon: <SiJavascript />,
    desc: "Aku bisa menyelesaikan kode yang kamu minta",
  },
  {
    title: "Image_Generator ",
    src: "/Image_Generator",
    color: "#6886C5",
    icon: <BsImages />,
    desc: "Aku Bisa gambar apa saja yang kamu mau",
  },
];

const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState(0);
  const router = useRouter();

  useEffect(() => {
    setActiveMenu(getActiveMenuIndex());
  }, []);

  const toggleSidebar = () => {
    setOpen(!open);
  };

  const getActiveMenuIndex = () => {
    const path = router.pathname;
    const activeIndex = Menus.findIndex((menu) => menu.src === path);
    return activeIndex !== -1 ? activeIndex : 0;
  };

  return (
    <>
      <Head>
        <title>Ultra GPT</title>
        <meta property="og:title" content="My page title" key="title" />
      </Head>
      <Head>
        <meta property="og:title" content="My new title" key="title" />
      </Head>
      <div className="fixed z-[1000] h-screen flex items-end justify-end">
        <div
          className={`${
            open ? "w-56 px-2 " : "w-0 "
          } lg:w-72 bg-black h-screen relative duration-500`}
        >
          <div className="mt-3 ml-3 flex  relative">
            <h1
              className={`text-white mt-2 font-medium text-2xl text-center ${
                !open && "invisible"
              }`}
            >
              UltraGPT
            </h1>

            <button
              className={`lg:hidden z-90 absolute ${
                !open ? "-right-10" : "-right-14 bg-black"
              }  w-10 h-10 rounded-lg flex justify-center items-center text-white text-4xl `}
              onClick={toggleSidebar}
            >
              <span className="text-white">
                {!open ? <BiMenu /> : <BiMenuAltRight />}
              </span>
            </button>
          </div>

          <ul className="pt-2">
            {Menus.map((Menu, index) => (
              <Link
                href={Menu.src}
                key={index}
                className={`flex rounded-md p-2 cursor-pointer text-white text-sm items-center gap-x-4 mt-2 ${
                  !open && "invisible"
                } ${activeMenu === index ? "bg-slate-700" : ""}`}
                style={{
                  transition: "background-color 0.5s ease",
                }}
              >
                <span
                  className={`p-2 text-2xl rounded-md `}
                  style={{ backgroundColor: Menu.color }}
                >
                  {Menu.icon ? Menu.icon : <MdOutlineDashboard />}
                </span>
                <div className="text-main-gray">
                  <h2 className={`flex-1 font-bold`}>{Menu.title}</h2>
                  <p className="text-xs">{Menu.desc}</p>
                </div>
              </Link>
            ))}
          </ul>

          <div className={`mt-[50%] md:mt-[39%] lg:mt-[45%] flex flex-col gap-1 items-center text-white ${!open && "invisible"}`}>
            <p className="text-sm">Biar AInya makin GGWP</p>
            <a
              href="https://saweria.co/bintangmochamad"
              className={`flex justify-center mx-2  py-2 px-8 lg:px-14 gap-2 rounded-md  text-xl text-center cursor-pointer bg-yellow-500 hover:bg-yellow-600
                `}
              style={{
                transition: "background-color 0.3s ease",
              }}
              target="_blank"
            >
              <img
                src="https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F01c81f8c-18c9-47d7-b7ad-c04058016626_225x225.png"
                className="w-10"
              />
              <p className="text-xl pt-1 font-semibold">Saweria.co</p>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
