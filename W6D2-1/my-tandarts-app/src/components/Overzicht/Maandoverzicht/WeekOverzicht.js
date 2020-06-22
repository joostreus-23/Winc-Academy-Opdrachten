import React from "react";
import DagOverzicht from "./DagOverzicht";

function WeekOverzicht(props) {
  const afsprakenTeShowen = (dag) => {
    const weekShow = props.afspraken.filter((afspraak) => afspraak.dag === dag);
    return weekShow;
  };

  const week = props.afspraken.map((afspraak) => afspraak.week);

  return (
    <tr className="table">
      <td>{week[0]}</td>
      <td>
        <DagOverzicht
          afspraken={afsprakenTeShowen(1)}
          addAfspraak={props.addAfspraak}
          geclickteAfspraak={props.geclickteAfspraak}
        />
      </td>
      <td>
        <DagOverzicht
          afspraken={afsprakenTeShowen(2)}
          addAfspraak={props.addAfspraak}
          geclickteAfspraak={props.geclickteAfspraak}
        />
      </td>
      <td>
        <DagOverzicht
          afspraken={afsprakenTeShowen(3)}
          addAfspraak={props.addAfspraak}
          geclickteAfspraak={props.geclickteAfspraak}
        />
      </td>
      <td>
        <DagOverzicht
          afspraken={afsprakenTeShowen(4)}
          addAfspraak={props.addAfspraak}
          geclickteAfspraak={props.geclickteAfspraak}
        />
      </td>
      <td>
        <DagOverzicht
          afspraken={afsprakenTeShowen(5)}
          addAfspraak={props.addAfspraak}
          geclickteAfspraak={props.geclickteAfspraak}
        />
      </td>
    </tr>
  );
}

export default WeekOverzicht;
