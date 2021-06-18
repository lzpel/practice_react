import React from 'react';
import logo from './logo.svg';
import './App.css';
import Blockly from 'blockly';

function App() {

    React.useEffect(() => {
        Blockly.inject('blocklyDiv', {
            toolbox: document.getElementById('toolbox')
        });
    });
    return (
        <div className="App">
            <h1>blockly demo</h1>
            <div id="blocklyDiv" style={{height: "480px", width: "600px"}}></div>
            <xml id="toolbox" style={{display: "none"}}>
                <block type="controls_if"></block>
                <block type="controls_repeat_ext"></block>
                <block type="logic_compare"></block>
                <block type="math_number"></block>
                <block type="math_arithmetic"></block>
                <block type="text"></block>
                <block type="text_print"></block>
            </xml>
        </div>
    );
}

export default App;
