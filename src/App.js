import React, { Component } from "react";
import "./App.css";
import { CardList } from "./components/card-list/card-list";
import { Search } from "./components/search/search.components";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: "",
    };
  }

  componentWillMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  handleChange = (e) => {
    this.setState({
      search: e.target.value,
    });
  };
  render() {
    const { monsters, search } = this.state;
    const filterMonster = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(search.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster Rolodox</h1>
        <Search
          placeholder="Search..."
          handleChange={this.handleChange}
        ></Search>
        <CardList monsters={filterMonster}></CardList>
      </div>
    );
  }
}

export default App;
