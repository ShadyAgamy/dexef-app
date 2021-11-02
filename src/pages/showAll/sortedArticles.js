var newsData = require("../../News.json");

let sortedArticles = newsData.articles
  .sort(
    (a, b) =>
      new Date(...a.publishedAt.split("/")) -
      new Date(...b.publishedAt.split("/"))
  )
  .reverse();

  export default sortedArticles;