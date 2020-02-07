import React from "react";
import Counter from "./components/Counter";
import Square from "./components/Square";
import Segitiga from "./components/Segitiga";
import Lingkaran from "./components/Lingkaran";
// import JajarGenjang from "./components/JajarGenjang";
import SquareRedux from "./components/SquareRedux";
import SegitigaRedux from "./components/SegitigaRedux";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Github from "./components/Github";
import Mock from "./components/Mock";
import FetchOwnApi from "./components/FetchOwnApi";
import Users from "./components/Users";

function App() {
  return (
    <div>
      <h1 style={{textAlign: "center", marginTop: "20px"}} >Count with Redux</h1>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center"
        }}
      >
        <Card border="primary" style={{ width: "300px", margin: "10px" }}>
          <Card.Body>
            <Counter />
          </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: "300px", margin: "10px" }}>
          <Card.Body>
            <Square />
          </Card.Body>
        </Card>
        <Card border="success" style={{ width: "300px", margin: "10px" }}>
          <Card.Body>
            <Segitiga />
          </Card.Body>
        </Card>
        <br />
        <Card border="danger" style={{ width: "300px", margin: "10px" }}>
          <Card.Body>
            <Lingkaran />
          </Card.Body>
        </Card>
        <Card border="warning" style={{ width: "300px", margin: "10px" }}>
          <Card.Body>
            <SquareRedux />
          </Card.Body>
        </Card>
        <Card border="info" style={{ width: "300px", margin: "10px" }}>
          <Card.Body>
            <SegitigaRedux />
          </Card.Body>
        </Card>
        <Github />
        <Mock />
      </Container>
      <FetchOwnApi/>
      <Users/>
    </div>
  );
}

export default App;
