import { useState } from "react";
import { FaCaretDown } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import logo from "/assets/logo.png";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [activeMenu, setActiveMenu] = useState<boolean | null>(false);

  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About",
      items: [
        {
          name: "About Us",
          link: "#about",
        },
        {
          name: "Our Team",
          link: "#team",
        },
        {
          name: "History",
          link: "/history",
        },
      ],
    },
    {
      name: "Services",
      items: [
        {
          name: "Services & Treatments",
          link: "/team",
        },
        {
          name: "Media & FAQs",
          link: "/media",
        },
        {
          name: "Book an Appointment",
          link: "/appointment",
        },
        {
          name: "Training",
          link: "/appointment",
        },
        {
          name: "Make a Purchase",
          link: "/purchase",
        },
      ],
    },
    {
      name: "Contact",
      items: [
        {
          name: "Contact Us",
          link: "/contact",
        },
      ],
    },
  ];

  return (
    <nav className="flex w-screen z-10 fixed items-center px-6 bg-[#C8D1D9] justify-between py-4">
      <div className="logo-container">
        <img src={logo} alt="Logo" width={300} height={80} />
      </div>
      <div className="container w-full relative flex justify-end items-center">
        <ul className={`flex md:static bg-[#C8D1D9] ${activeMenu ? 'flex' : 'hidden md:flex'} flex-col md:flex-row md:w-fit w-screen pl-10 py-4 text-start absolute top-10 items-center`}>
          {links.map((link, index) => {
            return (
              <li
                key={index}
                className="relative w-full"
                onMouseLeave={() => setActiveIndex(null)}
              >
                <a
                  href={link?.link}
                  onMouseEnter={() => setActiveIndex(index)}
                  onClick={() =>
                    setActiveIndex(activeIndex === index ? null : index)
                  }
                  className={`p-2 cursor-pointer flex items-center gap-2 font-noto ${
                    activeIndex === index ? "text-black" : "text-white"
                  }`}
                >
                  {link.name}
                  {link.items && <FaCaretDown />}
                </a>
                {link.items && activeIndex === index && (
                  <ul
                    className={`bg-[#494E53] py-2 absolute ${
                      index !== links.length - 1 ? "min-w-[160px]" : ""
                    } text-white rounded-md z-100 shadow-lg`}
                  >
                    {link.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="px-[15px] cursor-pointer py-[10px] hover:bg-[#5A5F64]"
                      >
                        <a href={item.link} className="text-nowrap">
                          {" "}
                          {item.name}{" "}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
        <div className="ham-container md:hidden">
          <div onClick={() => setActiveMenu(!activeMenu)} className="menu text-4xl text-white focus:outline">
            <IoIosMenu />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
