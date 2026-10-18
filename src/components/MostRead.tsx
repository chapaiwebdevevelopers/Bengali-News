import Link from 'next/link';
import React from 'react';

const MostRead = async() => {
    const res = await fetch('https://news-api-v2.vercel.app/api/news/most-read');
    const data = await res.json();
    const allNews = data.data;
    console.log(allNews)
    return (
        <div>
            <div className="card bg-base-100 m-3 p-3 shadow-sm space-y-2">
                {
                    allNews.map((item, i )=>
                        <>

                        <Link className='flex gap-4 ' key={item.id} href={`/article/${item.id}`}>
                            <p className='text-xl font-semibold text-red-600'>{i+1}</p>
                            <h2 className='hover:text-red-600'>{item.title}</h2>
                        </Link>
                        </>

                    )
                }

</div>
        </div>
    );
};

export default MostRead;