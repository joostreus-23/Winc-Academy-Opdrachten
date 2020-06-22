import React from "react";
import InputField from "./Overzicht/InputField";
import Tandartsen from "./Overzicht/data/Tandartsen";
import Klanten from "./Overzicht/data/Klanten";
import Afspraken from "./Overzicht/data/Afspraken";
import KalanderOverzicht from "./Overzicht/KalenderOverzich";

class Overzicht extends React.Component {
  constructor() {
    super();
    this.state = {
      klanten: Klanten,
      tandartsen: Tandartsen,
      afspraken: Afspraken,
      displayInput: "none",
      newAfspraak: {
        key: null,
        tijd: null,
        dag: null,
        week: null,
        maand: null,
        jaar: null,
        tandart: null,
      },
    };
  }
  maakMaandPlanning = (Tandarst) => {
    let k = 1;
    let t = 9;
    let d = 1;
    let w = 1;
    let m = 3;
    for (let i = 1; i <= 180; i++) {
      const newRandomAfspraak = {
        key: k,
        tijd: t,
        dag: d,
        week: w,
        maand: m,
        jaar: 2020,
        tandarts: Tandarst,
        klantnaam: "",
      };

      this.setState((pervstate) => {
        const newList = pervstate.afspraken.concat(newRandomAfspraak);
        return {
          afspraken: newList,
        };
      });
      k++;
      t == 17 ? (t = 9) : t++;
      t == 17 && d++;
      d == 6 && w++;
      d == 6 && (d = 1);
    }
  };
  componentDidMount() {
    this.maakMaandPlanning(1);
    console.log("Mounted");
  }

  render() {
    let gekozenJaar = 2020;
    let gekozenMaand = 3;
    let gekozenWeek = 3;

    const geclickteAfspraak = (afspraak) => {
      this.setState(
        (pervstate) =>
          (pervstate.newAfspraak = {
            key: afspraak.key,
            tijd: afspraak.tijd,
            dag: afspraak.dag,
            week: afspraak.week,
            maand: afspraak.maand,
            jaar: afspraak.jaar,
            tandarts: afspraak.tandart,
            klantnaam: afspraak.klantnaam,
          })
      );
      this.setState((pervstate) => {
        const updateDisplayInput = (pervstate.displayInput = "block");
        return { displayInput: updateDisplayInput };
      });
    };

    // let gekozenKey = geclickteAfspraak();
    const addAfspraak = () => {
      // let key = this.state.key;
      // console.log(key);

      let naam = document.getElementById("klantvoornaam").value;
      let achternaam = document.getElementById("klantachternaam").value;
      // let t = parseInt(document.getElementById("tijd").value);
      // let d = parseInt(document.getElementById("dag").value);
      // let w = parseInt(document.getElementById("week").value);
      // let m = parseInt(document.getElementById("maand").value);
      let arts = document.getElementById("tandarts").value;

      const newAfspraak = {
        key: this.state.newAfspraak.key,
        tijd: this.state.newAfspraak.tijd,
        dag: this.state.newAfspraak.dag,
        week: this.state.newAfspraak.week,
        maand: this.state.newAfspraak.maand,
        jaar: this.state.newAfspraak.jaar,
        tandarts: arts,
        klantnaam: `${naam} ${achternaam}`,
      };

      this.setState((pervstate) => {
        const cleanList = pervstate.afspraken.filter(
          (afspraak) => afspraak.key != this.state.newAfspraak.key
        );
        const updatelist = cleanList.concat(newAfspraak);
        return { afspraken: updatelist };
      });
      this.setState((pervstate) => {
        const updateDisplayInput = (pervstate.displayInput = "none");
        return { displayInput: updateDisplayInput };
      });
    };

    return (
      <div className="content">
        <InputField
          addAfspraak={addAfspraak}
          display={this.state.displayInput}
          geclickteAfspraak={geclickteAfspraak}
          afspraken={this.state.afspraken}
        />
        {/* <GenreFilter />
        <RatingFilter />
        <ResetFilter /> */}
        <KalanderOverzicht
          afspraken={this.state.afspraken}
          gekozenJaar={gekozenJaar}
          gekozenMaand={gekozenMaand}
          addAfspraak={addAfspraak}
          geclickteAfspraak={geclickteAfspraak}
        />
      </div>
    );
  }
}

export default Overzicht;
