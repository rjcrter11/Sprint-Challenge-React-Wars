import React, { useState } from "react";
import { Card, Button, CardTitle, CardText, Col, Collapse } from "reactstrap";
import styled from "styled-components";
// import MovieList from "./MovieList";

const NameHeader = styled.h3`
  font-weight: bold;
  font-size: 2rem;
  color: #443e3e;
`;

const WarsCard = ({ person }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

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

          <Button
            // color="primary"
            onClick={toggle}
            style={{
              marginBottom: "1rem",
              fontWeight: "bold",
              background: "#443e3e",
              width: "50%",
              marginTop: "1rem"
            }}
          >
            INFO
          </Button>
          <Collapse isOpen={isOpen}>
            <div>
              <CardText style={{ fontSize: "1.5rem" }}>
                Height: {person.height} cm
              </CardText>
            </div>
            <div>
              <CardText style={{ fontSize: "1.5rem" }}>
                Mass: {person.mass} kg
              </CardText>
            </div>
            <div>
              <CardText style={{ fontSize: "1.5rem" }}>
                Birth Year: {person.birth_year}{" "}
              </CardText>
            </div>

            <div>
              <CardText style={{ fontSize: "1.5rem" }}>
                Eye Color: {person.eye_color}{" "}
              </CardText>
            </div>

            {/* <MovieList movie={film} character={person} /> */}
          </Collapse>
        </Card>
      </Col>
    </div>
  );
};

export default WarsCard;
