import { Card, Button, Container, Row, Col } from "react-bootstrap";
import React, { Component } from "react";
import { Link } from "react-router-dom";

let Salon_1_data;
let Salon_2_data;
let Salon_3_data;
let Salon_4_data;
let Salon_5_data;
let Salons = [];

class Movies extends Component {
  constructor(props) {
    Salon_1_data = JSON.parse(localStorage.getItem("Salon 1"));
    Salon_2_data = JSON.parse(localStorage.getItem("Salon 2"));
    Salon_3_data = JSON.parse(localStorage.getItem("Salon 3"));
    Salon_4_data = JSON.parse(localStorage.getItem("Salon 4"));
    Salon_5_data = JSON.parse(localStorage.getItem("Salon 5"));

    Salons = [Salon_1_data, Salon_2_data, Salon_3_data, Salon_4_data, Salon_5_data]
    super(props);
  }

  componentDidMount() {
    Salon_1_data = JSON.parse(localStorage.getItem("Salon 1"));
    Salon_2_data = JSON.parse(localStorage.getItem("Salon 2"));
    Salon_3_data = JSON.parse(localStorage.getItem("Salon 3"));
    Salon_4_data = JSON.parse(localStorage.getItem("Salon 4"));
    Salon_5_data = JSON.parse(localStorage.getItem("Salon 5"));

    Salons = [Salon_1_data, Salon_2_data, Salon_3_data, Salon_4_data, Salon_5_data]

    this.forceUpdate();
  }

  render() {
    return (
      <div>
        <h1>Filmler</h1>

        <Container>
          <Row className="justify-content-md-center">
            {Salons.map((Salon, Saloni) => {
              if (!Salon)
                Salon = []
              return (
                <Col xs lg="">
                  <Card style={{ width: "24rem" }}>
                    <Card.Body>
                      <Card.Title>Salon {Saloni + 1}</Card.Title>
                      {Salon.sort(
                        (a, b) => a.movieDate + " " + (a.movieSeans.split('-'))[0] > b.movieDate + " " + (b.movieSeans.split('-'))[0]  ? 1 : -1).map((movie, i) => {
                        return (
                          <Row>
                        <Card.Text>
                          {movie.movieDate} {movie.movieSeans} / {movie.movieName} - {movie.movieProducer}
                        </Card.Text>    
                                              <Link to={"/Seats?Salon=" + (Saloni + 1) + "&movie=" +(movie.id)}> 
                                              <Button variant="primary">Bilet Al</Button>
                                          </Link>        
                                          </Row>           
                        )
                      })}    
                    </Card.Body>
                  </Card>
                </Col>
              )
            })}
          </Row>
        </Container>
      </div>
    );
  }
}

export default Movies;
