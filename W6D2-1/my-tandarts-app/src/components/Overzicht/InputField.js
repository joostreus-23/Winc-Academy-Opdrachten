import React from "react";

function InputField(props) {
  const style = { margin: 5, display: props.display };
  return (
    <div className="additems" style={style}>
      <input
        type="text"
        id="klantvoornaam"
        placeholder="Klant Voornaam"
      ></input>
      <input
        type="text"
        id="klantachternaam"
        placeholder="Klant Achternaam"
      ></input>
      {/* <select name="maand" id="maand">
        <option value="1">Januari</option>
        <option value="2">Februari</option>
        <option value="3">Maart</option>
        <option value="4">April</option>
        <option value="5">Mei</option>
        <option value="6">Juni</option>
        <option value="7">Juli</option>
        <option value="8">Augustus</option>
        <option value="9">September</option>
        <option value="10">Oktober</option>
        <option value="11">November</option>
        <option value="12">December</option>
      </select>
      <select name="week" id="week">
        <option value="1">Week 1</option>
        <option value="2">Week 2</option>
        <option value="3">Week 3</option>
        <option value="4">week 4</option>
      </select>
      <select name="dag" id="dag">
        <option value="1">Maandag</option>
        <option value="2">Dinsdag</option>
        <option value="3">Woendag</option>
        <option value="4">Donderdag</option>
        <option value="5">Vrijdag</option>
      </select>
      <select name="tijd" id="tijd">
        <option value="9">09:00</option>
        <option value="10">10:00</option>
        <option value="11">11:00</option>
        <option value="12">12:00</option>
        <option value="13">13:00</option>
        <option value="14">14:00</option>
        <option value="15">15:00</option>
        <option value="16">16:00</option>
      </select> */}
      <select name="tandarts" id="tandarts">
        <option value="1">Wies van der Horst</option>
        <option value="2">Jaap van de Velde</option>
        <option value="3">Johanneke van Loon</option>
        <option value="4">Mirthe van Veen</option>
      </select>
      <input
        type="submit"
        value="Add afspraak"
        onClick={() => props.addAfspraak()}
      ></input>
    </div>
  );
}

export default InputField;
