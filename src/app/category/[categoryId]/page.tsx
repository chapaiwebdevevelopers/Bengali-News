import SingleCard from '@/components/SingleCard';
import React from 'react';
import { ArticleItem } from '@/types/news';

interface CategoryItemProps {
    params: Promise<{ categoryId: string }>;
}

const CategoryItem = async ({ params }: CategoryItemProps) => {
    const { categoryId } = await params;
    const response = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await response.json();
    const news: ArticleItem[] = data.data || [];
    // console.log("cate", news);
    return (
        <div className='container mx-auto' >
            <h2 className='text-4xl capitalize my-5 py-2 border-b-2 border-red-600'>{categoryId} </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {
                news.map((item: ArticleItem) =>
    
                    <SingleCard  key={item.id} article={item}></SingleCard>
                )
            }
            </div>

            
        </div>
    );
};

export default CategoryItem;