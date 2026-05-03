import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiPhp,
  SiLaravel,
  SiAngular,
  SiGithub,
  SiMysql,
  SiDocker,
  SiNodedotjs,
  SiGit,
} from "react-icons/si";

function Techstack() {
  const skills = [
    { key: "html5", icon: <SiHtml5 size={48} color="#E34F26" />, label: "HTML5" },
    { key: "css3", icon: <SiCss3 size={48} color="#1572B6" />, label: "CSS3" },
    { key: "js", icon: <SiJavascript size={48} color="#F7DF1E" />, label: "JavaScript" },
    { key: "jquery", icon: <SiJquery size={48} color="#0769AD" />, label: "jQuery" },
    { key: "php", icon: <SiPhp size={48} color="#777BB4" />, label: "PHP" },
    { key: "laravel", icon: <SiLaravel size={48} color="#FF2D20" />, label: "Laravel" },
    { key: "angular", icon: <SiAngular size={48} color="#DD0031" />, label: "Angular" },
    { key: "git", icon: <SiGit size={48} color="#F05032" />, label: "Git" },
    { key: "github", icon: <SiGithub size={48} color="#FFFFFF" />, label: "GitHub" },
    { key: "docker", icon: <SiDocker size={48} color="#2496ED" />, label: "Docker" },
    { key: "node", icon: <SiNodedotjs size={48} color="#43853D" />, label: "Node.js" },
    { key: "mysql", icon: <SiMysql size={48} color="#4479A1" />, label: "MySQL" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {skills.map((s) => (
        <Col key={s.key} xs={6} md={2} className="tech-icons" style={{textAlign:"center"}}>
          <div style={{display:"flex",justifyContent:"center",alignItems:"center",height:48}}>{s.icon}</div>
          <div className="tech-icons-text">{s.label}</div>
        </Col>
      ))}
    </Row>
  );
}

export default Techstack;
