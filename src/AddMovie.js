import { Form, Col, Button, Container, InputGroup, FormControl     } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import uuid from 'react-uuid'

toast.configure()




class AddMovie extends Component {

  constructor(props) {
      super(props);

      this.onChangeMovieName = this.onChangeMovieName.bind(this);
      this.onChangeMovieType = this.onChangeMovieType.bind(this);
      this.onChangeMovieSum = this.onChangeMovieSum.bind(this);

      this.onChangeMovieDate = this.onChangeMovieDate.bind(this);
      this.onChangeMovieSalon = this.onChangeMovieSalon.bind(this);
      this.onChangeMovieProducer = this.onChangeMovieProducer.bind(this);
      this.onChangeMovieSeans = this.onChangeMovieSeans.bind(this);


      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        movieName: '',
        movieType: '',
        movieSum: '',
        movieDate: '',
        movieSalon: '',
        movieProducer: '',
        movieSeans:'',
        id: "" 
      }
  }

  onChangeMovieName(e) {
      this.setState({ movieName: e.target.value })
  }

  onChangeMovieType(e) {
      this.setState({ movieType: e.target.value })
  }

  onChangeMovieSum(e) {
      this.setState({ movieSum: e.target.value })
  }


  onChangeMovieDate(e) {
    this.setState({ movieDate: e.target.value })
}


onChangeMovieSalon(e) {
  this.setState({ movieSalon: e.target.value })
}

onChangeMovieSeans(e) {
  console.log(e.target.value)
  this.setState({ movieSeans: e.target.value })
}


onChangeMovieProducer(e) {
  this.setState({ movieProducer: e.target.value })
}


onSubmit(e) {
     
      e.preventDefault()


      if (!this.state.movieProducer) {
        toast.error('Yapımcı Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }
      if (!this.state.movieSeans) {
        toast.error('Seans Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }
      if (!this.state.movieSalon) {
        toast.error('Salon Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }
      if (!this.state.movieDate) {
        toast.error('Tarih Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }
      if (!this.state.movieType) {
        toast.error('Tür Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }      
      if (!this.state.movieName) {
        toast.error('Film İsmi Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }     
      if (!this.state.movieSum) {
        toast.error('Açıklama Boş Bırakılamaz', {position: toast.POSITION.TOP_CENTER});
        return;
      }
      let isAdmin = JSON.parse( localStorage.getItem('isAdmin'))
      if ((isAdmin == false) ) {
        toast.error('Film ekleme yetkiniz yok', {position: toast.POSITION.TOP_CENTER});
        return;
      }

      e.target.reset();

      console.log(this.state)

      this.state.id = uuid();
      let oldSalonData = JSON.parse(localStorage.getItem(this.state.movieSalon)) || [];


      for (let movie of oldSalonData) {
        if (movie.movieDate === this.state.movieDate && movie.movieSeans === this.state.movieSeans) {
          toast.error('SEANS DOLU', {position: toast.POSITION.TOP_CENTER});
          return;
        }
      }

      oldSalonData.push(this.state);
      localStorage.setItem(this.state.movieSalon, JSON.stringify(oldSalonData));

      
      toast.success('Film Eklendi', {position: toast.POSITION.TOP_CENTER});

  }

  componentDidMount() {

  }
  componentWillUpdate(nextProps, nextState) {
      
  }

  render() {

      return (


<div>
      <h1>Film Ekle</h1>

      <Container>

      <Form onSubmit={this.onSubmit}>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridName">
      <Form.Label>Film İsmi</Form.Label>
      <Form.Control value={this.state.movieName} onChange={this.onChangeMovieName} />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridMovieType">
      <Form.Label>Film Türü</Form.Label>
      <Form.Control as="select" defaultValue="Seçiniz..." value={this.state.movieType} onChange={this.onChangeMovieType}>
        <option>Seçiniz...</option>
        <option>Aksiyon</option>
        <option>Romantik</option>
        <option>Korku</option>
        <option>Komedi</option>
      </Form.Control>
    </Form.Group>
  </Form.Row>

  <InputGroup>
    <InputGroup.Prepend>
      <InputGroup.Text>Açıklama</InputGroup.Text>
    </InputGroup.Prepend>
    <FormControl as="textarea" aria-label="With textarea" value={this.state.movieSum} onChange={this.onChangeMovieSum}/>
  </InputGroup>


  <Form.Row>
    <Form.Group as={Col} controlId="formGridDate">
      <Form.Label>Tarih</Form.Label>
      <Form.Control type="date" value={this.state.movieDate} onChange={this.onChangeMovieDate}/>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridSalloon">
      <Form.Label>Salon</Form.Label>
      <Form.Control as="select" defaultValue="Seçiniz..." value={this.state.movieSalon} onChange={this.onChangeMovieSalon}>
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
      <Form.Control as="select" defaultValue="Seçiniz..." value={this.state.movieSeans} onChange={this.onChangeMovieSeans}>
        <option>Seçiniz...</option>
        <option>10:00-12:00</option>
        <option>12:00-14:00</option>
        <option>14:00-16:00</option>
        <option>16:00-18:00</option>
        <option>18:00-20:00</option>
      </Form.Control>
    </Form.Group>

    <Form.Group as={Col} controlId="formGridProducer">
      <Form.Label>Yapımcı</Form.Label>
      <Form.Control value={this.state.movieProducer} onChange={this.onChangeMovieProducer} />
    </Form.Group>
  </Form.Row>

  <Button variant="primary" type="submit">
    Onayla
  </Button>
</Form>
</Container>

    </div>
      )
  }
}

export default AddMovie;