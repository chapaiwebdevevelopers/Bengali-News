
import Link from 'next/link';
import React from 'react';

interface INavs{
  id: number,
  scrapable: boolean,
  slug:string,
  title:string,
  topicId:string |null,
  url:string,
}

const loadData = async () => {
  const response = await fetch(
    "https://news-api-v2.vercel.app/api/categories"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch categories");
  }

  const data = await response.json();
  return data.data;
};

const NavLinks = async () => {
  const links:INavs[] = await loadData();
  // console.log("here me",links)

  return (
    <ul className='flex gap-2 py-3 justify-center'>
      <Link href="/">Home</Link>
      {
        links.map((link,index) => 
          <li key={index}>
            { link.scrapable ?<Link href={`/category/${link.slug}`}>{link.title}</Link>  :""
          }
          </li>
          
        )
      }
      
    </ul>
  );
};

export default NavLinks;
