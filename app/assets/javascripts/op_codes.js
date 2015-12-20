OpCodes = {};
OpCodes.data = {};
OpCodes.data.compiledTemplates = {};

$(document).ready(function () {
    var model = new OpCodes.MainModel();
    var view = new OpCodes.MainView({model: model});
    $(this).find('body').append(view.render());
});