import React, { Fragment } from "react"
import Card from "./card"
import debounce from "lodash/debounce"

import "./search.css"
import cardArr from "./cardData";


class SearchComponent extends React.Component<{items: Array<Card>, handler: (arg0: Array<Card>) => void}
  , {query: string}> {

  debounced = debounce(this.search, 1000);

  difficultyFilter: Set<number>;
    
  constructor(props) {
      super(props);
      this.difficultyFilter = new Set();
      this.state = {query: ""};
      this.onChange = this.onChange.bind(this);
      this.handleCheckbox = this.handleCheckbox.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
      console.log(this);
      const val = event.target.value;
      // 2 sec delay for testing
      this.setState({query: val}, () => {
        this.debounced(this.state.query, this.props.items);
      })
    }
        
  search(query: string, items: Array<Card>): void {
    const queryReturn: Array<Card> = [];
    const flag = (this.difficultyFilter.size === 0);
    for (let card of items) {
      if (!flag && !this.difficultyFilter.has(card.difficulty)) {
        card.visible = false;
      }
      else if (
        card.title.search(new RegExp(query, "i")) != -1 ||
        card.description.search(new RegExp(query, "i")) != -1 ||
        card.dependency.search(new RegExp(query, "i")) != -1
      ) {
        card.visible = true;
      }
      else {
        card.visible = false;
      }
      console.log(card.description.search(new RegExp(query, "i")))
      console.log(card.title.search(new RegExp(query, "i")))
      console.log(card.visible)

      queryReturn.push(card);
    }
    console.log(queryReturn)
    
    this.props.handler(queryReturn);
  }

  handleCheckbox(event: React.ChangeEvent<HTMLInputElement>) {
    console.log(this);
    const val: number = +event.target.value;
    this.difficultyFilter.has(val) ? this.difficultyFilter.delete(val) : this.difficultyFilter.add(val);
    this.search(this.state.query, this.props.items);
  }

  render() {
      return (
        <span>
          <input id="search-box" type="text" value={this.state.query} placeholder="Search" onChange={this.onChange}></input>
          <div id="difficulty-filter">
            <fieldset style={{"display":"flex", "flexDirection":"row"}}>
              <legend>Difficulty</legend>
              <input className="search-difficulty" type="checkbox" onChange={this.handleCheckbox} value="0" name="difficulty" id="beginner"></input>
              <label htmlFor="beginner">Beginner</label>
              <input className="search-difficulty" type="checkbox" onChange={this.handleCheckbox} value="1" name="difficulty" id="intermediate"></input>
              <label htmlFor="intermediate">Intermediate</label>
              <input className="search-difficulty" type="checkbox" onChange={this.handleCheckbox} value="2" name="difficulty" id="expert"></input>
              <label htmlFor="expert">Expert</label>
            </fieldset>
          </div>
        </span>
      )
  }

}

export default SearchComponent
