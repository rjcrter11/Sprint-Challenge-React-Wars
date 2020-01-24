import React, { useState } from "react";
import { Button, CardText, Collapse } from "reactstrap";
const InfoButton = ({ character }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
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
            Height: {character.height} cm
          </CardText>
        </div>
        <div>
          <CardText style={{ fontSize: "1.5rem" }}>
            Mass: {character.mass} kg
          </CardText>
        </div>
        <div>
          <CardText style={{ fontSize: "1.5rem" }}>
            Birth Year: {character.birth_year}{" "}
          </CardText>
        </div>

        <div>
          <CardText style={{ fontSize: "1.5rem" }}>
            Eye Color: {character.eye_color}{" "}
          </CardText>
        </div>

        {/* <MovieList movie={film} character={character} /> */}
      </Collapse>
    </div>
  );
};

export default InfoButton;
