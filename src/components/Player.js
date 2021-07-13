import { Component } from "react";

export default class Player extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gain: 0.5,
      noteIndex: -1,
    };
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.gainNode = this.audioContext.createGain();
    const defaultSheet = { notes: [] };
    this.sheet = this.props.sheet || defaultSheet;
    this.setGain(this.state.gain);
  }

  componentDidUpdate() {
    this.sheet = this.props.sheet;
  }

  playMelody() {
    if (this.oscillator) {
      this.stop();
    }

    this.setState({ noteIndex: -1 });
    this.playNextNote();
  }

  playNextNote() {
    const noteIndex = this.state.noteIndex + 1;
    this.setState({ noteIndex: noteIndex });
    if (noteIndex >= this.sheet.notes.length) {
      this.stop();
    } else {
      const note = this.sheet.notes[noteIndex];
      this.playNote(this.toFrequency(note.level + this.sheet.offset), this.toDuration(note.tempo, this.sheet.bpm), () =>
        this.playNextNote()
      );
    }
  }

  playNote(frequency, duration, callback) {
    const audioCtx = this.audioContext;
    const oscillator = audioCtx.createOscillator();
    this.oscillator = oscillator;

    oscillator.type = "sine";
    oscillator.frequency.value = frequency;
    oscillator.connect(this.gainNode).connect(audioCtx.destination);
    oscillator.onended = callback;
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  }

  setGain(gain) {
    this.setState({ gain: gain });
    this.gainNode.gain.value = gain;
  }

  stop() {
    if (!this.oscillator) {
      return;
    }
    this.oscillator.onended = null;
    this.oscillator.stop();
    this.oscillator = null;
    this.setState({ noteIndex: -1 });
  }

  toFrequency(level) {
    if (level === 0) {
      return 0;
    }
    const referenceFrequency = 440; // A4
    const referenceNote = 57; // A4 = 9 + 4 * 12
    const relativeLevel = level - referenceNote;
    const frequency = Math.pow(2, relativeLevel / 12) * referenceFrequency;
    return frequency;
  }

  toDuration(tempo, bpm) {
    return (tempo * 60) / (bpm * 16);
  }

  render() {
    return (
      <div className="Player container">
        <div className="row mb-2">
          <div className="col">
            <input
              type="range"
              className="form-range"
              name="progressBar"
              readOnly="readonly"
              value={1 + this.state.noteIndex}
              min="0"
              max={this.sheet.notes.length}
              step={1}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="progressBar" className="form-label">
              {"Notes: " + (this.state.noteIndex + 1) + " / " + this.sheet.notes.length}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <button className="btn btn-primary" onClick={() => this.playMelody()}>
              <i className="fas fa-play"></i> Play
            </button>
          </div>
          <div className="col-auto">
            <button className="btn btn-danger" onClick={() => this.stop()}>
              <i className="fas fa-stop"></i> Stop
            </button>
          </div>
          <div className="col">
            <input
              type="range"
              className="form-range"
              name="volume"
              onChange={(e) => {
                this.setGain(e.target.value);
              }}
              value={this.state.gain}
              min={0}
              max={2}
              step={0.01}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="volume" className="form-label">
              {"Volume: " + parseFloat(this.state.gain).toFixed(2)}
            </label>
          </div>
        </div>
      </div>
    );
  }
}
