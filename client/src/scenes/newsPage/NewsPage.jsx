import { useState, useEffect } from "react";
import Loader from "../../components/Loader";
import Pagination from "../../components/Pagination";
import NewsCardHeader from "./NewsCardHeader";
import NewsCard from "./NewsCard";

function NewsPage(props) {
  // get latest date
  const date = new Date();
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  const formattedDateMinus = `${year}-${month}-${day - 7}`;

  const [news, setNews] = useState([]);

  // for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setpostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  useEffect(() => {
    fetch(
      `https://newsapi.org/v2/everything?q=cryptocurrency&from=${formattedDateMinus}&to=${formattedDate}&sortBy=popularity&apiKey=b5daf3d3eadc418380996387610a8218`
    )
      .then((response) => response.json())
      .then((data) => setNews([...data.articles]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div
      className={`flex h-[4150px] w-full flex-col items-center bg-[#051925] md:h-[3500px] lg:h-[3000px]`}
    >
      <div className="flex h-full w-full flex-row justify-center">
        <NewsCardHeader />
        <div
          className="
                newsCardHeader mt-12
                flex h-[350px]
                w-[450px] flex-col
                rounded-lg 
                border-[0.1px] border-[#9ccddc] pb-4
                md:h-[300px]
                md:w-[700px]
                lg:h-[300px]  lg:w-[1000px]"
        >
          <div className="mt-[80%] flex flex-col md:mt-[45%] lg:mt-[30%]">
            <div className="mb-2 mt-3 flex flex-col items-center justify-between md:flex-row lg:flex-row">
              <div>
                <h1 className="mt-2 text-[15px] text-[#9ccddc] md:text-[15px] lg:text-[15px]">
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
              news
                .slice(firstPostIndex, lastPostIndex)
                .map((data, index) => (
                  <NewsCard
                    key={`${index}`}
                    image={data.urlToImage}
                    title={data.title}
                    description={data.description}
                    url={data.url}
                    source={data.source}
                  />
                ))
            ) : (
              <Loader />
            )}
          </div>

          <div className="mt mb-[100px] flex flex-col items-center justify-between md:flex-row lg:flex-row ">
            <div>
              <h1 className="text-[15px] text-[#9ccddc] md:text-[15px] lg:text-[15px] ">
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
