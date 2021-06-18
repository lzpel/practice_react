import React from 'react';
import './App.css';
import Blockly from 'blockly';

let blocklyArea, blocklyDiv, workSpace

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

function onresize(e) {
    blocklyArea = document.getElementById('blocklyArea')
    // Compute the absolute coordinates and dimensions of blocklyArea.
    let element = blocklyArea;
    let x = 0;
    let y = 0;
    do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
    } while (element);
    // Position blocklyDiv over blocklyArea.
    blocklyDiv.style.left = x + 'px';
    blocklyDiv.style.top = y + 'px';
    blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
    blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
    Blockly.svgResize(workSpace);
}

function App() {
    React.useEffect(() => {
        blocklyArea = document.getElementById('blocklyArea');
        blocklyDiv = document.getElementById('blocklyDiv');
        workSpace = Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox')
        });
    });
    React.useEffect(() => {
        window.addEventListener('resize', onresize, false);
        onresize();
        Blockly.svgResize(workSpace);
    }, []);
    return (
        <div className="App">
            <h1>blockly demo</h1>
            <table style={{width: "100%"}}>
                <tr>
                    <td id="blocklyArea" style={{height: "600px"}}></td>
                </tr>
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

export default App;
