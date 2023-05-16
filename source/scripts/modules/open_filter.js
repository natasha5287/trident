const filterOpen = document.querySelector('#openfilter');
const filterClose = document.querySelector('.form__close');
const filterForm = document.querySelector('.catalog__form');

if (filterOpen) {
    filterOpen.addEventListener('click', function () {
        filterForm.classList.add('opened');
    })

    filterClose.addEventListener('click', () => {
        filterForm.classList.toggle('opened');
    })
}


