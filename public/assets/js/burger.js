// ready function for js file
$(function () {
    //handle click event for creating a new burger to database and view
    $('.create-form').on('submit', function (event) {
        event.preventDefault();

        let newBurger = {
            burger_name: $('#newburger').val().trim(),
            devoured: 0
        };
        $.ajax('/api/burgers', {
            type: "POST",
            data: newBurger
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
    //handle click event to update a burger to devoured in view and database
    $('.devour-burger').on('click', function (event) {
        event.preventDefault();
        let id = $(this).data('id');
        let isdevoured = {
            devoured: 1
        };
        $.ajax('/api/burgers/' + id, {
            type: "PUT",
            data: isdevoured
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        });
    });
    // handle click event to delete a burger from view and database
    $(".delete-burger").on("click", function (event) {
        event.preventDefault();
        var id = $(this).data("id");
        // Send the DELETE request.
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(() => {
            // Reload the page to get the updated list
            location.reload();
        }
        );
    });
});