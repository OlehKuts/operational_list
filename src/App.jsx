import "./styles.css";
import { emptyPatient } from "./formData";
import { defineTomorrowDate } from "./utilities/dateDefinition";

import React, { useState } from "react";
import { Table } from "./components/Table";
import { DateForm } from "./components/DateForm";
import { Form } from "./components/Form";
import { Controls } from "./components/Controls";

export const App = () => {
  const [showForms, setShowForms] = useState(true);
  const [store, setStore] = useState({
    patients: [],
    date: defineTomorrowDate(),
  });

  const addEmptyLine = () => {
    setStore({ ...store, patients: [...store.patients, emptyPatient] });
  };
  const clearList = () => {
    setStore({ ...store, patients: [] });
  };
  const sortPatients = () => {
    const newPatients = [...store.patients].sort(function (a, b) {
      return Number(a.age) - Number(b.age);
    });
    setStore({ ...store, patients: newPatients });
  };
  const removePatient = (index) => {
    const newPatients = [...store.patients].filter(
      (p, idx) => idx !== index - 1
    );
    setStore({ ...store, patients: newPatients });
  };
  const addPatient = (
    name,
    diagnosis,
    operation,
    bloodGroup,
    rezusFactor,
    age,
    room,
    surgeon,
    assistant,
    time
  ) => {
    const newPatient = {
      name: name,
      bloodGroup: bloodGroup,
      rezusFactor: rezusFactor,
      age: age,
      room: room,
      diagnosis: diagnosis,
      operation: operation,
      surgeon: surgeon,
      assistant: assistant,
      time,
    };
    setStore({ ...store, patients: [...store.patients, newPatient] });
  };
  const changeDate = (newDate) => {
    setStore({ ...store, date: newDate });
  };
  const readyToPrint = () => {
    if (!store.patients.length) {
      alert("Додайте пацієнтів або пусті поля для друку списку!");
      return;
    }
    sortPatients();
    setShowForms(false);
  };
  return (
    <div className="main">
      {showForms && (
        <>
          <DateForm store={store} changeDate={changeDate} />
          <hr />
          <Form store={store} addPatient={addPatient} />
        </>
      )}
      <div className="header">СПИСОК</div>
      <div className="header">
        операцій отоларингологічного відділення на {store.date} року
      </div>
      {showForms && (
        <>
          <Controls
            store={store}
            clearList={clearList}
            removePatient={removePatient}
            addEmptyLine={addEmptyLine}
          />
        </>
      )}
      <Table store={store} />
      {!showForms && (
        <>
          <div className="flexBetween" id="footer">
            <div>Заступник головного лікаря з хірургічної частини</div>
            <div>В.В.Білинський</div>
          </div>
          <div className="flexBetween">
            <div>Завідувач отоларингологічного відділення</div>
            <div>В.Г.Корицький</div>
          </div>
        </>
      )}
      {showForms && (
        <div style={{ marginTop: "10px" }}>
          <button onClick={readyToPrint}>Готово до друку</button>
        </div>
      )}
    </div>
  );
};
