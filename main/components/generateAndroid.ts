export function generateAndroid(Variables: any) {
    console.log(Variables)
    let code = 'val ColorBaseTokens = ColorBase(\n';
  
  
    for (const mode in Variables) {
      code += `\t${mode.toLowerCase()} = ColorBase.${mode}(\n`
      for (const variable in Variables[mode]) {
        const varName = variable.split("/").pop()?.replace(/\W+/g, "").toLowerCase()
        const value = Variables[mode][variable].value.toUpperCase().replace("#", "0x")
        code += `\t\t${varName} = Color(color = ${value}),\n`;
      }
      code += '\t),\n'
    }
    
    code += ')\n';


    console.log(code)


    return code;
  }