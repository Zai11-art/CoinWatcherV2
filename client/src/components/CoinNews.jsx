import React from 'react'
import { Carousel } from 'flowbite-react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';



const CoinNews = (props) => {

    const { id } = useParams();
    // get latest date 
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const formattedDateMinus = `${year}-${month}-${day-7}`;

    const [news, setNews] = useState([]);

    useEffect( () => {
        fetch(`https://newsapi.org/v2/everything?q=${id}%20crypto&from=${formattedDateMinus}&to=${formattedDate}&sortBy=popularity&apiKey=b5daf3d3eadc418380996387610a8218`)
        .then(response => response.json())
        .then(data => setNews([...data.articles]))
        .catch(error => console.log(error));
        
    },[])

  return (
    <div className="
        xl:w-[100%] xl:h-[500px]
        lg:w-[100%] lg:h-[500px]
        md:w-[100%] md:h-[500px]
        w-[100%] h-[500px] mb-6
        xl:mt-[100px] lg:mt-[10px] md:mt-[1500px] mt-[1300px]
        mb-[100px] 
        flex justify-center items-center
        ">
            <div className="
            xl:w-[1300px] xl:h-[800px]
            lg:w-[1000px] lg:h-[700px]
            md:w-[700px] md:h-[1650px]
            w-[95%] h-[1650px]
             chart rounded-3xl
            xl:mt-[200px] lg:mt-[250px] md:mt-[1800px] mt-[2400px]
            xl:flex-col lg:flex-col md:flex-col flex-col flex justify-around items-center pb-[0]
            ">
                <div className='flex flex-col mx-4 xl:mb-[-20px] mb-[20px] mt-4 items-center xl:text-[1rem]'>
                    <h1 className="text-3xl text-[white] font-bold text-center">{id.toLocaleUpperCase()} NEWS 
                    </h1>
                    <span className="text-[16px] font-semibold italic text-blue-200">
                            {formattedDateMinus} to {formattedDate} 
                    </span>
                </div>
              <Carousel slide={true} className='px-16 pb-12'>
                <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col flex justify-around items-center">
                  {news.slice(0,3).map(data => (
                    <div className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4 my-3
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col">
                      <div className="w-[100%] h-[40%] rounded-t-xl ">
                        <img className="w-[100%] h-[100%] rounded-t-xl" src={data.urlToImage} alt="" />
                      </div>
                      <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                        <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">{data.title.slice(0,50)+"..."}</h1>
                        <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">{data.description.slice(0,150)+"..."}</p>
                        <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                          Source: <a href={data.url}>{data.source.name}</a>
                        </span>
                        <button className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                          <a href={data.url}>Read more here</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col flex justify-around items-center">
                  {news.slice(3,6).map(data => (
                    <div className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col">
                      <div className="w-[100%] h-[40%] rounded-t-xl ">
                        <img className="w-[100%] h-[100%] rounded-t-xl" src={data.urlToImage} alt="" />
                      </div>
                      <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                        <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">{data.title.slice(0,50)+"..."}</h1>
                        <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">{data.description.slice(0,150)+"..."}</p>
                        <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                          Source: <a href={data.url}>{data.source.name}</a>
                        </span>
                        <button className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                          <a href={data.url}>Read more here</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col flex justify-around items-center">
                  {news.slice(6,9).map(data => (
                    <div className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col">
                      <div className="w-[100%] h-[40%] rounded-t-xl ">
                        <img className="w-[100%] h-[100%] rounded-t-xl" src={data.urlToImage} alt="" />
                      </div>
                      <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                        <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">{data.title.slice(0,50)+"..."}</h1>
                        <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">{data.description.slice(0,150)+"..."}</p>
                        <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                          Source: <a href={data.url}>{data.source.name}</a>
                        </span>
                        <button className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                          <a href={data.url}>Read more here</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col flex justify-around items-center">
                  {news.slice(9,12).map(data => (
                    <div className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col">
                      <div className="w-[100%] h-[40%] rounded-t-xl ">
                        <img className="w-[100%] h-[100%] rounded-t-xl" src={data.urlToImage} alt="" />
                      </div>
                      <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                        <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">{data.title.slice(0,50)+"..."}</h1>
                        <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">{data.description.slice(0,150)+"..."}</p>
                        <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                          Source: <a href={data.url}>{data.source.name}</a>
                        </span>
                        <button className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                          <a href={data.url}>Read more here</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col flex justify-around items-center">
                  {news.slice(12,15).map(data => (
                    <div className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col">
                      <div className="w-[100%] h-[40%] rounded-t-xl ">
                        <img className="w-[100%] h-[100%] rounded-t-xl" src={data.urlToImage} alt="" />
                      </div>
                      <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                        <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">{data.title.slice(0,50)+"..."}</h1>
                        <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">{data.description.slice(0,150)+"..."}</p>
                        <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                          Source: <a href={data.url}>{data.source.name}</a>
                        </span>
                        <button className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg">
                          <a href={data.url}>Read more here</a>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
            </Carousel>
            </div>
        </div>
  )
}

export default CoinNews