import Link from "next/link";
import React from "react";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";

interface Headlines{
    id:string;
    title:string;
}

const marqueeData = async () => {
      const res = await fetch(
            "https://news-api-v2.vercel.app/api/news?limit=10",
      );
      const data = await res.json();
      return data.data;
};
const Marquee = async () => {
      const data:Headlines[] = await marqueeData();
    //   console.log(data)

      return (
            <div className=" bg-red-500 ">
               <div className=" container mx-auto flex items-center text-white">
                 <div className="bg-red-700 p-1">সর্বশেষ</div>
                  <MarqueeText direction="right" duration={15} className="bg-red-500 ">
                        {data.map(item => (
                             <Link key={item.id} href={`/article/${item.id}`}>

                             <span>
                                    <span className=""> {item.title}</span>
                                    <span className="mx-5"> • </span>
                              </span>
                              </Link>
                        ))}
                  </MarqueeText>
               </div>
            </div>
      );
};

export default Marquee;
