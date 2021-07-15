import { Component } from "react";

export default class LoadFile extends Component {
  state = {
    mode: "file",
    example: null,
    examples: ["Loading ..."],
    file: null,
  };

  async loadExample() {
    const example = this.state.example;
    await fetch("./examples/" + example)
      .then((response) => response.blob())
      .then((data) => {
        this.setState({ file: data });
        this.loadFile();
      });
  }

  async loadExamples() {
    await fetch("./examples/index.json")
      .then((response) => response.json())
      .then((data) => {
        data = data.filter(s => !s.endsWith(".json"));
        this.setState({ example: data[0], examples: data });
      });
  }

  loadFile() {
    const reader = new FileReader();
    reader.onloadend = async (e) => {
      const text = e.target.result;
      try {
        const sheet = this.parseSheet(text);
        this.props.onChangeFile(sheet);
        console.log("Loaded sheet:", sheet);
        if (this.fileInput.type === "file") this.fileInput.value = "";
        this.setState({ file: null });
      } catch (err) {
        console.error(err);
      }
    };
    reader.readAsText(this.state.file, "utf-8");
  }

  onLoadFile() {
    if (this.state.mode === "file") {
      this.loadFile();
    } else if (this.state.mode === "example") {
      this.loadExample();
    }
  }

  onModeChange(e) {
    this.setMode(e.target.value);
  }

  setMode(mode) {
    if (mode === "example" && !this.example) {
      this.loadExamples();
    }
    this.setState({ mode: mode });
  }

  parseSheet(text) {
    const lines = text.split("\n");
    const sheet = { notes: [] };
    for (let line of lines) {
      line = line.trim();
      if (line === "" || line.startsWith("#")) {
        continue;
      }
      if (!sheet.bpm) {
        // eslint-disable-next-line
        const [bpm, offset, ...other] = line.split(/\s+/);
        sheet.bpm = parseFloat(bpm);
        sheet.offset = parseFloat(offset);
        continue;
      }
      const [first, ...more] = line.split(/\s*;\s*/);
      const [pitch, octave, tempoM] = first.split(/\s+/);
      const level = parseInt(pitch) + parseInt(octave) * 12 + 12;
      const aux = more.map((s) => {
        const [pitch, octave, tempoA, off] = s.split(/\s+/);
        const level = parseInt(pitch) + parseInt(octave) * 12 + 12;
        const offset = off ? parseFloat(off) : undefined;
        return { level: level, tempo: parseFloat(tempoA || tempoM), offset: offset };
      });
      sheet.notes.push({ level: level, tempo: parseFloat(tempoM), aux: aux });
    }
    sheet.length = sheet.notes.reduce((sum, note) => sum + note.tempo, 0);
    console.log(sheet.length);
    return sheet;
  }

  render() {
    let inputElement = null,
      loadIcon = null,
      loadEnabled = true;
    if (this.state.mode === "file") {
      loadIcon = "folder-open";
      inputElement = (
        <input
          ref={(ref) => (this.fileInput = ref)}
          type="file"
          className="form-control"
          name="file"
          onChange={(e) => this.setState({ file: e.target.files[0] })}
        />
      );
      loadEnabled = !!this.state.file;
    } else if (this.state.mode === "example") {
      loadIcon = "download";
      const options = this.state.examples.map((name) => (
        <option key={name} value={name}>
          {name}
        </option>
      ));
      inputElement = (
        <select
          ref={(ref) => (this.fileInput = ref)}
          className="form-select"
          aria-label="Select an example"
          onChange={(e) => this.setState({ example: e.target.value })}
        >
          {options}
        </select>
      );
      loadEnabled = options.length > 1;
    }
    return (
      <div className="LoadFile">
        <div className="container mb-3 d-flex align-items-baseline">
          <div className="col-auto" onChange={(e) => this.onModeChange(e)}>
            <span className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="loadSource"
                id="loadSourceFile"
                value="file"
                defaultChecked
              />
              <label className="form-check-label" htmlFor="loadSourceFile">
                Local File
              </label>
            </span>
            <span className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="loadSource"
                id="loadSourceExample"
                value="example"
              />
              <label className="form-check-label" htmlFor="loadSourceExample">
                Examples
              </label>
            </span>
          </div>
          <span className="flex-grow-1">{inputElement}</span>
          <button className="btn btn-primary ms-2" disabled={!loadEnabled} onClick={() => this.onLoadFile()}>
            <i className={"fas fa-fw fa-" + loadIcon}></i> Load
          </button>
        </div>
      </div>
    );
  }
}
