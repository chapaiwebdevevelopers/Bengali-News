import Link from 'next/link';
import Image from "next/image";
import React from 'react';

const SingleCard = ({article}) => {
//     console.log("singlecard",article)
    return (
         // single Card design below
                        <div  >
                             
                                    <Link 
                                          href={`/${article.type}/${article.id}`}
                                    >
                                          {/* single card */}

                                          <div  className="card bg-base-100 shadow-sm">
                                                <figure>
                                                      <Image alt={article.imageAlt} width={600} height={600}
                                                            src={
                                                                  article.imageUrl
                                                            }
                                                      ></Image>
                                                </figure>
                                                <div className="card-body">
                                                      <p className="text-red-700">{article.category}</p>
                                                      <h2 className="card-title hover:text-red-700">
                                                            {article.title}
                                                      </h2>
                                                      <p>
                                                           {article.description}
                                                      </p>
                                                      
                                                </div>
                                          </div>
                                    </Link>
                              
                        </div>
    );
};

export default SingleCard;