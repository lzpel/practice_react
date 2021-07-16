import React from 'react';
import Blockly from 'blockly';
import Python from 'blockly/python';
import loadScript from './loadScript';
import './App.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {code: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleResize = this.handleResize.bind(this);
    }

    handleChange(primaryEvent) {
        if (primaryEvent instanceof Blockly.Events.Ui) {
            return;  // Don't mirror UI events.
        }
        this.setState({
            code: Python.workspaceToCode(this.workSpace)
        });
        this.handleResize(null)
    }

    handleSubmit() {
        console.log("hello")
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

        // カスタムブロック
        loadScript(Blockly, Python, this.workSpace)
        // 変更即反映
        this.workSpace.addChangeListener(this.handleChange)

        window.addEventListener('resize', this.handleResize, false);
        this.handleResize();
        Blockly.svgResize(this.workSpace);
    }

    render() {
        const lines = this.state.code.split("\n").map(function(item, idx) {
            return (
                <span key={idx}>{item}<br/></span>
            )
        })
        return (
            <div className="App">
                <h1>blockly demo</h1>
                <table style={{width: "100%"}}>
                    <tbody>
                    <tr>
                        <td id="blocklyArea" style={{height: "600px",width:"50%"}}></td>
                        <td>
                            <textarea value={this.state.code} style={{height: "600px",width:"100%"}}/>
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="blocklyDiv" style={{position: "absolute"}}></div>
            </div>
        );
    }
}

export default App;
