import React, { useEffect, useState } from "react";
import { Row, Col, Card, Container, Alert } from "react-bootstrap";
import axios from "axios";

import Header from "../../shared/Header";
import Footer from "../../shared/footer";

export default function CallAPI() {
  let [errorMsg, SetErrorMsg] = useState(null);
  useEffect(() => {
    axios
      .get("http://196.135.199.186:27948/swagger/index.html")
      .then((response) => console.log(response))
      .catch((error) => {
        console.error("There was an error!", error.message);
        SetErrorMsg(error.message);
      });
  }, []);

  return (
    <>
      <Header />
      <Container fluid className="news-list-container afterNav mb-0">
        <Container fluid>
          {errorMsg ? <Alert variant={"danger"}>{errorMsg} </Alert> : null}
        </Container>
      </Container>
      <Footer />
    </>
  );
}
