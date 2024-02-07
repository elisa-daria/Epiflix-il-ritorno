import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const MovieDetails = () => {
  const params = useParams();

  const myURL = "https://www.omdbapi.com/?apikey=9c621114&i=";
  const [MovieDetail, setMovieDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const gettingMovie = () => {
    setIsLoading(true);
    fetch(myURL + params.movieId)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(response.status);
        }
      })
      .then((movie) => {
        console.log(movie);
        setMovieDetail(movie);
        setIsLoading(false);
      })
      .catch((err) => {
        alert("ERRORE " + err);
        setIsLoading(false);
      });
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => gettingMovie(), [params.movieId]);
  return (
    <Container>
      <Row className="justify-content-center align-items-center">
        {isLoading && <Loading />}
        <Col xs={8} className="text-center text-white">
          {MovieDetail && (
            <>
              <h1>{MovieDetail.Title}</h1>
              <Image
                fluid
                thumbnail
                src={MovieDetail.Poster}
                alt={MovieDetail.Title + "-cover"}
              />
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};
export default MovieDetails;
