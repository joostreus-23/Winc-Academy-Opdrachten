import React from "react";
import UurOverzicht from "./UurOverzicht";

function DagOverzicht(props) {
  const afsprakenTeShowen = (tijd) => {
    const uurShow = props.afspraken.filter(
      (afspraak) => afspraak.tijd === tijd
    );
    return uurShow;
  };

  return (
    <div className="day">
      <UurOverzicht
        afspraken={afsprakenTeShowen(9)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(10)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(11)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(12)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(13)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(14)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(15)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />

      <UurOverzicht
        afspraken={afsprakenTeShowen(16)}
        addAfspraak={props.addAfspraak}
        geclickteAfspraak={props.geclickteAfspraak}
      />
    </div>
  );
}

export default DagOverzicht;
