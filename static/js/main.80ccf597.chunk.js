(this["webpackJsonpbeepplay-react"]=this["webpackJsonpbeepplay-react"]||[]).push([[0],{20:function(e,t,n){},21:function(e,t,n){},24:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(11),o=n.n(i),r=(n(20),n(2)),c=n(3),l=n(5),u=n(4),h=(n(21),n(14)),p=n(15),d=n(12),f=n(10),b=n.n(f),v=n(13),j=n(0),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={filename:null},a}return Object(c.a)(n,[{key:"loadFile",value:function(){var e=this,t=new FileReader;t.onload=function(){var t=Object(v.a)(b.a.mark((function t(n){var a,s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:a=n.target.result;try{s=e.parseSheet(a),e.props.onChangeFile(s),console.log("Loaded sheet:",s)}catch(i){console.error(i)}case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),t.readAsText(this.state.filename,"utf-8")}},{key:"parseSheet",value:function(e){var t,n=e.split("\n"),a={notes:[]},s=Object(d.a)(n);try{for(s.s();!(t=s.n()).done;){var i=t.value;if(""!==(i=i.trim())&&!i.startsWith("#"))if(a.bpm){var o=i.split(/\s+/),r=Object(h.a)(o,3),c=r[0],l=r[1],u=r[2],f=parseInt(c)+12*parseInt(l);a.notes.push({level:f,tempo:parseFloat(u)})}else{var b=i.split(/\s+/),v=Object(p.a)(b),j=v[0],m=v[1];v.slice(2);a.bpm=parseFloat(j),a.offset=parseFloat(m)}}}catch(y){s.e(y)}finally{s.f()}return a}},{key:"render",value:function(){var e=this;return Object(j.jsx)("div",{className:"LoadFile",children:Object(j.jsxs)("div",{className:"mb-3 d-flex",children:[Object(j.jsx)("span",{className:"flex-grow-1",children:Object(j.jsx)("input",{type:"file",className:"form-control",name:"file",onChange:function(t){return e.setState({filename:t.target.files[0]})}})}),Object(j.jsx)("button",{className:"btn btn-primary ms-2",onClick:function(){return e.loadFile()},children:"Load"})]})})}}]),n}(a.Component),y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={gain:.5},a.audioContext=new(window.AudioContext||window.webkitAudioContext),a.gainNode=a.audioContext.createGain(),a.sheet=a.props.sheet,a.setGain(a.state.gain),a}return Object(c.a)(n,[{key:"componentDidUpdate",value:function(){this.sheet=this.props.sheet}},{key:"playMelody",value:function(){this.oscillator&&this.stop(),this.noteIndex=-1,this.playNextNote()}},{key:"playNextNote",value:function(){var e=this;if(this.noteIndex++,this.noteIndex>=this.sheet.notes.length)this.stop();else{var t=this.sheet.notes[this.noteIndex];this.playNote(this.toFrequency(t.level+this.sheet.offset),this.toDuration(t.tempo,this.sheet.bpm),(function(){return e.playNextNote()}))}}},{key:"playNote",value:function(e,t,n){var a=this.audioContext,s=a.createOscillator();this.oscillator=s,s.type="sine",s.frequency.value=e,s.connect(this.gainNode).connect(a.destination),s.onended=n,s.start(),s.stop(a.currentTime+t)}},{key:"setGain",value:function(e){this.setState({gain:e}),this.gainNode.gain.value=e}},{key:"stop",value:function(){this.oscillator&&(this.oscillator.onended=null,this.oscillator.stop(),this.oscillator=null)}},{key:"toFrequency",value:function(e){if(0===e)return 0;var t=e-57;return 440*Math.pow(2,t/12)}},{key:"toDuration",value:function(e,t){return 60*e/(16*t)}},{key:"render",value:function(){var e=this;return Object(j.jsxs)("div",{className:"Player",children:[Object(j.jsx)("button",{className:"btn btn-primary",onClick:function(){return e.playMelody()},children:"Play"}),Object(j.jsx)("button",{className:"btn btn-danger",onClick:function(){return e.stop()},children:"Stop"}),Object(j.jsx)("input",{type:"range",id:"volume",onChange:function(t){e.setGain(t.target.value)},value:this.state.gain,min:0,max:2,step:.01}),Object(j.jsx)("label",{htmlFor:"volume",className:"form-label",children:"Volume: "+parseFloat(this.state.gain).toFixed(2)})]})}}]),n}(a.Component),x=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(r.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={sheet:null},e}return Object(c.a)(n,[{key:"onChangeFile",value:function(e){this.setState({sheet:e})}},{key:"render",value:function(){return Object(j.jsx)("div",{className:"App container",children:Object(j.jsx)("main",{className:"card mb-3",children:Object(j.jsxs)("div",{className:"card-body",children:[Object(j.jsx)(m,{onChangeFile:this.onChangeFile.bind(this)}),Object(j.jsx)(y,{sheet:this.state.sheet})]})})})}}]),n}(a.Component),O=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),i(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),O()}},[[24,1,2]]]);
//# sourceMappingURL=main.80ccf597.chunk.js.map