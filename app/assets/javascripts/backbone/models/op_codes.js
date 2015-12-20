(function () {
    OpCodes.MainModel = Backbone.Model.extend({
        convert: function (php_code) {
            $.ajax({
                url: 'op_codes/new',
                data: {
                    php: php_code
                }
            })
        }
    });
})(OpCodes);