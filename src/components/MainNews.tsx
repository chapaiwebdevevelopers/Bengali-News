import Image from "next/image";
import Link from "next/link";
import React from "react";

const MainNews = ({ news }) => {
    //   console.log(news);
      const [ firstnews, ...restNews ] = news;
    //   console.log(firstnews)
      return (
            <div className="grid grid-cols-2 gap-3 box-border">
                  <Link href={`${firstnews.type}/${firstnews.id}`}>
                  <div className="card bg-base-100 shadow-sm ">
                        <figure>
                              <Image
                                    src={firstnews.imageUrl}
                                    width={600}
                                    height={600}
                                    alt={firstnews.imageAlt}
                              ></Image>
                        </figure>
                        <div className="card-body">
                              <h2 className="card-title hover:text-red-600">{firstnews.title}</h2>
                              <p>{firstnews.description}</p>
                              <p>{firstnews.firstPublished}</p>
                        </div>
                  </div>
                  </Link>
                  <div className="list bg-base-100 rounded-box shadow-md">
                    {
                        restNews.slice(0,6).map(item => 
                        <Link href={`${item.type}/${item.id}`}key={item.id} className="list-row hover:bg-gray-50"> 
                        <div>
                        <p className="text-red-700">{item.category}</p>
                        <h3 className="font-semibold text-md">{item.title}</h3>
                        </div>
                        
                        </Link>

  

                        )
                    }
                  </div>
            </div>
      );
};

export default MainNews;
