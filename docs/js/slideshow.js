$(document).ready(function () {

    showPhotos();

    function showPhotos() {

        var i;
        var slides = $('.photo img');
        console.log(slides);

        for (i = 0; i < slides.length; i++) {
            console.log(i);
            $(slides[i]).hide();
        }
    }
});