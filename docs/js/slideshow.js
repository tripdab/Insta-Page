$(document).ready(function () {

    var slideIndex = 0;

    showPhotos();

    function showPhotos() {

        var i; // переменная для индекса
        var slides = $('.photo img'); // переменная для всех фотографий с классом .photo img

        // Запускаем цикл для скрытия фотографий
        for (i = 0; i < slides.length; i++) {
            $(slides[i]).hide();
        }

        slideIndex++;
        if (slideIndex > slides.length) { // Проверка: если индекс больше длины масива ...
            slideIndex = 1; // ... сбрасываем индекс до 1
        }
        $(slides[slideIndex - 1]).show(); // один минус один равно ноль  - т.е. вернулись к первому фото
        setTimeout(showPhotos, 1000); // фотка меняется каждую секунду
    }
});