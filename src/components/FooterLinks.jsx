import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Anchor } from "react-bootstrap";

const FooterLinks = ({ link1, link2, link3 }) => {
  return (
    <Col>
      <Row>
        <Col>
          <p>
            <Anchor
              href="#"
              alt="footer link"
              className="text-decoration-none text-white fs-6"
            >
              {link1}
            </Anchor>
          </p>
          <p>
            <Anchor
              href="#"
              alt="footer link"
              className="text-decoration-none text-white fs-6"
            >
              {link2}
            </Anchor>
          </p>
          <p>
            <Anchor
              href="#"
              alt="footer link"
              className="text-decoration-none text-white fs-6"
            >
              {link3}
            </Anchor>
          </p>
        </Col>
      </Row>
    </Col>
  );
};
export default FooterLinks;
