import { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Link } from "react-router-dom";

class EpiflixSaga extends Component {
  state = {
    saga: [],
  };

  myURL = () =>
    "https://www.omdbapi.com/?apikey=9c621114&s=" + this.props.searchTerm;

  gettingSaga = (searchTerm) => {
    fetch(this.myURL(searchTerm))
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.statusText);
        }
      })
      .then((movieArray) => {
        // console.log(movieArray.Search);
        this.setState({
          saga: movieArray.Search,
        });
      })
      .catch((err) => {
        alert("ERRORE " + err);
      });
  };

  componentDidMount() {
    this.gettingSaga();
  }

  render() {
    return (
      <Container className="px-4">
        <h4 className="ms-5  text-white">{this.props.sagaName}</h4>
        <Row>
          {this.state.saga.map((movie) => (
            <Col
              xs={12}
              sm={6}
              md={4}
              lg={3}
              xl={2}
              className="mb-2 text-center px-1"
              key={movie.imdbID}
            >
              {" "}
              <Link to={/movie-details/ + movie.imdbID}>
                <Image src={movie.Poster} fluid style={{ height: 350 }} />
              </Link>
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default EpiflixSaga;
