import Image from "next/image";
import Link from "next/link";
import React from "react";
import SingleCard from "./SingleCard";

const NewsCard = ({ news }) => {
      // console.log("prop",news)
      const { articles } = news;
      // console.log(articles)
      return (
            <>
                  {articles.map((article) => 
                       <SingleCard key={article.id} article={article}></SingleCard>
                  )}
            </>
      );
};

export default NewsCard;
