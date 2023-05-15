import React from 'react'

const HomeHeadCard = () => {
    let cardLinks = [
        {icon: <ion-icon  name="bar-chart-outline"></ion-icon>, details:"Exploring the Exciting World of Cryptocurrency Markets.", id:0},
        {icon: <ion-icon name="calculator-outline"></ion-icon>, details:"Maximizing Your Crypto Trading Potential.", id:1},
        {icon: <ion-icon name="search-circle-outline"></ion-icon>, details:"Discovering the Latest Trends and Insights in Crypto Markets.", id:2},
    ]


    return (
        <div className="flex-row flex 
        items-center justify-center 
        w-full ">
            <div className=" 
            absolute z-[2]
            homePageCard-filter
            lg:w-[1000px] lg:h-[200px]
            md:w-[700px] md:h-[300px]
            w-[450px] h-[320px]
            rounded-lg 
             mt-12
            newscard-filter opacity-95
            pb-4 
            flex  flex-col items-center">
                <div className="text-center mt-3 mb-2 ">
                    <h1 className="text-[white] md:text-3xl text-2xl font-semibold uppercase mt-2">
                        <span className=" text-glow">Watch</span>  the Top coins now. 
                    </h1>
                    <p className="text-[white] md:text-md text-[13.5px]  mt-2 italic">
                        Watch the latest crypto prices, markets, and news at your convenience.
                    </p>
                </div>
                <div className=" 
                lg:w-[960px] lg:h-[150px]
                md:w-[650px] md:h-[270px]
                w-[400px] h-[200px]
                flex lg:flex-row md:flex-row flex-col items-center justify-center
                mt-2 flex-wrap 
                
                ">
                    {
                        cardLinks.map(link => 
                        <div key={link.id} className="HeadCard-bg 
                        lg:w-[300px] lg:h-[50px]
                        md:w-[300px] md:h-[50px]
                        w-[350px] h-[50px]
                        rounded-lg border-[2px] border-[#9ccddc]
                        m-2 py-2
                        flex flex-row
                        duration-100 ease-in-out hover:scale-[1.02]">
                            <div className="text-white
                            flex flex-row items-center 
                            mx-2">
                                <h1 className="lg:text-4xl text-3xl mx-2">
                                    {link.icon}
                                </h1>
                                
                                <p className="lg:text-[13px] text-[12px] text- mx-2">{link.details}</p>
                            </div>
                        </div>
                        )
                    }
                    
                </div>
            </div>
            
            <div className="
            homePageCard
            lg:w-[1000px] lg:h-[200px]
            md:w-[700px] md:h-[300px]
            w-[450px] h-[320px]
            rounded-lg 
            border-[#9ccddc] border-[2px] mt-12
            "></div>
           
        </div>
    )
}


export default HomeHeadCard