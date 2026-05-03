import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            ¡Hola a todos! Soy <span className="purple">Mario López</span>.
            <br />
            Actualmente trabajo como <span className="purple">Desarrollador de Software</span>.
            <br />Tengo formación en <span className="purple">Desarrollo de Aplicaciones Web (DAW)</span>.
            <br />
            <br />
            Fuera de la programación, me gusta realizar actividades que me
            mantienen creativo e inspirado:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Escribir blogs técnicos ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Viajar y explorar nuevos lugares 🌍
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "¡Esfuérzate por construir cosas que marquen la diferencia!"
          </p>
          <footer className="blockquote-footer">Mario</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
