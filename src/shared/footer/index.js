import React from "react";
import "./styles.scss";
import { Container, Row, Col } from "react-bootstrap";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row className="justify-content-center align-items-center footer_head">
        <Col className="text-center " lg="4">
          <i className="fa fa-futbol-o" aria-hidden="true"></i>
          <p className="text-white">Sports Live</p>
        </Col>
      </Row>
      <Row className="justify-content-between  footer_foot mx-2">
        <Col className="text-white px-0" lg="4">
          <p> &copy; copyright sportslive 2020. All right reserved</p>
        </Col>
        <Col className="text-white  px-0" lg="4">
          <Row className="mx-0">
            <Col className="px-0">
              <a href="">Career</a>
            </Col>
            <Col className="px-0">
              <a href="">contact us</a>
            </Col>
            <Col className="px-0">
              <a href="">privacy policy </a>
            </Col>
            <Col className="px-0">
              <a href="">terms and conditions</a>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
