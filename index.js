$(document).ready(function () {
    $("#submitBtn").click(function () {
        var name = $("#nameInput").val();
        if (name !== "") {
            alert("Hello, " + name + "! Welcome to our website.");
        } else {
            alert("Please enter your name.");
        }
    });
});
$(document).ready(function () {
    $('.card-container').hover(function () {
        $('.hidden-card').css({
            opacity: 0.86,
        }, 'ease-in');
        $('.hidden-card span', '.hidden-card h4', 'hidden-card button').css({
            color: "red"
        })
    }, function () {
        $('.hidden-card').css({
            opacity: 0.5
        }, 'ease-in');
        $('.hidden-card span', '.hidden-card h4', 'hidden-card button').css({
            color: "black",
            transition: "color 2s ease-in"
        })
    });
});
function showImage(imageId) {
    var images = document.querySelectorAll('.image-container');
    images.forEach(function (image) {
        image.classList.remove('image-active');
    });
    var selectedImage = document.getElementById(imageId);
    selectedImage.classList.add('image-active');
}
$(document).ready(function () {
    $('.col div').click(function () {
        // Remove background color and text color from all divs
        $('.col div').css({
            'background-color': '',
            'color': '',
        });

        // Set background color and text color for the clicked div
        $(this).css({
            'background-color': '#FF3147', // Example background color
            'color': '#ffffff',
        });
    });
});
$(document).ready(function () {
    $('.box').hover(function () {
        $(this).css('box-shadow', ' 3px 6px 20px #672C2C1F');
    }, function () {
        $(this).css('box-shadow', '');
    });
});