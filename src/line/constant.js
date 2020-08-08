function define(name, value) {
    Object.defineProperty(exports, name, {
        value:      value,
        enumerable: true
    });
}

define("FOLLOW", `Thank you for following me! Please type !help to see my instruction ${String.fromCodePoint(0x100078)}`);
define("HELP", `Help Page!
Available Command : 
1. !find --k <keyword> --t <any text> : To extract info from a text
2. !find --k <keyword> --u <url>      : To extract info from a webpage `);
define("FIND", `Wrong syntax or add more description (keyword and content) for me to extract the information from ${String.fromCodePoint(0x100022)}`);

