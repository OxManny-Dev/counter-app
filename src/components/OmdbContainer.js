import React, { Component } from 'react';
import Container from './Container';
import Row from './Row';
import Col from './Col';
import Card from './Card';
import SearchForm from './SearchForm';
import MovieDetail from './MovieDetail';
import API from '../utils/API';

class OmdbContainer extends Component {
  constructor(props) {
    console.log('inside of constructor');
    super(props);
    this.state = {
      result: {},
      search: '',
    };
  }
  // TODO: componentDidMount method needs to be fixed
  // componentWillMount() {
  //   console.log('inside of componentWillMount')
  // //   setStateHere
  // //   this.setState({ search: 'value to be'});
  // }
  componentDidMount() {
    console.log('inside of componentDidMount');
    this.searchMovies("The Matrix");
    // this.setState({ search: 'value to be'});
  }
  searchMovies = (query) => {
    API.search(query)
      .then((res) => {
        console.log(res);
        this.setState({ result: res.data })
      })
      .catch((err) => console.log(err));
  };
  // TODO: handleInputChange method needs to be fixed
  handleInputChange = event => {
    console.log(event.target.value)
    this.setState({ search: event.target.value });
    // this.searchMovies(event.target.value)
  };
  // TODO: handleFormSubmit method needs to call `this.searchMovies(this.state.search)`
  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.search);
    this.searchMovies(this.state.search);
    this.setState({ search: ''});
  };
  render() {
    console.log('inside of render');
    return (
      <Container>
        <Row>
          <Col size="md-8">
            <Card
              heading={this.state.result.Title || 'Search for a Movie to Begin'}
            >
              <MovieDetail
                title={this.state.result.Title}
                src={this.state.result.Poster}
                director={this.state.result.Director}
                genre={this.state.result.Genre}
                released={this.state.result.Released}
              />
            </Card>
          </Col>
          <Col size="md-4">
            <Card heading="Search">
              <SearchForm
                value={this.state.search}
                handleInputChange={this.handleInputChange}
                handleFormSubmit={this.handleFormSubmit}
              />
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default OmdbContainer;
