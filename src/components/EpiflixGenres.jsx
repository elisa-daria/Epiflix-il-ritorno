import Container from "react-bootstrap/Container";
import Dropdown from "react-bootstrap/Dropdown";
import SingleGenre from "./SingleGenre";
const EpiflixGenres = () => {
  return (
    <>
      <Container fluid className="px-4 bg-black">
        <div className="d-flex justify-content-between">
          <div className="d-flex">
            <h2 className="mb-4 me-2 text-white">TV Shows</h2>
            <Dropdown className="ms-4 mt-1">
              <Dropdown.Toggle className="btn btn-secondary bg-transparent btn-sm rounded-0">
                Genres
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <SingleGenre genre="Drama" />
                <SingleGenre genre="Crime" />
                <SingleGenre genre="LGBTQ+" />
                <SingleGenre genre="Romance" />
                <SingleGenre genre="Comedy" />
              </Dropdown.Menu>
            </Dropdown>
          </div>
          <div className="d-none d-md-block text-white">
            <i className="bi bi-grid icons fs-3"></i>
            <i className="bi bi-grid-3x3 ms-3 fs-3 icons"></i>
          </div>
        </div>
      </Container>
    </>
  );
};
export default EpiflixGenres;
