(function () {
    OpCodes.data.Templates = {
        main: [
            '<div id="op_codes_main">',
            '<textarea id="op_codes_new_php" style="width:400px;height:400px"/>',
            '<input type="button" value="Compile"/>',
            '</div>']
    };

    OpCodes.getTemplate = function (temp) {
        if (OpCodes.data.Templates.hasOwnProperty(temp)) {
            if (OpCodes.data.compiledTemplates[temp] === undefined) {
                OpCodes.data.compiledTemplates[temp] = _.template(OpCodes.data.Templates[temp].join("\n"))
            }

            return OpCodes.data.compiledTemplates[temp];
        }
    };
})(OpCodes);