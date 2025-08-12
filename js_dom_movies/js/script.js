/* Tasks for the lesson:

1)Remove all advertisement blocks from the page (right side of the site).

2)Change the movie genre — replace "comedy" with "drama".

3)Change the background of the movie poster to the image "bg.jpg". It is located in the img folder.
Implement this only using JavaScript.

4)Generate the movie list on the page based on the data from this JavaScript file.
Sort them alphabetically.

5)Add numbering to the displayed movies. */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'),
    genre = poster.querySelector('.promo__genre'),
    movieList = document.querySelector('.promo__interactive-list');

/**
 * 1)Remove all advertisement blocks from the page (right side of the site).
 */
adv.forEach(item => item.remove());

/**
 * 2)Change the movie genre — replace "comedy" with "drama".
 */
genre.textContent = "драма";

/**3)Change the background of the movie poster to the image "bg.jpg". It is located in the img folder.
Implement this only using JavaScript. */
poster.style.backgroundImage = `url('../img/bg.jpg')`

/**
 * 4)Generate the movie list on the page based on the data from this JavaScript file.
Sort them alphabetically.
 */
movieList.innerHTML = '';
movieDB.movies.sort();

/**
 * 5)Add numbering to the displayed movies.
 */

movieDB.movies.forEach((film, index) => {
    movieList.innerHTML += `<li class="promo__interactive-item">${index + 1}.${film}
                            <div class="delete"></div>
                        </li>`
})
