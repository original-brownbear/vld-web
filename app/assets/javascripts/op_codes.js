OpCodes = {};
OpCodes.data = {};
OpCodes.data.compiledTemplates = {};

$(document).ready(function () {
    $.ajaxSetup({
        headers: {
            'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')
        }
    });
    var model = new OpCodes.MainModel();
    var view = new OpCodes.MainView({model: model});
    $(this).find('body').append(view.render());
});