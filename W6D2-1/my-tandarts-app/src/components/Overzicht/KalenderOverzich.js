import React from "react";
import WeekOverzicht from "./Maandoverzicht/WeekOverzicht";

class KalenderOverzicht extends React.Component {
  render() {
    let gekozenJaar = this.props.gekozenJaar;
    let gekozenMaand = this.props.gekozenMaand;

    const afsprakenTeShowen = (jaar, maand, week, dag) => {
      const maandShow = this.props.afspraken.filter(
        (afspraak) =>
          afspraak.jaar === jaar &&
          afspraak.maand === maand &&
          afspraak.week === week
      );
      return maandShow;
    };
    return (
      <div className="calendarview">
        <table>
          <thead>
            <tr className="header">
              <th
                className="song-row__item"
                onClick={(event) => this.props.addAfspraak(event)}
              >
                Week
              </th>
              <th className="song-row__item">Maandag</th>
              <th className="song-row__item">Dinsdag</th>
              <th className="song-row__item">Woensdag</th>
              <th className="song-row__item">Donderdag</th>
              <th className="song-row__item">Vrijdag</th>
            </tr>
          </thead>

          <tbody>
            <WeekOverzicht
              afspraken={afsprakenTeShowen(gekozenJaar, gekozenMaand, 1)}
              addAfspraak={this.props.addAfspraak}
              geclickteAfspraak={this.props.geclickteAfspraak}
            />
          </tbody>

          <tbody>
            <WeekOverzicht
              afspraken={afsprakenTeShowen(gekozenJaar, gekozenMaand, 2)}
              addAfspraak={this.props.addAfspraak}
              geclickteAfspraak={this.props.geclickteAfspraak}
            />
          </tbody>
          <tbody>
            <WeekOverzicht
              afspraken={afsprakenTeShowen(gekozenJaar, gekozenMaand, 3)}
              addAfspraak={this.props.addAfspraak}
              geclickteAfspraak={this.props.geclickteAfspraak}
            />
          </tbody>
          <tbody>
            <WeekOverzicht
              afspraken={afsprakenTeShowen(gekozenJaar, gekozenMaand, 4)}
              addAfspraak={this.props.addAfspraak}
              geclickteAfspraak={this.props.geclickteAfspraak}
            />
          </tbody>
        </table>
      </div>
    );
  }
}

export default KalenderOverzicht;
