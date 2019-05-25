import React, {Component} from 'react';
import './App.css';

const people = [
    {
      id: 1,
      first: "Sarah",
      last: "Johnathan",
      age: 25
    },
    {
      id: 2,
      first: "Caldwell",
      last: "Thompson",
      age: 32
    },
    {
      id: 3,
      first: "Hart",
      last: "Maynard",
      age: 12
    },
    {
      id: 4,
      first: "Demetrius",
      last: "McGregor",
      age: 55
    }
]

function searchingFor(term) {
  return function(x) {
    return x.first.toLowerCase().includes(term.toLowerCase()) || !term;
  }
}

class App extends Component {
  constructor(props) {
    super(props) ;
      this.state={
        people: people,
        term: ''
      }
      this.searchHandler=this.searchHandler.bind(this);
  }

  searchHandler(event) {
    this.setState({term: event.target.value})
  }

  render() {
    const {term, people}=this.state;
    return (
      <div className="App">
        <form>
          <input type="text" onChange={this.searchHandler} value={term}/>
        </form>
      {
        people.filter(searchingFor(term)).map(person=>
            <div key={person.id}>
              <h1>{person.first}</h1>
              <h1>{person.last}</h1>
              <h3>{person.age}</h3>
            </div>
        )
      }
      </div>
    );
  }
}

export default App;
