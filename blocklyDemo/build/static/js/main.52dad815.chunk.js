(this.webpackJsonpblocklyDemo=this.webpackJsonpblocklyDemo||[]).push([[0],{17:function(e,t,n){},27:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var i=n(1),o=n.n(i),l=n(8),s=n.n(l),c=(n(17),n(9)),a=n(10),r=n(2),h=n(12),d=n(11),u=n(3),b=n.n(u),y=n(7),p=n.n(y);n(27);var k=n(0),v=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var i;return Object(c.a)(this,n),(i=t.call(this,e)).state={code:""},i.handleChange=i.handleChange.bind(Object(r.a)(i)),i.handleSubmit=i.handleSubmit.bind(Object(r.a)(i)),i.handleResize=i.handleResize.bind(Object(r.a)(i)),i}return Object(a.a)(n,[{key:"handleChange",value:function(e){e instanceof b.a.Events.Ui||(this.setState({code:p.a.workspaceToCode(this.workSpace)}),this.handleResize(null))}},{key:"handleSubmit",value:function(){console.log("hello")}},{key:"handleResize",value:function(e){var t=this.blocklyArea,n=0,i=0;do{n+=t.offsetLeft,i+=t.offsetTop,t=t.offsetParent}while(t);this.blocklyDiv.style.left=n+"px",this.blocklyDiv.style.top=i+"px",this.blocklyDiv.style.width=this.blocklyArea.offsetWidth+"px",this.blocklyDiv.style.height=this.blocklyArea.offsetHeight+"px",b.a.svgResize(this.workSpace)}},{key:"componentDidMount",value:function(){var e,t;this.blocklyArea=document.getElementById("blocklyArea"),this.blocklyDiv=document.getElementById("blocklyDiv"),this.workSpace=b.a.inject("blocklyDiv",{toolbox:document.getElementById("toolbox")}),e=b.a,t=p.a,this.workSpace,e.defineBlocksWithJsonArray([{type:"env",message0:'"\u74b0\u5883\u5909\u6570 %1"',output:"String",style:"text_blocks",args0:[{type:"field_input",name:"TEXT",text:"PATH"}],extensions:["text_quotes","parent_tooltip_when_inline"]},{type:"argv",message0:"[\u5b9f\u884c\u6642\u5f15\u6570]",output:"Array",style:"list_blocks"},{type:"curl",message0:"curl %1",output:"String",style:"procedure_blocks",args0:[{type:"input_value",name:"URL",check:["String"]}]}]),t.env=function(t){return["os.environ.get('"+t.getFieldValue("TEXT")+"')",e.Python.ORDER_ATOMIC]},t.argv=function(t){return["sys.argv",e.Python.ORDER_ATOMIC]},t.curl=function(t){return["urllib.request.urlopen("+(e.Python.valueToCode(t,"URL",e.Python.ORDER_NONE)||"")+")",e.Python.ORDER_ATOMIC]},t.addReservedWords("code"),this.workSpace.addChangeListener(this.handleChange),window.addEventListener("resize",this.handleResize,!1),this.handleResize(),b.a.svgResize(this.workSpace)}},{key:"render",value:function(){var e=this.state.code.split("\n").map((function(e){return Object(k.jsx)("p",{children:e},e)}));return Object(k.jsxs)("div",{className:"App",children:[Object(k.jsx)("h1",{children:"blockly demo"}),Object(k.jsx)("table",{style:{width:"100%"},children:Object(k.jsxs)("tbody",{children:[Object(k.jsx)("tr",{children:Object(k.jsx)("td",{children:e})}),Object(k.jsx)("tr",{children:Object(k.jsx)("td",{id:"blocklyArea",style:{height:"600px"}})})]})}),Object(k.jsx)("div",{id:"blocklyDiv",style:{position:"absolute"}})]})}}]),n}(o.a.Component),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,30)).then((function(t){var n=t.getCLS,i=t.getFID,o=t.getFCP,l=t.getLCP,s=t.getTTFB;n(e),i(e),o(e),l(e),s(e)}))};s.a.render(Object(k.jsx)(o.a.StrictMode,{children:Object(k.jsx)(v,{})}),document.getElementById("root")),g()}},[[29,1,2]]]);
//# sourceMappingURL=main.52dad815.chunk.js.map