$(document).ready(function () {
    function linkToGallery(link, dest) {
        $("#" + link).click(function () {

            $("#" + dest).trigger('click');

        });
    };

    linkToGallery("sketch-link", "sketch-img");
    linkToGallery("level-design-link", "level-design-img");



});