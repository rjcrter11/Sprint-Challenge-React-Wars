import React from "react";
import { Card, CardTitle, Col } from "reactstrap";
import styled from "styled-components";
import MovieList from "./MovieList";
import InfoButton from "./InfoButton";

const NameHeader = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  color: #443e3e;
`;

const WarsCard = ({ person, film }) => {
  return (
    <div>
      <Col md="12" xl="10">
        <Card
          body
          className="text-left"
          style={{
            margin: "1.5rem",
            boxShadow: "0 0 20px rgba(160, 160, 160, 0.527)",
            background: "#C9C7C7"
          }}
        >
          <CardTitle>
            <NameHeader> {person.name} </NameHeader>
          </CardTitle>

          <InfoButton character={person} />
          {/* <MovieList characters={person} movie={film} /> */}
        </Card>
      </Col>
    </div>
  );
};

export default WarsCard;
