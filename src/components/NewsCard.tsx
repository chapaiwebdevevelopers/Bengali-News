import React from "react";
import SingleCard from "./SingleCard";
import { ArticleItem } from "@/types/news";

interface NewsCardProps {
      news: {
            articles?: ArticleItem[];
            [key: string]: unknown;
      };
}

const NewsCard = ({ news }: NewsCardProps) => {
      // console.log("prop",news)
      const articles = news?.articles || [];
      // console.log(articles)
      return (
            <>
                  {articles.map((article: ArticleItem) => 
                       <SingleCard key={article.id} article={article}></SingleCard>
                  )}
            </>
      );
};

export default NewsCard;
