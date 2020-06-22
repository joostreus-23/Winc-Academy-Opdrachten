import React from "react";
import Popup from "./Popup";
import Button from "react-bootstrap/Button";

function Afspraak(props) {
  let dateFree;
  props.klant == "" ? (dateFree = true) : (dateFree = false);
  const styles = {};
  dateFree
    ? (styles.backgroundColor = "green")
    : (styles.backgroundColor = "red");

  return (
    <div
      className="appointment"
      style={styles}
      onClick={() => props.geclickteAfspraak(props.afspraak)}
    >
      <span className="time">{props.tijd}:00</span>
      <span className="patient"> {props.klant}</span>
    </div>
  );
}

export default Afspraak;
