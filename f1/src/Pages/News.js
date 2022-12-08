import React from "react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import newsData from "../newsData";

// console.log(newsData[0].articles);

function News() {
  const [news, setNews] = useState(newsData[0].articles);
  const [readMore, setReadMore] = useState(false);

  //   remove articles
  const removeArticle = (title) => {
    const newArticles = news.filter((article) => article.title !== title);
    setNews(newArticles);
  };

  //   TODO:Fetch data:
  const fetchResults = async (year) => {
    try {
      const { data } = await axios(
        `https://newsapi.org/v2/everything?q=formula1&language=en&from=2022-11-06&sortBy=publishedAt&pageSize=40&excludeDomains=cryptodaily.co.uk,globenewswire.com&apiKey=706e3f9a85834c848a24dd1ec7f8159f`
      );
      const newsData = data.articles;
      setNews(newsData);
      console.log(newsData);
    } catch (err) {
      console.log(err.response);
    }
  };
  //   useEffect(() => {
  //     fetchResults();
  //   }, []);

  if (news.length < 1) {
    return (
      <div>
        <h1 className="alert">
          No more Articles left to show Please Refresh the page
        </h1>
      </div>
    );
  }
  return (
    <>
      <h1 className="page-title container">F1 Latest News </h1>

      <div className="news-container">
        {news.map((item, index) => {
          const {
            author,
            content,
            description,
            source,
            title,
            url,
            urlToImage,
          } = item;
          return (
            <article className="news-card" key={index}>
              <div>
                <div className="card">
                  <div className="inner">
                    <img src={urlToImage} alt={title} />
                  </div>
                  <div className="card-info">
                    <h5 className="title">{title}</h5>
                    <p className="">{description}</p>
                    <div className="buttons">
                      <a href={url} target="_blank" className="btn-black">
                        Read more
                      </a>

                      <button
                        onClick={() => removeArticle(title)}
                        className="btn-red"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default News;
