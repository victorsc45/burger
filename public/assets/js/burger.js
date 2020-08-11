$(function () {
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#newburger').val().trim(),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then(function () {
            console.log("Added new burger");
            location.reload();
        });
    });
    $('.eatburger').on('click', function (event) {
        event.preventDefault();
        let id = $(this).data('id');
        let isdevoured = {
            devoured: 1
        };
        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: isdevoured
        }).then(function () {
            console.log("ate a burger");
            location.reload();
        });
    });
    $('#trashburger').on('click', function () {
        event.preventDefault();
        let id = $(this).data('id');
        $.ajax({
            type: "DELETE",
            url: "/api/burgers/" + id
        }).then(location.reload());
    });
});