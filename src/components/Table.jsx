import { Component } from "react";
import { Row } from "./Row";
export class Table extends Component {
  render() {
    const { store } = this.props;
    return (
      <table>
        <thead>
          <tr>
            <td>№</td>
            <td className="tdWide">П.І.Б пацієнта</td>
            <td>Група крові</td>
            <td>Вік</td>
            <td>Палата</td>
            <td className="tdWide">Дігноз</td>
            <td className="tdWide">Операція</td>
            <td className="tdMiddle">Хірурги/Асистенти</td>
          </tr>
        </thead>
        <tbody>
          {store.patients.map((p, idx) => (
            <Row data={p} key={idx} num={idx + 1} />
          ))}
        </tbody>
      </table>
    );
  }
}
