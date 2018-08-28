import { Component, h } from "preact";

export default class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <button id="changeColor" onClick={this.handleClick} />
      </div>
    );
  }
}
