import { Component } from "react";
import "./App.scss";
import OpenFile from "./components/OpenFile";
import Player from "./components/Player";

export default class App extends Component {
  state = {
    sheet: { notes: [] },
  };

  onChangeFile(sheet) {
    this.setState({ sheet: sheet });
  }

  render() {
    return (
      <div className="App container">
        <main className="card mb-3">
          <div className="card-body px-2">
            <OpenFile onChangeFile={this.onChangeFile.bind(this)} />
            <div className="container">
              <hr />
            </div>
            <Player sheet={this.state.sheet} />
          </div>
        </main>
      </div>
    );
  }
}
