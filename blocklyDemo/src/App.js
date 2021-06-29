import React from 'react';
import './App.css';
import Blockly from 'blockly';
import Python from 'blockly/python';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResize = this.handleResize.bind(this);

        Blockly.Blocks['string_length'] = {
            init: function () {
                this.jsonInit({
                    "message0": '%1 の長さ',
                    "args0": [
                        {
                            "type": "input_value",
                            "name": "VALUE",
                            "check": "String"
                        }
                    ],
                    "output": "Number",
                    "colour": 160,
                    "tooltip": "Returns number of letters in the provided text.",
                    "helpUrl": "https://www.w3schools.com/jsref/jsref_length_string.asp"
                });
            }
        };
        Python.addReservedWords('code');
        Python['string_length'] = function(block) {
            console.log(block)
            let argument0 = Python.valueToCode(block, 'VALUE', Python.ORDER_FUNCTION_CALL) || '\'\'';
            return ["len(" + argument0 + ')', Python.ORDER_MEMBER];
        };
    }

    handleChange() {

    }

    handleSubmit() {
        console.log("hello")
        this.setState({
            code: Python.workspaceToCode(this.workSpace)
        });
    }

    handleResize(e) {
        // this.blocklyArea = document.getElementById('blocklyArea')
        // Compute the absolute coordinates and dimensions of blocklyArea.
        let element = this.blocklyArea;
        let x = 0;
        let y = 0;
        do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
        } while (element);
        // Position blocklyDiv over blocklyArea.
        this.blocklyDiv.style.left = x + 'px';
        this.blocklyDiv.style.top = y + 'px';
        this.blocklyDiv.style.width = this.blocklyArea.offsetWidth + 'px';
        this.blocklyDiv.style.height = this.blocklyArea.offsetHeight + 'px';
        Blockly.svgResize(this.workSpace);
    }

    componentDidMount() {
        this.blocklyArea = document.getElementById('blocklyArea');
        this.blocklyDiv = document.getElementById('blocklyDiv');
        this.workSpace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox')
        });
        window.addEventListener('resize', this.handleResize, false);
        this.handleResize();
        Blockly.svgResize(this.workSpace);
    }

    render() {
        return (
            <div className="App">
                <h1>blockly demo</h1>
                <table style={{width: "100%"}}>
                    <tbody>
                    <tr>
                        <td>
                            <button onClick={this.handleSubmit}>Generate python</button>
                            {this.state.code}
                        </td>
                    </tr>
                    <tr>
                        <td id="blocklyArea" style={{height: "600px"}}></td>
                    </tr>
                    </tbody>
                </table>
                <div id="blocklyDiv" style={{position: "absolute"}}></div>
                <xml id="toolbox" style={{display: "none"}}>
                    <category name="既存部品">
                        <block type="controls_if"></block>
                        <block type="controls_repeat_ext"></block>
                        <block type="logic_compare"></block>
                        <block type="math_number"></block>
                        <block type="math_arithmetic"></block>
                        <block type="text"></block>
                        <block type="text_print"></block>
                    </category>
                    <category name="カスタム部品">
                        <block type="string_length"></block>
                    </category>
                </xml>
            </div>
        );
    }
}

export default App;
