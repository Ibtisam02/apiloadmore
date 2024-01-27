import React, { useEffect, useState } from 'react'

function Api() {
    let [data,setData]=useState([]);
    let [load,setLoad]=useState(true);
    let [count,setCount]=useState(0);
   async function getData(lim,count) {
        try {
            setLoad(true)
            let url =`https://dummyjson.com/products?limit=${lim}&skip=${count===0? 0:count*20}`;
            let res =await fetch(url);
            let jdata=await res.json();
            if (jdata&&jdata.products&&jdata.products.length) {
                setData(jdata.products);
                setLoad(false)
                
            }
            
        } catch (error) {
            load(false)
            console.log("error occoured "+error)
        }
    }

    useEffect(()=>{
        getData(20,count);
    },[count])
    if (load) {
        return <div>loading plz wait</div>
    }

    let setL=()=>{
       
        if (count>=4) {
            setCount(0)
        }
        else{
            setCount((li)=>li+1);

        }
        
    }
  return (
    <>
    {
   data&&data.length?data.map((ele)=>(
    <div className='border my-20 w-1/5 h-1/2 flex flex-col justify-center items-center' key={ele.id}>
            <img className='h-52' src={ele.images[3]} alt="" />
        <div className='flex w-full justify-around'>
            <h2>{ele.price}</h2>
            <h2>{ele.rating}</h2>
            <h2>{ele.stock}</h2>
        </div>
        <h3 className='text-xl'>{ele.title}</h3>
    </div>
   )):<div>No Data</div>
   }

   <button onClick={setL} className='px-5 py-3 bg-yellow-600'>{count==4?"Reached Limit":"LoadMore"}</button>
   </>

  )
}

export default Api
