(this.webpackJsonpblocklyDemo=this.webpackJsonpblocklyDemo||[]).push([[0],{17:function(e,t,n){},18:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var o=n(3),i=n.n(o),l=n(8),s=n.n(l),c=(n(17),n(9)),a=n(10),r=n(4),h=n(12),d=n(11),b=(n(18),n(2)),p=n.n(b),u=n(1),j=n.n(u),y=n(0),m=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(c.a)(this,n),(o=t.call(this,e)).state={code:""},o.handleChange=o.handleChange.bind(Object(r.a)(o)),o.handleSubmit=o.handleSubmit.bind(Object(r.a)(o)),o.handleResize=o.handleResize.bind(Object(r.a)(o)),p.a.Blocks.string_length={init:function(){this.jsonInit({message0:"%1 \u306e\u9577\u3055",args0:[{type:"input_value",name:"VALUE",check:"String"}],output:"Number",colour:160,tooltip:"Returns number of letters in the provided text.",helpUrl:"https://www.w3schools.com/jsref/jsref_length_string.asp"})}},p.a.Blocks.import={init:function(){this.setNextStatement(!0),this.setPreviousStatement(!0),this.setOutput(!1),this.setColour(100),this.setTooltip("import module, eg. import request."),this.appendDummyInput().appendField("import").appendField(new p.a.FieldTextInput(""),"FIELDNAME"),j.a.import=function(e){return"import "+e.getFieldValue("FIELDNAME")+"\n"}}},j.a.string_length=function(e){return console.log(e),["len("+(j.a.valueToCode(e,"VALUE",j.a.ORDER_FUNCTION_CALL)||"''")+")",j.a.ORDER_MEMBER]},j.a.addReservedWords("code"),o}return Object(a.a)(n,[{key:"handleChange",value:function(){}},{key:"handleSubmit",value:function(){console.log("hello"),this.setState({code:j.a.workspaceToCode(this.workSpace)}),this.handleResize(null)}},{key:"handleResize",value:function(e){var t=this.blocklyArea,n=0,o=0;do{n+=t.offsetLeft,o+=t.offsetTop,t=t.offsetParent}while(t);this.blocklyDiv.style.left=n+"px",this.blocklyDiv.style.top=o+"px",this.blocklyDiv.style.width=this.blocklyArea.offsetWidth+"px",this.blocklyDiv.style.height=this.blocklyArea.offsetHeight+"px",p.a.svgResize(this.workSpace)}},{key:"componentDidMount",value:function(){this.blocklyArea=document.getElementById("blocklyArea"),this.blocklyDiv=document.getElementById("blocklyDiv"),this.workSpace=p.a.inject("blocklyDiv",{toolbox:document.getElementById("toolbox")}),window.addEventListener("resize",this.handleResize,!1),this.handleResize(),p.a.svgResize(this.workSpace)}},{key:"render",value:function(){var e=this.state.code.split("\n").map((function(e){return Object(y.jsx)("p",{children:e})}));return Object(y.jsxs)("div",{className:"App",children:[Object(y.jsx)("h1",{children:"blockly demo"}),Object(y.jsx)("table",{style:{width:"100%"},children:Object(y.jsxs)("tbody",{children:[Object(y.jsx)("tr",{children:Object(y.jsxs)("td",{children:[Object(y.jsx)("button",{onClick:this.handleSubmit,children:"Generate python"}),e]})}),Object(y.jsx)("tr",{children:Object(y.jsx)("td",{id:"blocklyArea",style:{height:"600px"}})})]})}),Object(y.jsx)("div",{id:"blocklyDiv",style:{position:"absolute"}}),Object(y.jsxs)("xml",{id:"toolbox",style:{display:"none"},children:[Object(y.jsxs)("category",{name:"\u65e2\u5b58\u90e8\u54c1",children:[Object(y.jsx)("block",{type:"controls_if"}),Object(y.jsx)("block",{type:"controls_repeat_ext"}),Object(y.jsx)("block",{type:"logic_compare"}),Object(y.jsx)("block",{type:"math_number"}),Object(y.jsx)("block",{type:"math_arithmetic"}),Object(y.jsx)("block",{type:"text"}),Object(y.jsx)("block",{type:"text_print"})]}),Object(y.jsxs)("category",{name:"\u30ab\u30b9\u30bf\u30e0\u90e8\u54c1",children:[Object(y.jsx)("block",{type:"string_length"}),Object(y.jsx)("block",{type:"import"})]})]})]})}}]),n}(i.a.Component),k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,o=t.getFID,i=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),o(e),i(e),l(e),s(e)}))};s.a.render(Object(y.jsx)(i.a.StrictMode,{children:Object(y.jsx)(m,{})}),document.getElementById("root")),k()}},[[29,1,2]]]);
//# sourceMappingURL=main.09e9ff59.chunk.js.map