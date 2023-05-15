import { useState, useEffect } from "react";
import { Sparklines, SparklinesLine, SparklinesSpots } from 'react-sparklines';
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination";
import shortid from 'shortid';

function NewsPage() {
    // get latest date 
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');

    const formattedDate = `${year}-${month}-${day}`;
    const formattedDateMinus = `${year}-${month}-${day-7}`;

    const [price, setpriceData] = useState([]);
    const [news, setNews] = useState([]);

    // for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setpostsPerPage] = useState(10);

    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;

    useEffect( () => {
        fetch(`https://newsapi.org/v2/everything?q=cryptocurrency&from=${formattedDateMinus}&to=${formattedDate}&sortBy=popularity&apiKey=b5daf3d3eadc418380996387610a8218`)
        .then(response => response.json())
        .then(data => setNews([...data.articles]))
        .catch(error => console.log(error));
        
    },[])

    useEffect( () => {

        fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true&locale=en')
        .then(response => response.json())
        .then(data => setpriceData([...data]))
        .catch(error => console.log(error));

    },[])

    return ( 
        <div className={`w-full lg:h-[3000px] md:h-[3500px] h-[4150px] bg-[#051925] flex flex-col items-center`}>
            <div className="flex-row flex 
            justify-center 
            w-full h-full">

                <div className="
                absolute z-[2]
                lg:w-[1000px] lg:h-[370px]
                md:w-[700px] md:h-[475px]
                w-[450px] h-[590px]
                rounded-lg 
                mt-12
                headCard-filter 
                pb-4
                flex  flex-col">
                    <div className="p-6">
                        <h1 className="text-white text-3xl font-bold mb-6">
                            Be updated. no FOMO. Crypto news for you.
                        </h1>
                        <p className="text-white text-md  md:w-[500px]">
                            Welcome to the ultimate source for all your cryptocurrency news and analysis! Our mission is to keep you up-to-date with the 
                            latest developments in the rapidly evolving world of digital currencies.
                        </p>
                        <h1 className="text-white text-md font-bold my-2">
                            Top 3 coins as of 24hrs:
                        </h1>
                    </div>
                    <div className="flex lg:flex-row  lg:flex-nowrap flex-wrap px-6 justify-center lg:mb-2 md:mb-2 mb-0">
                    {price.length ? (
                        price.slice(0,3).map(crypto => (
                            <article key={crypto.id} className="bg-[#062c43] lg:w-[300px] md:w-[300px] w-full h-[70px] rounded-lg mr-6 my-2
                            flex flex-row items-center justify-around border-[#9ccddc] border-[0.5px]
                            duration-200 ease-in-out hover:scale-[1.02]">
                                <div>
                                    <h1 className="text-white text-glow">#{crypto.market_cap_rank}</h1>
                                </div>
                                <div>
                                    
                                    <div className="rounded-xl border-[#9ccddc] border-[0.5px] 
                                    lg:h-[50px] lg:w-[50px] 
                                    md:h-[60px] md:w-[60px] 
                                    h-[50px] w-[50px]
                                    flex 
                                    items-center justify-center">
                                        <img src={crypto.image} alt="" className="
                                        lg:h-[40px] lg:w-[40px]
                                        md:h-[40px] md:w-[40px]
                                        h-[30px] w-[30px]
                                        "/>
                                    </div>
                                    
                                </div>
                                <div className=" flex flex-col items-center">
                                    <h1 className="text-white font-bold">{crypto.name}</h1>
                                    <h1 className="text-white">${crypto.current_price.toLocaleString()}</h1>
                                </div>
                                <div className=" flex flex-col items-center w-[75px]">
                                <Sparklines data={crypto.sparkline_in_7d.price}>
                                    { crypto.current_price > crypto.sparkline_in_7d.price[0] ? (
                                        <SparklinesLine style={{ stroke: "#4dff58", fill: "#4dff58", fillOpacity: "0.2" }} />
                                    ) : (
                                        <SparklinesLine style={{ stroke: "#fc3a3a", fill: "#fc3a3a", fillOpacity: "0.2" }} />
                                    )
                                    }
                                    
                                </Sparklines>
                                </div>
                            </article>
                        ))
                        ) : (
                            <div className=" lg:top-[150px] md:top-[170px] top-[340px] absolute">
                                <Loader/>
                            </div>
                            
                        )}
                    </div>
                    <div className="
                    mt-1
                    ml-6
                    ">
                        <Link to="/Home" className="text-[10px]
                        w-[100px] h-[20px] p-1
                        hover:text-[white] duration-200 ease-in-out hover:scale-[1.02] text-white
                        border-[#9ccddc]  md:bg-[#054569] bg-[#062c43] 
                        border-[0.5px]
                        hover:bg-[#9ccddc] rounded-full">View Coins here</Link>
                    </div>
                </div>
            
           
                <div className="
                lg:w-[1000px] lg:h-[370px]
                md:w-[700px] md:h-[475px]
                w-[450px] h-[590px]
                rounded-lg 
                border-[#9ccddc] border-[0.1px] mt-12
                newsCardHeader
                pb-4
                flex  flex-col">
                    <div className="lg:mt-[350px] lg:mt-[380px] md:mt-[480px] mt-[580px] flex flex-col">
                        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between mb-2 mt-3">
                            <div>
                                <h1 className="lg:text-[15px] md:text-[15px] text-[15px] text-[#9ccddc] mt-2">
                                Latest News from {formattedDateMinus} - {formattedDate}
                                </h1>
                            </div>
                            <div>
                                <Pagination 
                                totalPosts={news.length} 
                                postsPerPage={postsPerPage}
                                setCurrentPage={setCurrentPage}
                                currentPage={currentPage}
                                />
                            </div>
                            
                        </div>
                        {news.length ? (
                            news.slice(firstPostIndex,lastPostIndex).map(data => (
                                <div key={shortid.generate()} className="border-[#094663]  border-[0.1px]
                                bg-[#020e14] shadow-xl
                                rounded-md  
                                lg:h-[210px] lg:w-[100%] 
                                md:h-[250px] md:w-[100%] 
                                h-[300px] w-[100%] 
                                flex  flex-col
                                duration-200 ease-in-out hover:scale-[1.01]
                                my-3 ">
                                <div className="flex flex-row lg:p-0 md:p-0 p-1">
                                    <div className=" newscard-filter
                                    lg:h-[205px] lg:w-[250px]
                                    md:h-[245px] md:w-[250px]
                                    h-[200px] w-[175px] rounded-md
                                    lg:mt-0 mt-2 lg:mx-0 mx-2
                                    md:mt-0 mt-2 md:mx-0 mx-1
                                    p-1 absolute  "
                                    ></div>
                                    <img src={data.urlToImage} alt="" className="
                                    lg:h-[205px] lg:w-[250px]
                                    md:h-[245px] md:w-[250px]
                                    h-[200px] w-[175px] rounded-md 
                                    lg:mt-0 mt-2 lg:mx-0 mx-2
                                    md:mt-0 mt-2 md:mx-0 mx-1
                                    
                                    " />
                                    
                                    <div className="ml-4 lg:w-[700px] w-[400px]">
                                        <h1 className="text-white lg:text-xl md:text-xl text-md my-2 font-semibold">{data.title}</h1>
                                        <p className="text-white 
                                        lg:text-[14.5px] text-[13px]
                                        my-2"> {data.description.slice(0,150)+"..."}
                                        </p>
                                        <div className="flex flex-row justify-between 
                                        lg:text-[14.5px] text-[12px]
                                        lg:mt-1 md:mt-4 mt-8 " >
                                            <span className="text-white italic pt-2 ">Source: {data.source.name}</span>
                                            <a href={data.url} className=" 
                                             hover:text-[white] duration-200 ease-in-out hover:scale-[1.02] text-white
                                             border-[#9ccddc]  md:bg-[#054569] bg-[#062c43] 
                                             lg:px-4 lg:pt-1 
                                             md:px-2 md:pt-1
                                             px-3 pt-[2px] mr-2
                                             
                                             text-[1]
                                             hover:bg-[#9ccddc] rounded-lg">
                                                Read More
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        )) 
                               
                        ) : (
                            <Loader/>
                        )}
                        
                    </div>
                    

                    <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between mt mb-[100px] ">
                        <div>
                            <h1 className="lg:text-[15px] md:text-[15px] text-[15px] text-[#9ccddc] ">
                                Page {currentPage} - Showing 10 results out of {news.length}
                            </h1>
                        </div>
                        <Pagination 
                        totalPosts={news.length} 
                        postsPerPage={postsPerPage}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        />
                    </div>
                    

                </div>
            </div>
        </div>
     );
}

export default NewsPage;
// HEX CODES:
// #062c43
// #054569
// #5591a9
// #9ccddc
// #ced7e0

