import React from "react";
import { Carousel } from "flowbite-react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useId } from "react";
<<<<<<< HEAD

const CoinNews = (props) => {
  const ident = useId();
  // props.funcNav(true);
  const { id } = useParams();
  // get latest date
=======
import { useSelector } from "react-redux";
const CoinNews = (props) => {
  const mode = useSelector((state) => state.mode);
  const ident = useId();

  const { id } = useParams();

>>>>>>> origin/master
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const formattedDateMinus = `${year}-${month}-${day - 7}`;

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=${id}%20crypto&from=${formattedDateMinus}&to=${formattedDate}&sortBy=popularity&apiKey=b5daf3d3eadc418380996387610a8218`
    )
      .then((response) => response.json())
      .then((data) => setNews([...data.articles]))
      .catch((error) => console.log(error));
  }, []);

  console.log(news);

  return (
    <div
      className="
<<<<<<< HEAD
        xl:w-[100%] xl:h-[500px]
        lg:w-[100%] lg:h-[500px]
        md:w-[100%] md:h-[500px]
        w-[100%] h-[500px] 
        xl:mt-[100px] lg:mt-[10px] md:mt-[1500px] mt-[1300px]
        mb-[100px] 
        flex justify-center items-center
        "
    >
      <div
        className="
            xl:w-[1300px] xl:h-[800px]
            lg:w-[1000px] lg:h-[700px]
            md:w-[700px] md:h-[1650px]
            w-[95%] h-[1650px]
             chart rounded-3xl
            xl:mt-[200px] lg:mt-[250px] md:mt-[1800px] mt-[2400px]
            xl:flex-col lg:flex-col md:flex-col flex-col flex justify-around items-center pb-[0]
            "
      >
        <div className="flex flex-col mx-4 xl:mb-[-20px] mb-[20px] mt-4 items-center xl:text-[1rem]">
          <h1 className="text-3xl text-[white] font-bold text-center">
            {id.toLocaleUpperCase()} NEWS
          </h1>
          <span className="text-[16px] font-semibold italic text-blue-200">
=======
        mb-[100px] mt-[1300px]
        flex h-[500px]
        w-[100%] items-center
        justify-center md:mt-[1500px] 
        md:h-[500px] md:w-[100%] lg:mt-[10px] lg:h-[500px]
        lg:w-[100%] 
        xl:mt-[100px] xl:h-[500px] xl:w-[100%]
        "
    >
      <div
        className={`
            ${
              mode === "light"
                ? "bg-slate-200 text-blue-900 shadow-xl"
                : "chart text-white"
            } mt-[2400px]
            flex h-[1650px]
            w-[95%] flex-col
            items-center justify-around
             rounded-3xl pb-[0]
            md:mt-[1800px] md:h-[1650px] md:w-[700px] md:flex-col
            lg:mt-[250px] lg:h-[700px] lg:w-[1000px] lg:flex-col xl:mt-[200px] xl:h-[800px] xl:w-[1300px] xl:flex-col
            `}
      >
        <div className="mx-4 mb-[20px] mt-4 flex flex-col items-center xl:mb-[-20px] xl:text-[1rem]">
          <h1 className="text-center text-3xl font-bold ">
            {id.toLocaleUpperCase()} NEWS
          </h1>
          <span className="text-[16px] font-semibold italic ">
>>>>>>> origin/master
            {formattedDateMinus} to {formattedDate}
          </span>
        </div>
        <Carousel slide={true} className="px-16 pb-12">
<<<<<<< HEAD
          <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col justify-around items-center">
            {news.slice(0, 3).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4 
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col"
              >
                <div className="w-[100%] h-[40%] rounded-t-xl ">
                  <img
                    className="w-[100%] h-[100%] rounded-t-xl"
=======
          <div className="flex  flex-col items-center justify-around md:flex-col lg:flex-row xl:flex-row">
            {news.slice(0, 3).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className={`
                    mx-3 my-4
                    flex h-[500px]
                    w-[85%] flex-col
                    rounded-xl  ${
                      mode === "light" ? "" : "shadow-blue-500/50"
                    }  shadow-lg  md:h-[500px] 
                    md:w-[400px] lg:h-[550px] lg:w-[300px]
                    xl:h-[600px] xl:w-[400px]`}
              >
                <div className="h-[40%] w-[100%] rounded-t-xl ">
                  <img
                    className="h-[100%] w-[100%] rounded-t-xl"
>>>>>>> origin/master
                    src={data.urlToImage}
                    alt="news_image"
                  />
                </div>
<<<<<<< HEAD
                <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                  <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <button
                    className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg"
                  >
                    <a href={data.url}>Read more here</a>
                  </button>
=======
                <div
                  className={`flex h-[60%] w-[100%] flex-col justify-around rounded-b-xl ${
                    mode === "light"
                      ? "bg-slate-300/30 font-semibold text-slate-900 shadow-xl"
                      : "bg-[#161c26] text-white"
                  }  p-3`}
                >
                  <h1 className="text-md font-semibol my-2 md:text-xl lg:text-xl">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="my-2 text-[13px] lg:text-[14px]">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-right text-[13px] lg:text-[14.5px]">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <a
                    href={data.url}
                    className={`mb-2 mt-6 flex cursor-pointer justify-center rounded-lg p-1 ${
                      mode === "light"
                        ? "newscard-filter-light text-glow font-bold text-blue-900 hover:bg-blue-100 hover:text-blue-500"
                        : "bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500"
                    } 
                         duration-200 ease-in-out 
                         md:text-[15px] lg:text-[13px] xl:text-[13px]`}
                  >
                    Read more here
                  </a>
>>>>>>> origin/master
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
          <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col  justify-around items-center">
            {news.slice(3, 6).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col"
              >
                <div className="w-[100%] h-[40%] rounded-t-xl ">
                  <img
                    className="w-[100%] h-[100%] rounded-t-xl"
=======
          <div className="flex  flex-col items-center justify-around md:flex-col  lg:flex-row xl:flex-row">
            {news.slice(3, 6).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className={`
                    mx-3 my-4
                    flex h-[500px]
                    w-[85%] flex-col
                    rounded-xl  ${
                      mode === "light" ? "" : "shadow-blue-500/50"
                    }  shadow-lg  md:h-[500px] 
                    md:w-[400px] lg:h-[550px] lg:w-[300px]
                    xl:h-[600px] xl:w-[400px]`}
              >
                <div className="h-[40%] w-[100%] rounded-t-xl ">
                  <img
                    className="h-[100%] w-[100%] rounded-t-xl"
>>>>>>> origin/master
                    src={data.urlToImage}
                    alt=""
                  />
                </div>
<<<<<<< HEAD
                <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                  <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <button
                    className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg"
                  >
                    <a href={data.url}>Read more here</a>
                  </button>
=======
                <div
                  className={`flex h-[60%] w-[100%] flex-col justify-around rounded-b-xl ${
                    mode === "light"
                      ? "bg-slate-300/30 font-semibold text-slate-900 shadow-xl"
                      : "bg-[#161c26] text-white"
                  }  p-3`}
                >
                  <h1 className="text-md my-2 font-semibold  md:text-xl lg:text-xl">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="my-2 text-[13px]  lg:text-[14px]">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-right text-[13px]  lg:text-[14.5px]">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <a
                    href={data.url}
                    className={`mb-2 mt-6 flex cursor-pointer justify-center rounded-lg p-1 ${
                      mode === "light"
                        ? "newscard-filter-light text-glow font-bold text-blue-900 hover:bg-blue-100 hover:text-blue-500"
                        : "bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500"
                    } 
                         duration-200 ease-in-out 
                         md:text-[15px] lg:text-[13px] xl:text-[13px]`}
                  >
                    Read more here
                  </a>
>>>>>>> origin/master
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
          <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col  justify-around items-center">
            {news.slice(6, 9).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col"
              >
                <div className="w-[100%] h-[40%] rounded-t-xl ">
                  <img
                    className="w-[100%] h-[100%] rounded-t-xl"
=======
          <div className="flex  flex-col items-center justify-around md:flex-col  lg:flex-row xl:flex-row">
            {news.slice(6, 9).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className={`
                    mx-3 my-4
                    flex h-[500px]
                    w-[85%] flex-col
                    rounded-xl  ${
                      mode === "light" ? "" : "shadow-blue-500/50"
                    }  shadow-lg  md:h-[500px] 
                    md:w-[400px] lg:h-[550px] lg:w-[300px]
                    xl:h-[600px] xl:w-[400px]`}
              >
                <div className="h-[40%] w-[100%] rounded-t-xl ">
                  <img
                    className="h-[100%] w-[100%] rounded-t-xl"
>>>>>>> origin/master
                    src={data.urlToImage}
                    alt=""
                  />
                </div>
<<<<<<< HEAD
                <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                  <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <button
                    className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg"
                  >
                    <a href={data.url}>Read more here</a>
                  </button>
=======
                <div
                  className={`flex h-[60%] w-[100%] flex-col justify-around rounded-b-xl ${
                    mode === "light"
                      ? "bg-slate-300/30 font-semibold text-slate-900 shadow-xl"
                      : "bg-[#161c26] text-white"
                  }  p-3`}
                >
                  <h1 className="text-md my-2 font-semibold  md:text-xl lg:text-xl">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="my-2 text-[13px]  lg:text-[14px]">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-right text-[13px]  lg:text-[14.5px]">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <a
                    href={data.url}
                    className={`mb-2 mt-6 flex cursor-pointer justify-center rounded-lg p-1 ${
                      mode === "light"
                        ? "newscard-filter-light text-glow font-bold text-blue-900 hover:bg-blue-100 hover:text-blue-500"
                        : "bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500"
                    } 
                         duration-200 ease-in-out 
                         md:text-[15px] lg:text-[13px] xl:text-[13px]`}
                  >
                    Read more here
                  </a>
>>>>>>> origin/master
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
          <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col  justify-around items-center">
            {news.slice(9, 12).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col"
              >
                <div className="w-[100%] h-[40%] rounded-t-xl ">
                  <img
                    className="w-[100%] h-[100%] rounded-t-xl"
=======
          <div className="flex  flex-col items-center justify-around md:flex-col  lg:flex-row xl:flex-row">
            {news.slice(9, 12).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className={`
                    mx-3 my-4
                    flex h-[500px]
                    w-[85%] flex-col
                    rounded-xl  ${
                      mode === "light" ? "" : "shadow-blue-500/50"
                    }  shadow-lg  md:h-[500px] 
                    md:w-[400px] lg:h-[550px] lg:w-[300px]
                    xl:h-[600px] xl:w-[400px]`}
              >
                <div className="h-[40%] w-[100%] rounded-t-xl ">
                  <img
                    className="h-[100%] w-[100%] rounded-t-xl"
>>>>>>> origin/master
                    src={data.urlToImage}
                    alt=""
                  />
                </div>
<<<<<<< HEAD
                <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                  <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <button
                    className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg"
                  >
                    <a href={data.url}>Read more here</a>
                  </button>
=======
                <div
                  className={`flex h-[60%] w-[100%] flex-col justify-around rounded-b-xl ${
                    mode === "light"
                      ? "bg-slate-300/30 font-semibold text-slate-900 shadow-xl"
                      : "bg-[#161c26] text-white"
                  }  p-3`}
                >
                  <h1 className="text-md my-2 font-semibold md:text-xl lg:text-xl">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="my-2 text-[13px] lg:text-[14px]">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-right text-[13px] lg:text-[14.5px]">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <a
                    href={data.url}
                    className={`mb-2 mt-6 flex cursor-pointer justify-center rounded-lg p-1 ${
                      mode === "light"
                        ? "newscard-filter-light text-glow font-bold text-blue-900 hover:bg-blue-100 hover:text-blue-500"
                        : "bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500"
                    } 
                         duration-200 ease-in-out 
                         md:text-[15px] lg:text-[13px] xl:text-[13px]`}
                  >
                    Read more here
                  </a>
>>>>>>> origin/master
                </div>
              </div>
            ))}
          </div>
<<<<<<< HEAD
          <div className="flex  xl:flex-row lg:flex-row md:flex-col flex-col  justify-around items-center">
            {news.slice(12, 15).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className="
                    xl:w-[400px] xl:h-[600px]
                    lg:w-[300px] lg:h-[550px]
                    md:w-[400px] md:h-[500px]
                    w-[85%]    h-[500px] mx-3 my-4
                    rounded-xl shadow-lg shadow-blue-500/50
                    flex flex-col"
              >
                <div className="w-[100%] h-[40%] rounded-t-xl ">
                  <img
                    className="w-[100%] h-[100%] rounded-t-xl"
=======
          <div className="flex  flex-col items-center justify-around md:flex-col  lg:flex-row xl:flex-row">
            {news.slice(12, 15).map((data, index) => (
              <div
                key={`${ident}-${news.author}-${index}`}
                className={`
                    mx-3 my-4
                    flex h-[500px]
                    w-[85%] flex-col
                    rounded-xl  ${
                      mode === "light" ? "" : "shadow-blue-500/50"
                    }  shadow-lg  md:h-[500px] 
                    md:w-[400px] lg:h-[550px] lg:w-[300px]
                    xl:h-[600px] xl:w-[400px]`}
              >
                <div className="h-[40%] w-[100%] rounded-t-xl ">
                  <img
                    className="h-[100%] w-[100%] rounded-t-xl"
>>>>>>> origin/master
                    src={data.urlToImage}
                    alt=""
                  />
                </div>
<<<<<<< HEAD
                <div className="w-[100%] h-[60%] bg-[#161c26] rounded-b-xl p-3 flex flex-col justify-around">
                  <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="text-[#c4c4c4] lg:text-[14px] text-[13px] my-2">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-[#c4c4c4] lg:text-[14.5px] text-[13px] text-right">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <button
                    className="text-white mt-6 mb-2 flex justify-center  
                        xl:text-[13px] lg:text-[13px] md:text-[15px] p-1 bg-blue-500
                        hover:bg-blue-100 hover:text-blue-500 duration-200 ease-in-out rounded-lg"
                  >
                    <a href={data.url}>Read more here</a>
                  </button>
=======
                <div
                  className={`flex h-[60%] w-[100%] flex-col justify-around rounded-b-xl ${
                    mode === "light"
                      ? "bg-slate-300/30 font-semibold text-slate-900 shadow-xl"
                      : "bg-[#161c26] text-white"
                  }  p-3`}
                >
                  <h1 className="text-md my-2 font-semibold md:text-xl lg:text-xl">
                    {data.title.slice(0, 50) + "..."}
                  </h1>
                  <p className="my-2 text-[13px] lg:text-[14px]">
                    {data.description.slice(0, 150) + "..."}
                  </p>
                  <span className="text-right text-[13px] lg:text-[14.5px]">
                    Source: <a href={data.url}>{data.source.name}</a>
                  </span>
                  <a
                    href={data.url}
                    className={`mb-2 mt-6 flex cursor-pointer justify-center rounded-lg p-1 ${
                      mode === "light"
                        ? "newscard-filter-light text-glow font-bold text-blue-900 hover:bg-blue-100 hover:text-blue-500"
                        : "bg-blue-500 text-white hover:bg-blue-100 hover:text-blue-500"
                    } 
                         duration-200 ease-in-out 
                         md:text-[15px] lg:text-[13px] xl:text-[13px]`}
                  >
                    Read more here
                  </a>
>>>>>>> origin/master
                </div>
              </div>
            ))}
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default CoinNews;
