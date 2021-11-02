import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import history from "../../History";
import Header from "../../shared/Header";
import News from "../../shared/news";
import Footer from "../../shared/footer";
import "./styles.scss";
import header from "./header.jpg";
import sortedArticles from "../showAll/sortedArticles";

let headerWithGridient = `linear-gradient(to bottom, rgba(0,0,0,0.5) 0%,rgba(0,0,0,0.6) 100%), url(${header})`;



let filteredFirstSix = sortedArticles.filter(function (el, i) {
  return i < 8;
});

const articlesToDisplay = filteredFirstSix.map((news, i) => {
  return <News key={news.id} news={news} />;
});

export default function HomePage() {

  function handleClick(path) {
    history.push(path);
  }
  return (
    <>
      <Header />
      <Container fluid className="afterNav">
        <Container fluid>
          <Row
            className="justify-content-center align-items-center banner"
            style={{ backgroundImage: headerWithGridient }}
          >
            <Col className="text-center " lg="4">
              <h1 className="text-white">Match 23</h1>
              <h3 className="text-white">T20 world cup 2020</h3>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className="news-list-container">
        <Container fluid>
          <div className="d-flex justify-content-between align-items-center mb-4 recently_aded">
            <p className="mb-0">recently added</p>
            <Button variant="light" onClick={() => handleClick("showall")}>Show all</Button>
          </div>
          <Row className=" ">{articlesToDisplay}</Row>
        </Container>
      </Container>
      <Footer />
    </>
  );
}
