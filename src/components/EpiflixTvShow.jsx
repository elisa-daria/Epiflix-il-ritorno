import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const EpiflixTvShow = () => {
  return (
    <aside className="container">
      <Row className="justify-content-center align-items-center h-100">
        <Col xs={8} className="text-center text-white opacity-50">
          <h1> Hi Beauty!</h1>
          <Image fluid thumbnail src="https://placebear.com/g/400/500"></Image>
        </Col>
      </Row>
    </aside>
  );
};

export default EpiflixTvShow;
