import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blockly from 'blockly';

function App() {
    React.useEffect(() => {
        Blockly.Blocks['string_length'] = {
            init: function() {
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
                    "helpUrl": "http://www.w3schools.com/jsref/jsref_length_string.asp"
                });
            }
        };
        let workspace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox')
        });
    });
    return (
        <div className="App">
            <h1>blockly demo</h1>
            <div id="blocklyDiv" style={{height: "480px", width: "600px"}}></div>
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

export default App;
