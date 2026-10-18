
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./NavLinks";
import Marquee from "./Marquee";



const Header = () => {
      const date = new Date().toLocaleDateString("bn-BD", {
            dateStyle: "full",
      });


      return (
            <div className="container mx-auto">
                  <div className="flex my-2 justify-center">
                        <div className="flex items-center justify-center  gap-3">
                              <Image alt="Logo"
                                    height={60}
                                    width={60}
                                    src={"/logo.webp"}
                              ></Image>
                              <div>
                                    <h2 className="text-red-700 text-3xl font-bold">Bangla News 24</h2>
                                    <p><small>{date}</small></p>
                              </div>
                        </div>

                        <div className="bg-white p-6 absolute right-4 space-x-2 ">
                              <button className=" ">সাইন ইন</button>
                              <button className="btn btn-error bg-red-700 text-white  ">
                                    সাইন আপ
                              </button>
                        </div>
                  </div>
                  <div className="mx-auto text-center">
                            <NavLinks></NavLinks>
                  </div>
            </div>
      );
};

export default Header;
