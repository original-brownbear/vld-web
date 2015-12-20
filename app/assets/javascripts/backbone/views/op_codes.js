(function () {
    OpCodes.MainView = Backbone.View.extend({
        template: OpCodes.getTemplate('main'),
        model: OpCodes.model,
        render: function () {

            return this.template({});
        }
    });
})(OpCodes);