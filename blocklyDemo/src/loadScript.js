
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
    //loadScript2(Blockly, Python, WorkSpace, text)
    Blockly.defineBlocksWithJsonArray([
        {
            "type": "env",
            "message0": "\"環境変数 %1\"",
            "output": "String",
            "style": "text_blocks",
            "args0": [{
                "type": "field_input",
                "name": "TEXT",
                "text": "PATH"
            }],
            "extensions": [
                "text_quotes",
                "parent_tooltip_when_inline"
            ]
        },
        {
            "type": "argv",
            "message0": "[実行時引数]",
            "output": "Array",
            "style": "list_blocks",
        },
        {
            "type": "curl",
            "message0": "curl %1",
            "output": "String",
            "style": "procedure_blocks",
            "args0": [
                {
                    "type": "input_value",
                    "name": "URL",
                    "check": ["String"]
                }
            ],
        },
    ])
    Python['env'] = function (block) {
        return ["os.environ.get('" + block.getFieldValue('TEXT') + "')", Blockly.Python.ORDER_ATOMIC]
    };
    Python['argv'] = function (block) {
        return ["sys.argv", Blockly.Python.ORDER_ATOMIC]
    };
    Python['curl'] = function (block) {
        let url=Blockly.Python.valueToCode(block, 'URL', Blockly.Python.ORDER_NONE) || '';
        let code="urllib.request.urlopen("+url+")"
        return [code, Blockly.Python.ORDER_ATOMIC]
    };
    Python.addReservedWords('code');
}