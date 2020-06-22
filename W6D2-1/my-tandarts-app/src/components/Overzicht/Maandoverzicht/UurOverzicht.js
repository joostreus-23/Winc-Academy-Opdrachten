import React from "react";
import Afspraak from "./Afspraak";

class Uuroverzicht extends React.Component {
  render() {
    const showAfspraken = this.props.afspraken.map((afspraak) => (
      <Afspraak
        geclickteAfspraak={this.props.geclickteAfspraak}
        key={afspraak.key}
        afspraak={afspraak}
        tijd={afspraak.tijd}
        klant={afspraak.klantnaam}
        tandarts={afspraak.tandarts}
        addAfspraak={this.props.addAfspraak}
      />
    ));
    return <span>{showAfspraken}</span>;
  }
}
export default Uuroverzicht;
