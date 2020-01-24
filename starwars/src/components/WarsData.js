import React, { useState, useEffect } from "react";
import axios from "axios";
import WarsCard from "./WarsCard";
import { Row } from "reactstrap";

const WarsData = () => {
  const [people, setPeople] = useState([]);
  const [films, setFilms] = useState([]);

  useEffect(
    () => {
      axios
        .get("https://swapi.co/api/people")
        .then((response) => {
          // console.log(response.data.results);
          setPeople(response.data.results);

          return axios.get(`https://swapi.co/api/films${films}`);
        })
        .then((response) => {
          console.log(response.data.results);
          setFilms(response.data.results);
        })
        .catch((error) => {
          console.log("Data not fetched", error);
        });
    },
    [],
    [films]
  );

  return (
    <Row xs="1" md="2" xl="3">
      {people.map((person) => {
        return <WarsCard person={person} film={films} key={person.url} />;
      })}
    </Row>
  );
};

export default WarsData;
