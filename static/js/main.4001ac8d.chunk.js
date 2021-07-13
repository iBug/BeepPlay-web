(this["webpackJsonpbeepplay-react"]=this["webpackJsonpbeepplay-react"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),o=n(11),i=n.n(o),l=(n(20),n(2)),c=n(3),r=n(5),h=n(4),u=(n(21),n(14)),d=n(15),p=n(12),j=n(10),b=n.n(j),f=n(13),m=n(0),v=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={filename:null},a}return Object(c.a)(n,[{key:"loadFile",value:function(){var e=this,t=new FileReader;t.onload=function(){var t=Object(f.a)(b.a.mark((function t(n){var a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.result;try{s=e.parseSheet(a),e.props.onChangeFile(s),console.log("Loaded sheet:",s)}catch(o){console.error(o)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.readAsText(this.state.filename,"utf-8")}},{key:"parseSheet",value:function(e){var t,n=e.split("\n"),a={notes:[]},s=Object(p.a)(n);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(""!==(o=o.trim())&&!o.startsWith("#"))if(a.bpm){var i=o.split(/\s+/),l=Object(u.a)(i,3),c=l[0],r=l[1],h=l[2],j=parseInt(c)+12*parseInt(r);a.notes.push({level:j,tempo:parseFloat(h)})}else{var b=o.split(/\s+/),f=Object(d.a)(b),m=f[0],v=f[1];f.slice(2);a.bpm=parseFloat(m),a.offset=parseFloat(v)}}}catch(x){s.e(x)}finally{s.f()}return a.length=a.notes.reduce((function(e,t){return e+t.tempo}),0),console.log(a.length),a}},{key:"render",value:function(){var e=this;return Object(m.jsx)("div",{className:"LoadFile",children:Object(m.jsxs)("div",{className:"mb-3 d-flex",children:[Object(m.jsx)("span",{className:"flex-grow-1",children:Object(m.jsx)("input",{type:"file",className:"form-control",name:"file",onChange:function(t){return e.setState({filename:t.target.files[0]})}})}),Object(m.jsxs)("button",{className:"btn btn-primary ms-2",onClick:function(){return e.loadFile()},children:[Object(m.jsx)("i",{className:"fas fa-folder-open"})," Load"]})]})})}}]),n}(a.Component),x=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(e){var a;Object(l.a)(this,n),(a=t.call(this,e)).state={gain:.5,noteIndex:-1,waveType:"sine"},a.audioContext=new(window.AudioContext||window.webkitAudioContext),a.gainNode=a.audioContext.createGain();return a.sheet=a.props.sheet||{notes:[]},a.setGain(a.state.gain),a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.sheet=this.props.sheet}},{key:"playMelody",value:function(){this.oscillator&&this.stop(),this.props.sheet&&(this.setState({noteIndex:-1}),this.playNextNote())}},{key:"playNextNote",value:function(){var e=this,t=this.state.noteIndex+1;if(this.setState({noteIndex:t}),t>=this.sheet.notes.length)this.stop();else{var n=this.sheet.notes[t];this.playNote(this.toFrequency(n.level+this.sheet.offset),this.toDuration(n.tempo,this.sheet.bpm),(function(){return e.playNextNote()}))}}},{key:"playNote",value:function(e,t,n){var a=this.audioContext,s=a.createOscillator();this.oscillator=s,s.type=this.state.waveType,s.frequency.value=e,s.connect(this.gainNode).connect(a.destination),s.onended=n,s.start(),s.stop(a.currentTime+t)}},{key:"setGain",value:function(e){this.setState({gain:e}),this.gainNode.gain.value=e}},{key:"setWaveType",value:function(e){this.setState({waveType:e}),this.oscillator&&(this.oscillator.type=e)}},{key:"stop",value:function(){this.oscillator&&(this.oscillator.onended=null,this.oscillator.stop(),this.oscillator=null,this.setState({noteIndex:-1}))}},{key:"toFrequency",value:function(e){if(0===e)return 0;var t=e-57;return 440*Math.pow(2,t/12)}},{key:"toDuration",value:function(e,t){return 60*e/(16*t)}},{key:"render",value:function(){var e=this;return Object(m.jsxs)("div",{className:"Player container",children:[Object(m.jsxs)("div",{className:"row mb-2",children:[Object(m.jsx)("div",{className:"col",children:Object(m.jsx)("input",{type:"range",className:"form-range",name:"progressBar",readOnly:"readonly",value:1+this.state.noteIndex,min:"0",max:this.sheet.notes.length,step:1})}),Object(m.jsx)("div",{className:"col-auto",children:Object(m.jsx)("label",{htmlFor:"progressBar",className:"form-label",children:"Notes: "+(this.state.noteIndex+1)+" / "+this.sheet.notes.length})})]}),Object(m.jsxs)("div",{className:"row",children:[Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{className:"form-label d-block",children:"Control"}),Object(m.jsxs)("button",{className:"btn btn-primary",onClick:function(){return e.playMelody()},children:[Object(m.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(m.jsxs)("button",{className:"btn btn-danger ms-2",onClick:function(){return e.stop()},children:[Object(m.jsx)("i",{className:"fas fa-stop"})," Stop"]})]}),Object(m.jsxs)("div",{className:"col",children:[Object(m.jsx)("label",{htmlFor:"volume",className:"form-label",children:"Volume: "+parseFloat(this.state.gain).toFixed(2)}),Object(m.jsx)("input",{type:"range",className:"form-range",name:"volume",onChange:function(t){e.setGain(t.target.value)},value:this.state.gain,min:0,max:1,step:.01})]}),Object(m.jsxs)("div",{className:"col-auto",children:[Object(m.jsx)("label",{htmlFor:"waveType",className:"form-label",children:"Type"}),Object(m.jsxs)("select",{className:"form-select",onChange:function(t){return e.setWaveType(t.target.value)},children:[Object(m.jsx)("option",{value:"sine",selected:!0,children:"Sine (Default)"}),Object(m.jsx)("option",{value:"square",children:"Square"}),Object(m.jsx)("option",{value:"sawtooth",children:"Sawtooth"}),Object(m.jsx)("option",{value:"triangle",children:"Triangle"})]})]})]})]})}}]),n}(a.Component),y=function(e){Object(r.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={sheet:null},e}return Object(c.a)(n,[{key:"onChangeFile",value:function(e){this.setState({sheet:e})}},{key:"render",value:function(){return Object(m.jsx)("div",{className:"App container",children:Object(m.jsx)("main",{className:"card mb-3",children:Object(m.jsxs)("div",{className:"card-body",children:[Object(m.jsx)(v,{onChangeFile:this.onChangeFile.bind(this)}),Object(m.jsx)(x,{sheet:this.state.sheet})]})})})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),s(e),o(e),i(e)}))};i.a.render(Object(m.jsx)(s.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root")),O()}},[[24,1,2]]]);
//# sourceMappingURL=main.4001ac8d.chunk.js.map