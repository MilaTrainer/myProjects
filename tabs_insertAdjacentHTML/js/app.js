const arryDate = [
    {
        titel: 'Mexico',
        text: ' Mexico allows students to explore this exciting country. From its culture and celebrations to its various landforms and animal life, Mexico has many interesting things for students to learn about.Maps and photographs support the text.'
    },
    {
        titel: 'Morocco',
        text: ' Located on the northwest coast of Africa, Morocco is a country that is both ancient and modern. Students can learn about its fascinating culture, as well as its land, people, and history.'

    },
    {
        titel: 'Japan',
        text: 'In Japan, students learn about the interesting people, vibrant cities, and diverse landforms that make up this country. They also explore Japanese culture by studying the countrys history, common foods, and popular celebrations.'
    }

]

window.addEventListener('DOMContentLoaded', () => {
    const tabContainer = document.querySelector('.nav-tabs');
    const blockContainer = document.querySelector('.wrapper__div');

    // function getArray(array) {
    //     array.forEach((item) => {
    //         // формировать разметку и закидывать ее в Wraper
    //         // куда / что- HTML как текст / (куда - after begin- в самое начало, before-end- в конец )
    //         tabContainer.insertAdjacentHTML('afterbegin', `
    //             <li class="nav-item">
    //             <a class="nav-link" aria-current="page" href="#">${item.titel}</a>
    //         </li>`)
    //         blockContainer.insertAdjacentHTML('afterbegin', `
    //             <div class="info-item active">
    //             <h2>${item.titel}</h2>
    //             <p>${item.text} </p></div>`) }) return}
    // getArray(arryDate);

    arryDate.forEach(item => {// формировать разметку и закидывать ее в Wraper
        // куда / что- HTML как текст / (куда - after begin- в самое начало, before-end- в конец )
        tabContainer.insertAdjacentHTML('beforeend', `
                <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#">${item.titel}</a>
            </li>`);

        blockContainer.insertAdjacentHTML('beforeend', `
                <div class="info-item active">
                <h2>${item.titel}</h2>
                <p>${item.text} </p></div>`);
    });

    const tabs = Array.from(document.querySelectorAll('.nav-link'));
    const infoBlocks = Array.from(document.querySelectorAll('.info-item'));
    tabContainer.addEventListener('click', (e) => {
        if (e.target.matches('.nav-link')) {
            tabs.forEach(tab => tab.classList.remove('active'));
            e.target.classList.add('active');
            const indexTab = tabs.indexOf(e.target);
            // как изменить
            infoBlocks.forEach(block => block.classList.remove('active')
            );
            infoBlocks[indexTab].classList.add('active');

            // arryDate.titel.forEach(block => block.classList.remove('active'));
            // arryDate.titel[indexTab].classList.add('active');
        }
    })
})