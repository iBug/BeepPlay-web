import { Component } from "react";

export default class LoadFile extends Component {
  loadFile() {
    const reader = new FileReader();
    reader.onloadend = async (e) => {
      const text = e.target.result;
      try {
        const sheet = this.parseSheet(text);
        this.props.onChangeFile(sheet);
        console.log("Loaded sheet:", sheet);
      } catch (err) {
        console.error(err);
      }
    };
    reader.readAsText(this.state.file, "utf-8");
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
      const [pitch, octave, tempo] = line.split(/\s+/);
      const level = parseInt(pitch) + parseInt(octave) * 12 + 12;
      sheet.notes.push({ level: level, tempo: parseFloat(tempo) });
    }
    sheet.length = sheet.notes.reduce((sum, note) => sum + note.tempo, 0);
    console.log(sheet.length);
    return sheet;
  }

  render() {
    return (
      <div className="LoadFile">
        <div className="mb-3 d-flex">
          <span className="flex-grow-1">
            <input
              type="file"
              className="form-control"
              name="file"
              onChange={(e) => this.setState({ file: e.target.files[0] })}
            />
          </span>
          <button className="btn btn-primary ms-2" onClick={() => this.loadFile()}>
            <i className="fas fa-folder-open"></i> Load
          </button>
        </div>
      </div>
    );
  }
}
