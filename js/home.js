const data = '../data/data.json';

window.onload = function() {
    const listProperties = document.querySelector('.js-list-properties');
    fetch(data)
        .then((res) => res.json())
        .then((data) => {
            populateView(data, listProperties)
        })
        .catch(err => console.log(err));
}


function populateView(data, target) {
    if (!data) return;

    const html = data.map(item => {
        return setCard(item);
    }).reduce((total, item) => {
        return total + item;
    }, '');


    target.innerHTML = html;
}


function setCard(data) {
    return `<div class="block-container">
            <div class="block">
                <img src="${data.photo}" alt="${data.name}">
                <div class="block-details">
                    <h2 class="title">${data.name}</h2>
                    <h2 class="title">${data.address}</h2>
                    <p>R$ ${data.price}</p>
                </div>

                <div class="actions">
                    <button class="btn-default book"><a class="link-default" href="https://maps.google.com/?q=${data.address}" target="_blank">Localização</a></button>
                </div>
            </div>
        </div>`;
}