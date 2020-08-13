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

    $(".trashburger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");

        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});