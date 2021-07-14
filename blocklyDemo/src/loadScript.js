
const text=`
import math,time

def str_cos(int_x,str_y):
    return str(math.cos(int_x))+str_y
    
def none_sleep(int_sec):
    time.sleep

print(sin(1,"aiueo"))
`
function loadScript2(Blockly, Python, WorkSpace, Script) {
    let funcRe = /^def\s+([\w\s,()]+)/gm, funcParts;
    while ((funcParts = funcRe.exec(Script)) !== null) {
        let args=[], argsRe=/\w+/g, argsArray
        while ((argsArray = argsRe.exec(funcParts[1])) !== null) {
            let arg=argsArray[0]
            let parts=arg.split("_")
            if(parts.length<2){
                console.log("無効な識別子",arg,"in",funcParts[0])
                return
            }
            args.push(parts)
        }
        Blockly.Blocks[args[0][1]] = {
            args: args,
            init: function () {
                console.log(this.args);
                this.setNextStatement(true);
                this.setPreviousStatement(true);
                this.setOutput(false);
                this.setColour(100);
                this.setTooltip('import module, eg. import request.');
                this.appendDummyInput()
                    .appendField(this.args[0][1])
                    .appendField(new Blockly.FieldNumber(''), 'FIELDNAME');
            }
        }
        Python[args[0][1]] = function (block) {
            let argument0 = block.getFieldValue('FIELDNAME')
            return args[0][1]+"(" + argument0 + ")\n"
        }.bind(args);
        console.log(WorkSpace)
        //console.log(new Blockly.ToolboxItem({kind:Blockly.utils.toolbox.FLYOUT_TOOLBOX_KIND,type:args[0][1]}, WorkSpace.getToolbox(), null))
    }
}
export default function loadScript(Blockly, Python, WorkSpace){
    loadScript2(Blockly, Python, WorkSpace, text)
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
            Python['string_length'] = function (block) {
                console.log(block)
                let argument0 = Python.valueToCode(block, 'VALUE', Python.ORDER_FUNCTION_CALL) || '\'\'';
                return ["len(" + argument0 + ')', Python.ORDER_MEMBER];
            };
        }
    };
    Blockly.Blocks['import'] = {
        init: function () {
            this.setNextStatement(true);
            this.setPreviousStatement(true);
            this.setOutput(false);
            this.setColour(100);
            this.setTooltip('import module, eg. import request.');
            this.appendDummyInput()
                .appendField("import")
                .appendField(new Blockly.FieldTextInput(''), 'FIELDNAME');
            Python['import'] = function (block) {
                let argument0 = block.getFieldValue('FIELDNAME')
                return "import " + argument0 + "\n"
            };
        }
    };
    Python.addReservedWords('code');
}