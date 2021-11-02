import React, { useEffect } from "react";
import { Row, Col, Card } from "react-bootstrap";
import { useSelector } from "react-redux";
import history from "../../History";
import Header from "../../shared/Header";
import Footer from "../../shared/footer";

import "./styles.scss";

export default function SingleNews() {
  const singleNews = useSelector((state) => state.newsSelected);

  const { title, urlToImage, publishedAt, content } = singleNews;
  var isoDateTime = new Date(publishedAt);
  var localDateTime = isoDateTime.toLocaleDateString();

  useEffect(() => {
    if (Object.keys(singleNews).length === 0) {
      history.push("/");
    }
  }, [singleNews]);

  return (
    <>
      <Header />
      <Row className="newsSingle">
        <Col className="news_card" lg="8">
          <Card
            className="border-0 overflow-hidden"
            style={{ width: "100%", height: "100%" }}
          >
            <Card.Img variant="top" src={urlToImage} />
            <Card.Body className="px-0">
              <Card.Title className="card_title">{title}</Card.Title>
              <p className="text-muted">{localDateTime}</p>
              <Card.Text>{content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Footer />
    </>
  );
}
