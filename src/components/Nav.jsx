import React, { useContext,   } from 'react';
import { ProductContext } from './utils/Context';
import { Link,  } from 'react-router-dom';
 

function Nav() {
  // ProductContext se products ko access karna
  const [products] = useContext(ProductContext);
  
   
  // Products me se unique categories ko extract karna
  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category], []);
  distinct_category = [...new Set(distinct_category)];

  return (
    <>
      <nav className='h-full w-[15%] bg-zinc-200 flex flex-col items-center'>
        <a className='py-3 px-5 my-3 border rounded border-blue-300' href="/create">Add New Products</a>
        <hr className='w-[80%] border-black my-3'/>
        <h1 className='w-[80%] text-2xl mb-3'>Category</h1>
        <div className='w-[80%]'>
          {distinct_category.map((c, i) => (
            <Link key={i} to={`/?category=${c}`} className='bg-red-100 mb-3 flex items-center'>
              <span className='h-[15px] w-[15px] mr-2 bg-blue-300 rounded-full'></span>{c}
            </Link>
          ))}
        </div>
      </nav>
    </>
  );
}

export default Nav;


// // vv



// import React from 'react'

// const Nav = () => {
//   return (
//     <>
//         <nav className='h-full w-[15%] bg-zinc-200 flex flex-col items-center'>
//         <a className='py-3 px-5 my-3 border rounded border-blue-300' href="/create">Add New Products</a>
//         <hr className='w-[80%] border-black my-3'/>
//         <h1 className='w-[80%] text-2xl mb-3'>Category</h1>
//        <ul className='  w-[80%]'>
//         <li className='mb-3  flex items-center '> <span className='  rounded-full mr-2 w-[15px] h-[15px] bg-blue-300'></span> cat</li>
//        </ul>
//       </nav>
      
//     </>
//   )
// }

// export default Nav
