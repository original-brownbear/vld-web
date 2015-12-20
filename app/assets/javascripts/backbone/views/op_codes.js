(function () {
    OpCodes.MainView = Backbone.View.extend({
        template: OpCodes.getTemplate('main'),
        model: OpCodes.MainModel,
        events: {
            "click #op_codes_new_btn": 'convert'
        },
        initialize: function () {
            var self = this;
            self.listenTo(self.model, 'newCodeCompiled', self.showOp);
        },
        render: function () {
            var self = this;
            var html = self.template({});
            if (!self.$el.visible) {
                var el = $(html);
                self.setElement(el);
            }

            return el;
        },
        convert: function () {
            var self = this;
            self.model.convert(self.$el.find('#op_codes_new_php').val());
        },
        showOp: function () {
            var self = this;

            var op = self.model.get('op');
            if (op) {
                self.$el.find('.op_codes_op_out').remove();
                $(self.$el.find('#op_codes_new_php')).after(jQuery('<textarea class="op_codes_op_out" style="width:705px;height:400px"/>').val(op));
            }
        }
    });
})(OpCodes);