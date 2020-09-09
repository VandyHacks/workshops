import React, {useState} from "react"

import Layout from "../components/layout"
import CardContainer from "../components/cardContainer"
import SearchComponent from "../components/search"

import cardArr from "../components/cardData.ts"


const IndexPage = ({data}) => {
  const [cardsState, setCardsState] = useState(cardArr);
  // console.log(cardsState);

  return ( 
      <Layout>
        <SearchComponent items={cardArr} handler={setCardsState}></SearchComponent>
        <CardContainer cards={cardsState} />
      </Layout>
  );
  }

export default IndexPage
