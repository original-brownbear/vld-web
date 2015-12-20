(function () {
    OpCodes.MainView = Backbone.View.extend({
        template: OpCodes.getTemplate('main'),
        model: OpCodes.MainModel,
        events: {
            "click #op_codes_new_btn": 'convert'
        },
        initialize: function () {
            var self = this;
            self.listenTo(self.model, 'newCodeCompiled', self.render);
        },
        render: function () {
            var self = this;
            var html = self.template({});
            if (!self.$el.visible) {
                var el = $(html);
                self.setElement(el);
            } else {
                self.$el.replaceWith($(html));
            }

            return el;
        },
        convert: function () {
            var self = this;
            self.model.convert(self.$el.find('#op_codes_new_php').val());
        }
    });
})(OpCodes);