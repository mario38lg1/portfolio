import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMÍTEME <span className="purple"> PRESENTARME </span>
            </h1>
            <p className="home-about-body">
              Soy Desarrollador de Software especializado en el entorno web. Mi
              objetivo es transformar requisitos de negocio en soluciones
              digitales eficientes y bien estructuradas.
              <br />
              <br />
              A través de mi formación en DAW, he perfeccionado mis
              habilidades en lenguajes como Java y PHP para el backend,
              combinándolos con la agilidad de JavaScript en el frontend. Tengo
              experiencia gestionando bases de datos relacionales y optimizando
              la comunicación entre sistemas.
              <br />
              <br />
              Me apasiona el ecosistema de <b className="purple">Laravel</b> y
              siempre estoy explorando nuevas herramientas para mejorar el
              rendimiento de mis aplicaciones.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
