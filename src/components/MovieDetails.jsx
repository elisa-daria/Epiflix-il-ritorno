import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useState } from "react";

const MovieDetails = () => {
  const addressBar = new URLSearchParams(window.location.search);
  const movieID = addressBar.get("movieId");
  const myURL = "https://www.omdbapi.com/?apikey=9c621114&i=";
  const [movieDetails, setMovieDetails] = useState(null);

  const gettingMovie = () => {
    fetch(myURL + movieID)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((movie) => {
        console.log(movie);
        setMovieDetails({
          movie,
        });
      })
      .catch((err) => {
        alert("ERRORE " + err);
      });
  };

  return (
    <Container>
      <Row className="justify-content-center align-items center h-100">
        <Col xs={8} className="text-center text-white">
          {/* <h1>{movieDetails.name}</h1> */}
          {/* <Image fluid thumbnail src={movieDetails.Poster}></Image> */}
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
