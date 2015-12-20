(function () {
    OpCodes.MainView = Backbone.View.extend({
        template: OpCodes.getTemplate('main'),
        model: OpCodes.model,
        events: {
            "click #op_codes_new_btn": 'convert'
        },
        render: function () {
            var self = this;
            var el = $(self.template({}));
            self.setElement(el);

            return el;
        },
        convert: function () {
            var self = this;
            self.model.convert(self.$el.find('#op_codes_new_php').val());
        }
    });
})(OpCodes);