import React from "react"

import Layout from "../components/layout"
import CardContainer from "../components/cardContainer"
import SearchComponent from "../components/search"


const Card1 = {
  title: 'Angular With Firebase',
  imageURL: 'https://media.trytn.us/library/2019/02/webpack.jpg',
  description: "This is an introduction to the Angular web framework and using Firebase alongside it to handle authentication and storage. Learn about the basic building blocks of Angular and how to get a web app up and running really quickly.",
  time: '10:30pm - 11:30pm on Nov 1 in ESB 044',
  level: 'Beginner',
  link1: 'link1',
  link2: 'link2',
  left: null,
};

const Card2 = {
  title: 'Open-saurus Rex: How to Contribute to Open Source',
  imageURL: 'https://media.trytn.us/library/2019/02/webpack.jpg',
  description: 'Learn about Open Source through the Chrome Dino Game!',
  time: '7:00pm - 9:00pm on Mar 12 at Twitch',
  level: 'Beginner',
  link1: 'link1',
  link2: 'link2',
  left: null,
};

const Card3 = {
  title: 'Making Your First 3D Video Game with Unity',
  imageURL: 'https://media.trytn.us/library/2019/02/webpack.jpg',
  description: 'This Unity workshop for absolute beginners will teach the basics of 3D objects, movement, and interaction. We will dip into minimal C# scripting but no coding experience is necessary. You will walk out with a playable minigame and a foundation to be able to learn and understand more about Unity!',
  time: '10:30pm - 11:30pm on Nov 1 in ESB 048 ',
  level: 'Intermediate',
  link1: 'link1',
  link2: 'link2',
  left: null,
};

const Card4 = {
  title: 'Introduction to APIs',
  imageURL: 'https://media.trytn.us/library/2019/02/webpack.jpg',
  description: 'This workshop will walk you through how to use and create an API. In the first half, we will start the workshop by exploring the basics of Postman and how to use it to make GET and POST requests on an API. In the latter half, we will be creating our own API with several routes and middleware using ExpressJS.',
  time: '10:30pm - 11:30pm on Nov 1 in ESB 048 ',
  level: 'Beginner',
  link1: 'link1',
  link2: 'link2',
  left: null,
};

const Cards = [Card1, Card2, Card3];

const IndexPage = () => (
  <Layout>  
    <SearchComponent items={Cards}></SearchComponent>
    <CardContainer cards={Cards} />
  </Layout>
)

export default IndexPage
