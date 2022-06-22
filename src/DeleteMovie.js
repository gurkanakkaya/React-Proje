import {
  Form,
  Col,
  Button,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Component } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

class DeleteMovie extends Component {
  userData;

  constructor(props) {
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeMovieSalon = this.onChangeMovieSalon.bind(this);
    this.onChangeMovieSeans = this.onChangeMovieSeans.bind(this);

    this.state = {
      movieSalon: "",
      movieSeans: "",
    };
  }

  onChangeMovieSalon(e) {
    this.setState({ movieSalon: e.target.value });
  }

  onChangeMovieSeans(e) {
    this.setState({ movieSeans: e.target.value });
  }

  onSubmit(e) {

    
    e.preventDefault();

    let isAdmin = JSON.parse( localStorage.getItem('isAdmin'))
    if ((isAdmin == false) ) {
      toast.error('Film ekleme yetkiniz yok', {position: toast.POSITION.TOP_CENTER});
      return;
    }

    let SalonData = JSON.parse(localStorage.getItem(this.state.movieSalon));

    SalonData = SalonData.filter(
      (movie) => movie.movieSeans !== this.state.movieSeans
    );

    localStorage.setItem(this.state.movieSalon, JSON.stringify(SalonData));

    toast.error("Film Kaldırıldı", { position: toast.POSITION.TOP_CENTER });
  }

  render() {
    return (
      <div>
        <h1>Film Kaldır</h1>

        <Container>
          <Form onSubmit={this.onSubmit}>
            <Form.Row>
              <Form.Group as={Col} controlId="formGridSalloon">
                <Form.Label>Salon</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Seçiniz..."
                  value={this.state.movieSalon}
                  onChange={this.onChangeMovieSalon}
                >
                  <option>Seçiniz...</option>
                  <option>Salon 1</option>
                  <option>Salon 2</option>
                  <option>Salon 3</option>
                  <option>Salon 4</option>
                  <option>Salon 5</option>
                </Form.Control>
              </Form.Group>

              <Form.Group as={Col} controlId="formGridSeans">
                <Form.Label>Seans</Form.Label>
                <Form.Control
                  as="select"
                  defaultValue="Seçiniz..."
                  value={this.state.movieSeans}
                  onChange={this.onChangeMovieSeans}
                >
                  <option>Seçiniz...</option>
                  <option>10:00-12:00</option>
                  <option>12:00-14:00</option>
                  <option>14:00-16:00</option>
                  <option>16:00-18:00</option>
                  <option>18:00-20:00</option>
                </Form.Control>
              </Form.Group>
            </Form.Row>

            <Button variant="primary" type="submit">
              Onayla
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default DeleteMovie;
