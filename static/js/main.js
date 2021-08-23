let cpp_syntax = {
    "statement": [
        "if", "else", "while", "union", "this",
        "const", "goto", "virtual",
        "for", "break", "auto", "class", "operator", "case",
        "do", "typedef", "static", "friend", "template", "default",
        "new", "register", "extern", "return", "enum", "inline",
        "try", "continue", "sizeof", "switch", "private", "protected",
        "asm", "catch", "delete", "public", "volatile", "struct"
    ],
    "type": [
        "char", "short", "int", "long",
        "void", "signed", "unsigned"
    ]
}


function highBrightInsertToHtml(s, bright_type) {
    return "<span class=\""+ bright_type + "\">" + s + "</span>";
}

function highBrightTemplate(parstr, syntax, bright_type) {
    for (let i = 0; i < syntax[bright_type].length; i++) {
        let reg = new RegExp(syntax[bright_type][i], "g");
        parstr = parstr.replace(reg, highBrightInsertToHtml(syntax[bright_type][i], bright_type));
    }
    return parstr;
}

function highBright() {
    let code_eles = document.getElementsByTagName("code");

    for (let i = 0; i < code_eles.length; i++) {
        if (code_eles[i].hasAttribute("class")) {
            // 关键字高亮
            code_eles[i].innerHTML = highBrightTemplate(code_eles[i].innerHTML, cpp_syntax, "statement");
            
            // 类型高亮
            code_eles[i].innerHTML = highBrightTemplate(code_eles[i].innerHTML, cpp_syntax, "type");
        }
    }
}


window.onload = function() {
    highBright();
};
