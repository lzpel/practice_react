
const text=`
import math

def str_sin2(int_x,str_y):
    return str(math.sin(int_x))+str_y

def str_cos(int_x,str_y):
    return str(math.cos(int_x))+str_y
    
print(sin(1,"aiueo"))
`
function loadScript2(Blockly, Python, Script) {
    let myRe = /^def\s+([\w\s,()]+)/gm;
    let myArray;
    while ((myArray = myRe.exec(Script)) !== null) {
        let funcPart=myArray[0], argsPart=myArray[1]
        let args=[], argsRe=/\w+/, argsArray
        while ((argsArray = argsRe.exec(argsPart)) !== null) {
            let arg=argsArray[0]
            let parts=arg.split("_")
            if(parts.length!==2){
                console.log("無効な識別子",arg,"in",funcPart)
                return
            }
            console.log(parts[0],parts[1])
        }
    }
}
export default function loadScript(Blockly, Python){
    loadScript2(Blockly, Python, text)
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