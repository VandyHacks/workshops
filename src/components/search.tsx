import React from "react"
import Card from "./card"
import debounce from "lodash/debounce"

class SearchComponent extends React.Component<{items: Array<Card>, handler: (arg0: Array<Card>) => void}
  , {query: string}> {

  debounced = debounce(this.search, 2000);
    
  constructor(props) {
      super(props);
      this.state = {query: ""};
      this.onChange = this.onChange.bind(this);
  }

  onChange(event: React.ChangeEvent<HTMLInputElement>) {
      const val = event.target.value;
      // 2 sec delay for testing
      this.setState({query: val}, () => {
        this.debounced(this.state.query, this.props.items);
      })
    }
        
  search(query: string, items: Array<Card>): void {
    const queryReturn: Array<Card> = [];
    for (let card of items) {
      if (
        card.title.search(new RegExp(query, "i")) != -1 ||
        card.description.search(new RegExp(query, "i")) != -1
      ) {
        queryReturn.push(card);
      }
    }
    console.log(queryReturn, query);
    this.props.handler(queryReturn);
  }
  render() {
      return (
          <input type="text" value={this.state.query} placeholder="Search" onChange={this.onChange}></input>
      )
  }

}

export default SearchComponent
