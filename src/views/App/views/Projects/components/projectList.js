import reactLogo from "@/assets/projects/reactLogo.png";
import covid from "@/assets/projects/covid.png";
import euchre from "@/assets/projects/euchre.png";
import google from "@/assets/projects/google.png";

const projectList = [
  {
    date: new Date(2022, 7),
    text: "Created this website using React JS",
    title: "naumraskind.com",
    imageUrl: reactLogo,
  },
  {
    date: new Date(2022, 6),
    text: "Wrote a web application to play Euchre, a four-player card game, with a Flask backend and a Vue JS frontend",
    title: "Euchre Webpage",
    imageUrl: euchre,
  },
  {
    date: new Date(2021, 9),
    text: "Built an R Shiny app to scrape data from CDC datasets weekly and present results in a form convenient for analysis with an easy-to-navigate web interface",
    title: "Covid 19 Data Visualizer",
    imageUrl: covid,
  },
  {
    date: new Date(2021, 9),
    text: "Created a simple clone of the google search engine that uses PageRank and tf-idf to rank search results",
    title: "Google Search Engine Clone",
    imageUrl: google,
  },
];

export default projectList;
