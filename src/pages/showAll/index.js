import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../../shared/Header";
import News from "../../shared/news";
import Footer from "../../shared/footer";
import sortedArticles from "./sortedArticles";
import "./styles.scss";

export default function ShowAll() {
  
  const [articlesCount, setArticlesCount] = useState(8);

  let filteredFirstArticles = sortedArticles.filter(function (el, i) {
    return i < articlesCount;
  });


  const articlesToDisplay = filteredFirstArticles.map((news, i) => {
    return <News key={news.id} news={news}  />;
  });

  return (
    <>
      <Header />
      <Container fluid className="news-list-container afterNav mb-0">
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center mb-4 recently_aded">
            <p className="mb-0">recently added</p>
          </div>
          <Row className=" ">{articlesToDisplay}</Row>
        </Container>
      </Container>
      <Row className="justify-content-center mb-4">
        {articlesCount <= filteredFirstArticles.length ? (
          <Col className="text-center" lg="2">
            <Button
              variant="light"
              onClick={() => setArticlesCount(articlesCount + 8)}
            >
              {" "}
              Show More
            </Button>
          </Col>
        ) : null}
      </Row>
      <Footer />
    </>
  );
}
