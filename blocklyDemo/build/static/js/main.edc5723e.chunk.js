(this.webpackJsonpblocklyDemo=this.webpackJsonpblocklyDemo||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),s=n(8),l=n.n(s),c=(n(17),n(9)),r=n(10),a=n(2),h=n(12),d=n(11),u=n(3),p=n.n(u),b=n(7),m=n.n(b);function f(e,t,n){!function(e,t,n,i){for(var o,s=/^def\s+([\w\s,()]+)/gm,l=function(){for(var i=[],s=/\w+/g,l=void 0;null!==(l=s.exec(o[1]));){var c=l[0],r=c.split("_");if(r.length<2)return console.log("\u7121\u52b9\u306a\u8b58\u5225\u5b50",c,"in",o[0]),{v:void 0};i.push(r)}e.Blocks[i[0][1]]={args:i,init:function(){console.log(this.args),this.setNextStatement(!0),this.setPreviousStatement(!0),this.setOutput(!1),this.setColour(100),this.setTooltip("import module, eg. import request."),this.appendDummyInput().appendField(this.args[0][1]).appendField(new e.FieldNumber(""),"FIELDNAME")}},t[i[0][1]]=function(e){var t=e.getFieldValue("FIELDNAME");return i[0][1]+"("+t+")\n"}.bind(i),console.log(n)};null!==(o=s.exec(i));){var c=l();if("object"===typeof c)return c.v}}(e,t,n,'\nimport math,time\n\ndef str_cos(int_x,str_y):\n    return str(math.cos(int_x))+str_y\n    \ndef none_sleep(int_sec):\n    time.sleep\n\nprint(sin(1,"aiueo"))\n'),e.Blocks.string_length={init:function(){this.jsonInit({message0:"%1 \u306e\u9577\u3055",args0:[{type:"input_value",name:"VALUE",check:"String"}],output:"Number",colour:160,tooltip:"Returns number of letters in the provided text.",helpUrl:"https://www.w3schools.com/jsref/jsref_length_string.asp"}),t.string_length=function(e){return console.log(e),["len("+(t.valueToCode(e,"VALUE",t.ORDER_FUNCTION_CALL)||"''")+")",t.ORDER_MEMBER]}}},e.Blocks.import={init:function(){this.setNextStatement(!0),this.setPreviousStatement(!0),this.setOutput(!1),this.setColour(100),this.setTooltip("import module, eg. import request."),this.appendDummyInput().appendField("import").appendField(new e.FieldTextInput(""),"FIELDNAME"),t.import=function(e){return"import "+e.getFieldValue("FIELDNAME")+"\n"}}},t.addReservedWords("code")}n(27);var g=n(0),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={code:""},i.handleChange=i.handleChange.bind(Object(a.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(a.a)(i)),i.handleResize=i.handleResize.bind(Object(a.a)(i)),i}return Object(r.a)(n,[{key:"handleChange",value:function(e){e instanceof p.a.Events.Ui||(this.setState({code:m.a.workspaceToCode(this.workSpace)}),this.handleResize(null))}},{key:"handleSubmit",value:function(){console.log("hello")}},{key:"handleResize",value:function(e){var t=this.blocklyArea,n=0,i=0;do{n+=t.offsetLeft,i+=t.offsetTop,t=t.offsetParent}while(t);this.blocklyDiv.style.left=n+"px",this.blocklyDiv.style.top=i+"px",this.blocklyDiv.style.width=this.blocklyArea.offsetWidth+"px",this.blocklyDiv.style.height=this.blocklyArea.offsetHeight+"px",p.a.svgResize(this.workSpace)}},{key:"componentDidMount",value:function(){this.blocklyArea=document.getElementById("blocklyArea"),this.blocklyDiv=document.getElementById("blocklyDiv"),this.workSpace=p.a.inject("blocklyDiv",{toolbox:document.getElementById("toolbox")}),f(p.a,m.a,this.workSpace),this.workSpace.addChangeListener(this.handleChange),window.addEventListener("resize",this.handleResize,!1),this.handleResize(),p.a.svgResize(this.workSpace)}},{key:"render",value:function(){var e=this.state.code.split("\n").map((function(e){return Object(g.jsx)("p",{children:e},e)}));return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsx)("h1",{children:"blockly demo"}),Object(g.jsx)("table",{style:{width:"100%"},children:Object(g.jsxs)("tbody",{children:[Object(g.jsx)("tr",{children:Object(g.jsx)("td",{children:e})}),Object(g.jsx)("tr",{children:Object(g.jsx)("td",{id:"blocklyArea",style:{height:"600px"}})})]})}),Object(g.jsx)("div",{id:"blocklyDiv",style:{position:"absolute"}})]})}}]),n}(o.a.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,s=t.getLCP,l=t.getTTFB;n(e),i(e),o(e),s(e),l(e)}))};l.a.render(Object(g.jsx)(o.a.StrictMode,{children:Object(g.jsx)(v,{})}),document.getElementById("root")),y()}},[[29,1,2]]]);
//# sourceMappingURL=main.edc5723e.chunk.js.map