import { Component } from "react";
export class DateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: this.props.store.date,
    };
    this.dateChange = this.dateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  dateChange(event) {
    this.setState({ date: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.changeDate(this.state.date);
  }
  render() {
    return (
      <div className="dateForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Дата
            <input
              type="text"
              value={this.state.date}
              onChange={this.dateChange}
            />
          </label>
          <input className="submit" type="submit" value="Змінити" />
        </form>
      </div>
    );
  }
}
