import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import FooterLinks from "./FooterLinks";

const EpiflixFooter = () => {
  return (
    <Container fluid className="px-4 pt-5 bg-black">
      <Row className="justify-content-center text-white text-center">
        <Col sx={6}>
          <Row>
            <Col className="mb-2">
              <i className="bi bi-facebook footer-icon me-2"></i>
              <i className="bi bi-instagram footer-icon me-2"></i>
              <i className="bi bi-twitter-x footer-icon me-2"></i>
              <i className="bi bi-youtube footer-icon"></i>
            </Col>
          </Row>
          <Row xs={1} sm={2} md={4} lg={4}>
            {/* qui ci va la mega colonna di Footerlinks */}
            <FooterLinks
              link1="Audio and Subtitles"
              link2="Privacy"
              link3="Contact us"
            />
            <FooterLinks
              link1="Audio Description"
              link2="Investor Relations"
              link3="Legal Notices"
            />
            <FooterLinks
              link1="Help Center"
              link2="Jobs"
              link3="Cookie Preferences"
            />
            <FooterLinks
              link1="Gift Cards"
              link2="Terms of Use"
              link3="Corporate Information"
            />
          </Row>
          <Row>
            <Col className="mb-2">
              <Button className=" btn btn-sm footer-button rounded-0 mt-3 border-white bg-transparent">
                Service Code
              </Button>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2 mt-2 copyright">© 1997-2023 Netflix, Inc.</Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default EpiflixFooter;
