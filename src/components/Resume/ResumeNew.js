import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const pdf = `${process.env.PUBLIC_URL}/CV_Mario_Lopez_Gaston.pdf`;

function ResumeNew() {
  const [height, setHeight] = useState(640);
  const [width, setWidth] = useState(900);

  useEffect(() => {
    const updateViewport = () => {
      setWidth(window.innerWidth);
      // Decrease the subtraction so the viewer becomes taller and can reach the footer.
      // Cap the height to avoid overflowing on very large screens.
      setHeight(Math.max(Math.min(window.innerHeight - 140, 980), 640));
    };

    updateViewport();
    window.addEventListener("resize", updateViewport);
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  const handleDownload = async () => {
    try {
      const response = await fetch(pdf);
      if (!response.ok) {
        throw new Error("No se pudo descargar el archivo");
      }

      const blob = await response.blob();
      const objectUrl = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = objectUrl;
      link.download = "CV_Mario_Lopez_Gaston.pdf";
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(objectUrl);
    } catch (error) {
      window.open(pdf, "_blank", "noopener,noreferrer");
    }
  };

  const pageWidth = Math.min(Math.max(width * 0.40, 320), 560);

  return (
    <div>
      <Container
        fluid
        className="resume-section"
        style={{ minHeight: "calc(100vh - 90px)", overflow: "hidden", paddingTop: "16px", paddingBottom: "90px" }}
      >
        <Row style={{ justifyContent: "center", margin: 0, marginBottom: "12px" }}>
          <Col xs={12} style={{ display: "flex", justifyContent: "center" }}>
            <Button
              variant="primary"
              onClick={handleDownload}
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Descargar CV
            </Button>
          </Col>
        </Row>

        <Row style={{ margin: 0, justifyContent: "center", alignItems: "flex-start" }}>
          <Col xs={12} md={9} lg={8} style={{ display: "flex", justifyContent: "center" }}>
            <div style={{ width: `${pageWidth}px`, maxWidth: "100%", height: `${height}px`, background: "#fff", borderRadius: "12px", overflow: "hidden", boxShadow: "0 12px 30px rgba(0,0,0,0.25)" }}>
              <Document file={pdf} loading={<p style={{ color: "white", margin: 0, padding: "24px" }}>Cargando CV...</p>}>
                <Page pageNumber={1} height={height} renderTextLayer={false} renderAnnotationLayer={false} />
              </Document>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
