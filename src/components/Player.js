import { Component } from "react";

export default class Player extends Component {
  constructor(props) {
    super(props);
    const defaultSheet = { bpm: 120, offset: 0, notes: [] };
    this.state = {
      gain: 0.3,
      noteIndex: -1,
      sheet: this.props.sheet || defaultSheet,
      waveType: "sine",
    };
    this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
    this.auxOscillators = [];
    this.gainNode = this.audioContext.createGain();
    this.setGain(this.state.gain);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.sheet !== this.props.sheet) {
      this.setState({ noteIndex: -1, sheet: this.props.sheet });
      this.stop();
    }
  }

  playMelody() {
    if (this.oscillator) {
      this.stop();
    }

    if (!this.props.sheet) {
      return;
    }

    this.setState({ noteIndex: -1 });
    this.playNextNote();
  }

  playNextNote() {
    const noteIndex = this.state.noteIndex + 1;
    const sheet = this.state.sheet;
    if (noteIndex >= sheet.notes.length) {
      this.stop();
      return;
    }
    this.setState({ noteIndex: noteIndex });
    const note = sheet.notes[noteIndex];
    const aux = note.aux.map((n) => [this.toFrequency(n.level), this.toDuration(n.tempo), this.toDuration(n.offset)]);
    this.playNote(this.toFrequency(note.level), this.toDuration(note.tempo), () => this.playNextNote(), aux || []);
  }

  playNote(frequency, duration, callback, aux) {
    const audioCtx = this.audioContext;
    const oscillator = audioCtx.createOscillator();
    this.oscillator = oscillator;

    oscillator.type = this.state.waveType;
    oscillator.frequency.value = frequency;
    oscillator.connect(this.gainNode).connect(audioCtx.destination);
    oscillator.onended = callback;
    if (aux?.length) {
      const auxOscillators = [];
      aux.forEach(([frequency, duration, offset]) => {
        const o = audioCtx.createOscillator();
        o.type = this.state.waveType;
        o.frequency.value = frequency;
        o.connect(this.gainNode).connect(audioCtx.destination);
        o.duration = duration;
        o.offset = offset;
        auxOscillators.push(o);
      });
      auxOscillators.forEach((o) => {
        if (o.offset) {
          o.start(audioCtx.currentTime + o.offset);
          o.stop(audioCtx.currentTime + o.offset + o.duration);
        } else {
          o.start();
          o.stop(audioCtx.currentTime + o.duration);
        }
      });
    }
    oscillator.start();
    oscillator.stop(audioCtx.currentTime + duration);
  }

  setGain(gain) {
    this.setState({ gain: gain });
    this.gainNode.gain.value = gain;
  }

  setProgress(progress) {
    this.setState({ noteIndex: progress - 1 });
    if (this.oscillator) {
      this.oscillator.stop();
    }
  }

  setWaveType(waveType) {
    this.setState({ waveType: waveType });
    if (this.oscillator) {
      this.oscillator.type = waveType;
    }
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
    level += this.state.sheet.offset;
    const referenceFrequency = 440; // A4
    const referenceNote = 69; // A4 = 9 + (4 + 1) * 12
    const relativeLevel = level - referenceNote;
    const frequency = Math.pow(2, relativeLevel / 12) * referenceFrequency;
    return frequency;
  }

  toDuration(tempo) {
    if (!tempo) return 0;
    return (tempo * 60) / (this.state.sheet.bpm * 16);
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
              value={1 + this.state.noteIndex}
              onChange={(e) => this.setProgress(e.target.value)}
              min={0}
              max={this.state.sheet.notes.length}
              step={1}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="progressBar" className="form-label">
              {"Notes: " + (this.state.noteIndex + 1) + " / " + this.state.sheet.notes.length}
            </label>
          </div>
        </div>
        <div className="row">
          <div className="col-auto">
            <label className="form-label d-block">Control</label>
            <button className="btn btn-primary" onClick={() => this.playMelody()}>
              <i className="fas fa-play"></i> Play
            </button>
            <button className="btn btn-danger ms-2" onClick={() => this.stop()}>
              <i className="fas fa-stop"></i> Stop
            </button>
          </div>
          <div className="col">
            <label htmlFor="volume" className="form-label">
              {"Volume: " + parseFloat(this.state.gain).toFixed(2)}
            </label>
            <input
              type="range"
              className="form-range"
              name="volume"
              onChange={(e) => {
                this.setGain(e.target.value);
              }}
              value={this.state.gain}
              min={0}
              max={1}
              step={0.01}
            />
          </div>
          <div className="col-auto">
            <label htmlFor="waveType" className="form-label">
              Type
            </label>
            <select className="form-select" onChange={(e) => this.setWaveType(e.target.value)} defaultValue="sine">
              <option value="sine">Sine (Default)</option>
              <option value="square">Square</option>
              <option value="sawtooth">Sawtooth</option>
              <option value="triangle">Triangle</option>
            </select>
          </div>
        </div>
      </div>
    );
  }
}
