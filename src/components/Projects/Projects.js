import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mis <strong className="purple">proyectos</strong> recientes
        </h1>
        <p style={{ color: "white" }}>
          Aquí hay algunos proyectos en los que he trabajado recientemente.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={"https://luciamaciasescritora.es/libros.gif"}
              isBlog={false}
              title="Lucía Macías — Escritora"
              description={`🚀 Sitio web oficial en producción.\n\nPortfolio diseñado y desarrollado a medida para presentación literaria y exposición de catálogo de libros. Creado sin frameworks externos (HTML5, CSS3 y JS Vanilla) para maximizar el rendimiento.\n\nHecho con HTML, CSS y JavaScript. Diseño responsive (Mobile-first).`}
              ghLink={""}
              demoLink="https://luciamaciasescritora.es"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
