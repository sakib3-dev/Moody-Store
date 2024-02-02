"use client";
// data
import { nabIcon, nabList } from "@/app/constant/data";

// icon
import { FaBars, FaTimes } from "react-icons/fa";

// component
import Container from "../Container";
import Flex from "../Flex";
import Link from "next/link";

// state
import { useState } from "react";

export default function NavBar() {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };

  return (
    <header>
      <main className="py-8 px-4">
        <Container>
          {/* header top */}
          <div className="md:border-b border-brandOne pb-6">
            <Flex className="justify-between items-center">
              {/* logo */}
              <div className="md:w-2/12">
                <span className="font-bold text-brandOne md:text-[28px] text-[10px]">
                  <Link href="/">MOODY STORE</Link>
                </span>
              </div>
              {/* logo */}

              {/* icon */}
              <div className="md:w-9/12">
                <Flex className="justify-end md:gap-10 gap-5 items-center">
                  {nabIcon.map((item, i) => (
                    <div>
                      <Link
                        href={item.path}
                        key={i}
                        className="md:text-[20px] text-[15px] text-brandOne hover:text-brandTwo duration-500"
                      >
                        {item.icon}
                      </Link>
                    </div>
                  ))}

                  <div className="md:hidden flex items-center">
                    {menu ? (
                      <FaTimes
                        size={25}
                        onClick={handleChange}
                        className=" hover:text-brandTwo text-brandOne"
                      />
                    ) : (
                      <FaBars
                        size={25}
                        onClick={handleChange}
                        className=" hover:text-brandTwo text-brandOne"
                      />
                    )}
                  </div>
                </Flex>
              </div>
              {/* icon */}
            </Flex>
          </div>
          {/* header top */}
          {/* header bottom */}
          <div className="border-b-[2px] border-brandOne hidden md:block">
            <nav>
              <ul>
                <Flex className="items-center gap-9 justify-center py-9">
                  {nabList.map((list, i) => (
                    <Link
                      href={list.path}
                      key={i}
                      className="text-base text-brandOne font-bold hover:text-brandTwo duration-500"
                    >
                      {list.name}
                    </Link>
                  ))}
                </Flex>
              </ul>
            </nav>
          </div>
          {/* header bottom */}
        </Container>
        {/* mobile menu */}
        <div
          className={`${
            menu ? "translate-x-0" : "-translate-x-full"
          } md:hidden absolute bg-brandOne/20 left-0 top-16 pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-500 backdrop:blur-2xl`}
        >
          <nav>
            <ul>
              <Flex className="flex-col items-center gap-9 justify-center py-9">
                {nabList.map((list, i) => (
                  <Link
                    href={list.path}
                    key={i}
                    className="text-base text-white font-bold hover:text-brandTwo duration-500"
                  >
                    {list.name}
                  </Link>
                ))}
              </Flex>
            </ul>
          </nav>
        </div>
        {/* mobile menu */}
      </main>
    </header>
  );
}
