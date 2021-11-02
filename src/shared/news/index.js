import React from "react";
import { useDispatch } from "react-redux";
import history from "../../History";
import setNews from "../../redux/actions/setNews";
import { Col, Card } from "react-bootstrap";
import "./styles.scss";

export default function News({ news }) {
  const { title, urlToImage, publishedAt } = news;
  const dispatch = useDispatch();
  var isoDateTime = new Date(publishedAt);
  var localDateTime =
    isoDateTime.toLocaleDateString() + " " + isoDateTime.toLocaleTimeString();

  function navigateToSingleNewsPage() {
    history.push("./newsSingle");
  }
  const handleNewsClick = (news) => {
     dispatch(setNews(news));
     navigateToSingleNewsPage()
  };

  return (
    <Col className="news_card" lg="3">
      <Card
        onClick={() => handleNewsClick(news)}
        className="border-0 overflow-hidden"
        style={{ width: "100%", height: "100%" }}
      >
        <Card.Img variant="top" src={urlToImage} />
        <Card.Body className="px-0">
          <Card.Title className="card_title">{title}</Card.Title>
          <p className="text-muted">{localDateTime}</p>
        </Card.Body>
      </Card>
    </Col>
  );
}
