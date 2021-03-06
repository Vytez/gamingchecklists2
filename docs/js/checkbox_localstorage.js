// Function to store checkbox state, given a key (identifying the checkbox in question) and a value.
// If the value provided is "true" - ie the checkbox state is selected, we store that information in local storage.
// if the value provided is "false" - ie the checkbox state is unselected, we clear any relevant stored information from local storage.
(function ($) {
    $.storeCheckboxState = function (key, value) {

        // If key and value are provided, set value in local storage.
        if (arguments.length > 1 && (!/Object/.test(Object.prototype.toString.call(value)) || value === null || value === undefined)) {
            value = String(value);
            window.localStorage.setItem(key, value);
        }
    };
})(jQuery);

(function ($) {
    $.retrieveCheckboxState = function(key) {
        return(window.localStorage.getItem(key) === 'true')
    }
})(jQuery);

$(document).ready(function () {
    var checkbox = $('.task-list-item').find(':checkbox'), checkboxLocalStorageName = 'checkbox-state';

    checkbox.each(function () {
        $(this).prop('checked', $.retrieveCheckboxState(checkboxLocalStorageName + '|' + $(this).attr('id')));
    });

    checkbox.click(function () {
        $.storeCheckboxState(checkboxLocalStorageName + '|' + $(this).attr('id'), $(this).prop('checked'));
    });
});
