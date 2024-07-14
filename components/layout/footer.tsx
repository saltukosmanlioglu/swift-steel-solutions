import React from "react";
import Link from "next/link";
import { CiLocationArrow1 } from "react-icons/ci";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaPhone, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram, IoMdMail } from "react-icons/io";

const Footer: React.FunctionComponent = () => {
  const menuItems = [
    { href: "/home", text: "Home" },
    { href: "/home", text: "Swift" },
    { href: "/home", text: "Design" },
    { href: "/home", text: "Laser Cutting" },
    { href: "/home", text: "Metal Folding" },
    { href: "/home", text: "Laser Welding" },
    { href: "/contact", text: "Contact Us" },
  ];

  return (
    <div className="pt-32 px-40 pb-8">
      <div className="flex justify-between [&>div]:w-full">
        <div>
          <h1 className="text-5xl font-semibold">Swift.</h1>
          <p className="my-8 text-fff06">Follow on Social media:</p>
          <div className="flex items-center gap-x-4">
            <Link href="">
              <FaFacebook color="#fff" size={20} />
            </Link>
            <Link href="">
              <IoLogoInstagram color="#fff" size={20} />
            </Link>
            <Link href="">
              <FaLinkedin color="#fff" size={20} />
            </Link>
            <Link href="">
              <FaXTwitter color="#fff" size={20} />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              className="text-xl [&:not(:hover)]:duration-500 hover:ml-4 hover:transition-all hover:duration-500 hover:text-orange"
              href={item.href}
            >
              {item.text}
            </Link>
          ))}
        </div>
        <div>
          <div className="flex flex-wrap gap-y-6 [&>a]:w-full">
            <Link className="flex" href="" target="_blank">
              <FaPhone color="#fff" size={24} />
              <p className="ml-3">0430 206 263</p>
            </Link>
            <Link className="flex" href="" target="_blank">
              <IoMdMail color="#fff" size={24} />
              <p className="ml-3">sales@swiftsteelsolutions.com.au</p>
            </Link>
            <Link className="flex" href="" target="_blank">
              <CiLocationArrow1 color="#fff" size={24} />
              <p className="ml-3">4/68-72 Perrin Drive Underwood QLD 4119</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between border-t-0.5 border-fff01 mt-24 py-4">
        <p className="font-thin">
          &copy; 2024 Swift Steel Solutions. All rights reserved.
        </p>
        <div>
          <p>
            Made with passion by{" "}
            <Link
              className="underline text-orange"
              href="https://www.milabilisim.com.tr/home"
            >
              Mila
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
