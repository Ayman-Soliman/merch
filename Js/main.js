let countryBtns = document.querySelectorAll('ul li a.nav-link');
let shirtCards = document.querySelectorAll('.shirt-card');

countryBtns.forEach(e => {
    e.addEventListener('click', (el) => {
        countryBtns.forEach(ele => {
            ele.classList.remove('active');
        });
        el.target.classList.add('active');

        shirtCards.forEach(card => {
            if (card.getAttribute('data-country') === el.target.id) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

let searchInput = document.getElementById('search-input');
let searchBtn = document.getElementById('search-btn');
let shirts = document.querySelectorAll('.shirt-card .card-body');

searchBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (searchInput.value !== '') {
        let searchInputVal = searchInput.value;
        let regex = new RegExp(`${searchInputVal}`, 'gi');

        let i = 0;
        shirts.forEach(shirt => {
            let cardContent = shirt.children[0].innerHTML + ' ' + shirt.children[1].innerHTML;
            if (cardContent.match(regex) !== null) {
                shirt.parentElement.style.display = 'flex';
            } else {
                shirt.parentElement.style.display = 'none';
                ++i;
            }
        });
        if (i === shirts.length) {
            let activeCountryId = document.querySelector('ul li a.nav-link.active').getAttribute('id');
            shirtCards.forEach(card => {
                if (card.getAttribute('data-country') === activeCountryId) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
            const toastLiveExample = document.getElementById('liveToast');
            const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample);
            toastBootstrap.show();
        }
    }
});

searchInput.addEventListener('search', () => {
    if (searchInput.value === '') {
        let activeCountryId = document.querySelector('ul li a.nav-link.active').getAttribute('id');
        shirtCards.forEach(card => {
            if (card.getAttribute('data-country') === activeCountryId) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
searchInput.addEventListener('input', () => {
    if (searchInput.value === '') {
        let activeCountryId = document.querySelector('ul li a.nav-link.active').getAttribute('id');
        shirtCards.forEach(card => {
            if (card.getAttribute('data-country') === activeCountryId) {
                card.style.display = 'flex';
            } else {
                card.style.display = 'none';
            }
        });
    }
});
