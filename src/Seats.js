import React, { Component } from "react";
import { useLocation } from "react-router-dom";
import SeatPicker from "react-seat-picker";
import { Card, Button, Container, Row, Col } from "react-bootstrap";
import { toast } from "react-toastify";

toast.configure();

const calcSeats = () => {};

export default class Seats extends Component {
  submitSeatsFinal() {
    if (!this.state.ad) {
      toast.error("Ad Boş Bırakılamaz", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!this.state.soyad) {
      toast.error("Soyad Boş Bırakılamaz", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!this.state.mail) {
      toast.error("Mail Boş Bırakılamaz", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!this.state.kartNo) {
      toast.error("Kart No Boş Bırakılamaz", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }
    if (!this.reserveOnSubmit.length) {
      toast.error("Lütfen Koltuk Seçiniz", {
        position: toast.POSITION.TOP_CENTER,
      });
      return;
    }

    for (let rows of this.state.rows) {
      for (let seat of rows) {
        for (let id of this.reserveOnSubmit) {
          if (seat.id === id) {
            seat.isReserved = true;
          }
        }
      }
    }

    let Salon = JSON.parse(
      localStorage.getItem("Salon " + this.state.current_Salon)
    );

    let temp = Salon.find((m) => m.id === this.state.movieId);

    if (temp && temp.seats) {
      temp.seats = [...temp.seats, ...this.reserveOnSubmit];
    } else {
      temp.seats = this.reserveOnSubmit;
    }

    Salon.splice(Salon.indexOf(temp), 1);

    let existingReserves = temp.reserves || {};

    const obj = {};
    let nameMerged = this.state.ad + " " + this.state.soyad;
    for (let seat of this.reserveOnSubmit) {
      if (seat) {
        obj[seat] = nameMerged;
      }
    }

    let merged = { ...existingReserves, ...obj };

    existingReserves = merged;

    temp.reserves = existingReserves;

    Salon.push(temp);

    localStorage.setItem(
      "Salon " + this.state.current_Salon,
      JSON.stringify(Salon)
    );

    this.setState({ updatedKey: Math.random() });

    toast.success("SATIN ALINDI", { position: toast.POSITION.TOP_CENTER });
  }

  componentDidMount() {
    let Salon = JSON.parse(
      localStorage.getItem("Salon " + this.state.current_Salon)
    );

    let temp = Salon.find((m) => m.id === this.state.movieId);

    if (temp && temp.seats) {
      for (let rows of this.state.rows) {
        for (let seat of rows) {
          for (let id of temp.seats) {
            if (seat.id === id) {
              seat.isReserved = true;
            }
          }
        }
      }
    }

    this.setState({ updatedKey: Math.random() });
  }

  state = {
    current_Salon: 0,
    loading: false,
    num: 0,
    rows: [
      [
        { id: 1, number: 1, tooltip: "Bilet Al" },
        { id: 2, number: 2, tooltip: "Bilet Al" },
        { id: 3, number: 3, tooltip: "Bilet Al" },
        { id: 4, number: 4, tooltip: "Bilet Al" },
        { id: 5, number: 5, tooltip: "Bilet Al" },
        { id: 6, number: 6, tooltip: "Bilet Al" },
        { id: 7, number: 7, tooltip: "Bilet Al" },
        { id: 8, number: 8, tooltip: "Bilet Al" },
        { id: 9, number: 9, tooltip: "Bilet Al" },
        { id: 10, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 11, number: 1, tooltip: "Bilet Al" },
        { id: 12, number: 2, tooltip: "Bilet Al" },
        { id: 13, number: 3, tooltip: "Bilet Al" },
        { id: 14, number: 4, tooltip: "Bilet Al" },
        { id: 15, number: 5, tooltip: "Bilet Al" },
        { id: 16, number: 6, tooltip: "Bilet Al" },
        { id: 17, number: 7, tooltip: "Bilet Al" },
        { id: 18, number: 8, tooltip: "Bilet Al" },
        { id: 19, number: 9, tooltip: "Bilet Al" },
        { id: 20, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 21, number: 1, tooltip: "Bilet Al" },
        { id: 22, number: 2, tooltip: "Bilet Al" },
        { id: 23, number: 3, tooltip: "Bilet Al" },
        { id: 24, number: 4, tooltip: "Bilet Al" },
        { id: 25, number: 5, tooltip: "Bilet Al" },
        { id: 26, number: 6, tooltip: "Bilet Al" },
        { id: 27, number: 7, tooltip: "Bilet Al" },
        { id: 28, number: 8, tooltip: "Bilet Al" },
        { id: 29, number: 9, tooltip: "Bilet Al" },
        { id: 30, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 31, number: 1, tooltip: "Bilet Al" },
        { id: 32, number: 2, tooltip: "Bilet Al" },
        { id: 33, number: 3, tooltip: "Bilet Al" },
        { id: 34, number: 4, tooltip: "Bilet Al" },
        { id: 35, number: 5, tooltip: "Bilet Al" },
        { id: 36, number: 6, tooltip: "Bilet Al" },
        { id: 37, number: 7, tooltip: "Bilet Al" },
        { id: 38, number: 8, tooltip: "Bilet Al" },
        { id: 39, number: 9, tooltip: "Bilet Al" },
        { id: 40, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 41, number: 1, tooltip: "Bilet Al" },
        { id: 42, number: 2, tooltip: "Bilet Al" },
        { id: 43, number: 3, tooltip: "Bilet Al" },
        { id: 44, number: 4, tooltip: "Bilet Al" },
        { id: 45, number: 5, tooltip: "Bilet Al" },
        { id: 46, number: 6, tooltip: "Bilet Al" },
        { id: 47, number: 7, tooltip: "Bilet Al" },
        { id: 48, number: 8, tooltip: "Bilet Al" },
        { id: 49, number: 9, tooltip: "Bilet Al" },
        { id: 50, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 51, number: 1, tooltip: "Bilet Al" },
        { id: 52, number: 2, tooltip: "Bilet Al" },
        { id: 53, number: 3, tooltip: "Bilet Al" },
        { id: 54, number: 4, tooltip: "Bilet Al" },
        { id: 55, number: 5, tooltip: "Bilet Al" },
        { id: 56, number: 6, tooltip: "Bilet Al" },
        { id: 57, number: 7, tooltip: "Bilet Al" },
        { id: 58, number: 8, tooltip: "Bilet Al" },
        { id: 59, number: 9, tooltip: "Bilet Al" },
        { id: 60, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 61, number: 1, tooltip: "Bilet Al" },
        { id: 62, number: 2, tooltip: "Bilet Al" },
        { id: 63, number: 3, tooltip: "Bilet Al" },
        { id: 64, number: 4, tooltip: "Bilet Al" },
        { id: 65, number: 5, tooltip: "Bilet Al" },
        { id: 66, number: 6, tooltip: "Bilet Al" },
        { id: 67, number: 7, tooltip: "Bilet Al" },
        { id: 68, number: 8, tooltip: "Bilet Al" },
        { id: 69, number: 9, tooltip: "Bilet Al" },
        { id: 70, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 71, number: 1, tooltip: "Bilet Al" },
        { id: 72, number: 2, tooltip: "Bilet Al" },
        { id: 73, number: 3, tooltip: "Bilet Al" },
        { id: 74, number: 4, tooltip: "Bilet Al" },
        { id: 75, number: 5, tooltip: "Bilet Al" },
        { id: 76, number: 6, tooltip: "Bilet Al" },
        { id: 77, number: 7, tooltip: "Bilet Al" },
        { id: 78, number: 8, tooltip: "Bilet Al" },
        { id: 79, number: 9, tooltip: "Bilet Al" },
        { id: 80, number: 10, tooltip: "Bilet Al" },
      ],
      [
        { id: 81, number: 1, tooltip: "Bilet Al" },
        { id: 82, number: 2, tooltip: "Bilet Al" },
        { id: 83, number: 3, tooltip: "Bilet Al" },
        { id: 84, number: 4, tooltip: "Bilet Al" },
        { id: 85, number: 5, tooltip: "Bilet Al" },
        { id: 86, number: 6, tooltip: "Bilet Al" },
        { id: 87, number: 7, tooltip: "Bilet Al" },
        { id: 88, number: 8, tooltip: "Bilet Al" },
        { id: 89, number: 9, tooltip: "Bilet Al" },
        { id: 90, number: 10, tooltip: "Bilet Al" },
      ],
    ],
  };

  constructor(props) {
    super(props);

    this.onChangeAd = this.onChangeAd.bind(this);
    this.onChangeSoyad = this.onChangeSoyad.bind(this);
    this.onChangeKartNo = this.onChangeKartNo.bind(this);
    this.onChangeMail = this.onChangeMail.bind(this);

    let Salon_num = new URLSearchParams(window.location.search).get("Salon");
    let movieId = new URLSearchParams(window.location.search).get("movie");

    this.state.ad = "";

    this.state.movieId = movieId;
    this.state.current_Salon = Salon_num;
    this.reserveOnSubmit = [];

    let isAdmin = localStorage.getItem("isAdmin") || false;

    let Salon = JSON.parse(
      localStorage.getItem("Salon " + this.state.current_Salon)
    );

    let temp = Salon.find((m) => m.id === this.state.movieId);

    if (isAdmin) {
      for (let row of this.state.rows) {
        for (let arr of row) {
          if (temp.reserves && temp.reserves[arr.id]) {
            arr.tooltip = temp.reserves[arr.id];
          }
        }
      }
    }
  }

  addSeatCallbackContinousCase = (
    { row, number, id },
    addCb,
    params,
    removeCb
  ) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        if (removeCb) {
          removeCb(params.row, params.number);
        }

        this.reserveOnSubmit.push(id);

        addCb(row, number, id, null);

        this.setState({ loading: false });
      }
    );
  };

  removeSeatCallback = ({ row, number, id }, removeCb) => {
    this.setState(
      {
        loading: true,
      },
      async () => {
        for (let elem of this.reserveOnSubmit) {
          if (elem === id) {
            this.reserveOnSubmit.splice(this.reserveOnSubmit.indexOf(elem), 1);
          }
        }

        removeCb(row, number, null);
        this.setState({ loading: false });
      }
    );
  };

  onChangeKartNo(e) {
    this.setState({ kartNo: e.target.value });
  }

  onChangeMail(e) {
    this.setState({ mail: e.target.value });
  }

  onChangeAd(e) {
    this.setState({ ad: e.target.value });
  }

  onChangeSoyad(e) {
    this.setState({ soyad: e.target.value });
  }

  render() {
    const { loading, rows } = this.state;

    return (
      <div>
        {this.state.current_Salon}
        <h1>Koltuk Seçimi</h1>
        <div
          style={{
            marginTop: "100px",
            justifyContent: "center",
            textAlign: "center",
            alignContent: "center",
          }}
        >
          <Container fluid>
            <Row>
              <SeatPicker
                key={this.state.updatedKey}
                addSeatCallback={this.addSeatCallbackContinousCase}
                removeSeatCallback={this.removeSeatCallback}
                rows={rows}
                maxReservableSeats={10}
                alpha
                visible
                selectedByDefault
                loading={loading}
                tooltipProps={{ multiline: true }}
                continuous
                selectedSeats={rows}
              />
            </Row>

            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <label>
                Ad:
                <input type="text" name="ad" onChange={this.onChangeAd} />
              </label>
            </Row>

            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <label>
                Soyad:
                <input type="text" name="soyad" onChange={this.onChangeSoyad} />
              </label>
            </Row>

            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <label>
                Eposta:
                <input type="text" name="mail" onChange={this.onChangeMail} />
              </label>
            </Row>

            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <label>
                Kredi Karti No:
                <input
                  type="text"
                  name="kartNo"
                  onChange={this.onChangeKartNo}
                />
              </label>
            </Row>

            <Row style={{ justifyContent: "center", marginTop: "30px" }}>
              <Button variant="primary" onClick={() => this.submitSeatsFinal()}>
                Onayla
              </Button>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}
