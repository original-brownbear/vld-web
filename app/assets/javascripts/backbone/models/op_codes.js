(function () {
    OpCodes.MainModel = Backbone.Model.extend({
        convert: function (php_code) {
            var self = this;
            $.ajax({
                url: 'op_codes/new',
                method: 'post',
                data: {
                    php: php_code
                },
                success: function (repl) {
                    self.set('op', repl.op);
                    self.trigger('newCodeCompiled');
                }
            })
        }
    });
})(OpCodes);