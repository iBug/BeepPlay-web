(this["webpackJsonpbeepplay-react"]=this["webpackJsonpbeepplay-react"]||[]).push([[0],{20:function(e,t,a){},21:function(e,t,a){},24:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a.n(n),o=a(14),l=a.n(o),i=(a(20),a(3)),r=a(4),c=a(6),u=a(5),h=(a(21),a(8)),p=a(13),f=a(15),d=a(2),m=a.n(d),j=a(11),b=a(0),v=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={mode:"file",example:null,examples:["Loading ..."],file:null},e}return Object(r.a)(a,[{key:"loadExample",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t,a=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=this.state.example,e.next=3,fetch("./examples/"+t).then((function(e){return e.blob()})).then((function(e){console.log(e),a.setState({file:e}),a.loadFile()}));case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"loadExamples",value:function(){var e=Object(j.a)(m.a.mark((function e(){var t=this;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("./examples/index.json").then((function(e){return e.json()})).then((function(e){return t.setState({example:e[0],examples:e})}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"loadFile",value:function(){var e=this,t=new FileReader;t.onloadend=function(){var t=Object(j.a)(m.a.mark((function t(a){var n,s;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=a.target.result;try{s=e.parseSheet(n),e.props.onChangeFile(s),console.log("Loaded sheet:",s),"file"===e.fileInput.type&&(e.fileInput.value=""),e.setState({file:null})}catch(o){console.error(o)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.readAsText(this.state.file,"utf-8")}},{key:"onLoadFile",value:function(){"file"===this.state.mode?this.loadFile():"example"===this.state.mode&&this.loadExample()}},{key:"onModeChange",value:function(e){this.setMode(e.target.value)}},{key:"setMode",value:function(e){"example"!==e||this.example||this.loadExamples(),this.setState({mode:e})}},{key:"parseSheet",value:function(e){var t,a=e.split("\n"),n={notes:[]},s=Object(f.a)(a);try{for(s.s();!(t=s.n()).done;){var o=t.value;if(""!==(o=o.trim())&&!o.startsWith("#"))if(n.bpm){var l=o.split(/\s+;\s+/),i=Object(p.a)(l),r=i[0],c=i.slice(1),u=r.split(/\s+/),d=Object(h.a)(u,3),m=d[0],j=d[1],b=d[2],v=parseInt(m)+12*parseInt(j)+12,x=c.map((function(e){var t=e.split(/\s+/),a=Object(h.a)(t,4),n=a[0],s=a[1],o=a[2],l=a[3],i=parseInt(n)+12*parseInt(s)+12,r=l?parseFloat(l):void 0;return{level:i,tempo:parseFloat(o),offset:r}}));n.notes.push({level:v,tempo:parseFloat(b),aux:x})}else{var y=o.split(/\s+/),O=Object(p.a)(y),g=O[0],N=O[1];O.slice(2);n.bpm=parseFloat(g),n.offset=parseFloat(N)}}}catch(k){s.e(k)}finally{s.f()}return n.length=n.notes.reduce((function(e,t){return e+t.tempo}),0),console.log(n.length),n}},{key:"render",value:function(){var e=this,t=null,a=null,n=!0;if("file"===this.state.mode)a="folder-open",t=Object(b.jsx)("input",{ref:function(t){return e.fileInput=t},type:"file",className:"form-control",name:"file",onChange:function(t){return e.setState({file:t.target.files[0]})}}),n=!!this.state.file;else if("example"===this.state.mode){a="download";var s=this.state.examples.map((function(e){return Object(b.jsx)("option",{value:e,children:e},e)}));t=Object(b.jsx)("select",{ref:function(t){return e.fileInput=t},className:"form-select","aria-label":"Select an example",onChange:function(t){return e.setState({example:t.target.value})},children:s}),n=!0}return Object(b.jsx)("div",{className:"LoadFile",children:Object(b.jsxs)("div",{className:"container mb-3 d-flex align-items-baseline",children:[Object(b.jsxs)("div",{className:"col-auto",onChange:function(t){return e.onModeChange(t)},children:[Object(b.jsxs)("span",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"loadSource",id:"loadSourceFile",value:"file",defaultChecked:!0}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"loadSourceFile",children:"Local File"})]}),Object(b.jsxs)("span",{className:"form-check form-check-inline",children:[Object(b.jsx)("input",{className:"form-check-input",type:"radio",name:"loadSource",id:"loadSourceExample",value:"example"}),Object(b.jsx)("label",{className:"form-check-label",htmlFor:"loadSourceExample",children:"Examples"})]})]}),Object(b.jsx)("span",{className:"flex-grow-1",children:t}),Object(b.jsxs)("button",{className:"btn btn-primary ms-2",disabled:!n,onClick:function(){return e.onLoadFile()},children:[Object(b.jsx)("i",{className:"fas fa-fw fa-"+a})," Load"]})]})})}}]),a}(n.Component),x=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(e){var n;Object(i.a)(this,a);return(n=t.call(this,e)).state={gain:.3,noteIndex:-1,sheet:n.props.sheet||{bpm:120,offset:0,notes:[]},waveType:"sine"},n.audioContext=new(window.AudioContext||window.webkitAudioContext),n.auxOscillators=[],n.gainNode=n.audioContext.createGain(),n.setGain(n.state.gain),n}return Object(r.a)(a,[{key:"componentDidUpdate",value:function(e){e.sheet!==this.props.sheet&&this.setState({sheet:this.props.sheet})}},{key:"playMelody",value:function(){this.oscillator&&this.stop(),this.props.sheet&&(this.setState({noteIndex:-1}),this.playNextNote())}},{key:"playNextNote",value:function(){var e=this,t=this.state.noteIndex+1,a=this.state.sheet;if(this.setState({noteIndex:t}),t>=a.notes.length)this.stop();else{var n=a.notes[t],s=n.aux.map((function(t){return[e.toFrequency(t.level),e.toDuration(t.tempo),e.toDuration(t.offset)]}));this.playNote(this.toFrequency(n.level),this.toDuration(n.tempo),(function(){return e.playNextNote()}),s||[])}}},{key:"playNote",value:function(e,t,a,n){var s=this,o=this.audioContext,l=o.createOscillator();if(this.oscillator=l,l.type=this.state.waveType,l.frequency.value=e,l.connect(this.gainNode).connect(o.destination),l.onended=a,null===n||void 0===n?void 0:n.length){var i=[];n.forEach((function(e){var t=Object(h.a)(e,3),a=t[0],n=t[1],l=t[2],r=o.createOscillator();r.type=s.state.waveType,r.frequency.value=a,r.connect(s.gainNode).connect(o.destination),r.duration=n,r.offset=l,i.push(r)})),i.forEach((function(e){e.offset?(e.start(o.currentTime+e.offset),e.stop(o.currentTime+e.offset+e.duration)):(e.start(),e.stop(o.currentTime+e.duration))}))}l.start(),l.stop(o.currentTime+t)}},{key:"setGain",value:function(e){this.setState({gain:e}),this.gainNode.gain.value=e}},{key:"setProgress",value:function(e){this.setState({noteIndex:e-1}),this.oscillator&&this.oscillator.stop()}},{key:"setWaveType",value:function(e){this.setState({waveType:e}),this.oscillator&&(this.oscillator.type=e)}},{key:"stop",value:function(){this.oscillator&&(this.oscillator.onended=null,this.oscillator.stop(),this.oscillator=null,this.setState({noteIndex:-1}))}},{key:"toFrequency",value:function(e){if(0===e)return 0;var t=(e+=this.state.sheet.offset)-69;return 440*Math.pow(2,t/12)}},{key:"toDuration",value:function(e){return e?60*e/(16*this.state.sheet.bpm):0}},{key:"render",value:function(){var e=this;return Object(b.jsxs)("div",{className:"Player container",children:[Object(b.jsxs)("div",{className:"row mb-2",children:[Object(b.jsx)("div",{className:"col",children:Object(b.jsx)("input",{type:"range",className:"form-range",name:"progressBar",value:1+this.state.noteIndex,onChange:function(t){return e.setProgress(t.target.value)},min:0,max:this.state.sheet.notes.length,step:1})}),Object(b.jsx)("div",{className:"col-auto",children:Object(b.jsx)("label",{htmlFor:"progressBar",className:"form-label",children:"Notes: "+(this.state.noteIndex+1)+" / "+this.state.sheet.notes.length})})]}),Object(b.jsxs)("div",{className:"row",children:[Object(b.jsxs)("div",{className:"col-auto",children:[Object(b.jsx)("label",{className:"form-label d-block",children:"Control"}),Object(b.jsxs)("button",{className:"btn btn-primary",onClick:function(){return e.playMelody()},children:[Object(b.jsx)("i",{className:"fas fa-play"})," Play"]}),Object(b.jsxs)("button",{className:"btn btn-danger ms-2",onClick:function(){return e.stop()},children:[Object(b.jsx)("i",{className:"fas fa-stop"})," Stop"]})]}),Object(b.jsxs)("div",{className:"col",children:[Object(b.jsx)("label",{htmlFor:"volume",className:"form-label",children:"Volume: "+parseFloat(this.state.gain).toFixed(2)}),Object(b.jsx)("input",{type:"range",className:"form-range",name:"volume",onChange:function(t){e.setGain(t.target.value)},value:this.state.gain,min:0,max:1,step:.01})]}),Object(b.jsxs)("div",{className:"col-auto",children:[Object(b.jsx)("label",{htmlFor:"waveType",className:"form-label",children:"Type"}),Object(b.jsxs)("select",{className:"form-select",onChange:function(t){return e.setWaveType(t.target.value)},defaultValue:"sine",children:[Object(b.jsx)("option",{value:"sine",children:"Sine (Default)"}),Object(b.jsx)("option",{value:"square",children:"Square"}),Object(b.jsx)("option",{value:"sawtooth",children:"Sawtooth"}),Object(b.jsx)("option",{value:"triangle",children:"Triangle"})]})]})]})]})}}]),a}(n.Component),y=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={sheet:{notes:[]}},e}return Object(r.a)(a,[{key:"onChangeFile",value:function(e){this.setState({sheet:e})}},{key:"render",value:function(){return Object(b.jsx)("div",{className:"App container",children:Object(b.jsx)("main",{className:"card mb-3",children:Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)(v,{onChangeFile:this.onChangeFile.bind(this)}),Object(b.jsx)(x,{sheet:this.state.sheet})]})})})}}]),a}(n.Component),O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,25)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,o=t.getLCP,l=t.getTTFB;a(e),n(e),s(e),o(e),l(e)}))};l.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(y,{})}),document.getElementById("root")),O()}},[[24,1,2]]]);
//# sourceMappingURL=main.55d1e509.chunk.js.map