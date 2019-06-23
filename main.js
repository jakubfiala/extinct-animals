const animalImage = document.getElementById('animal-image');
const animalName = document.getElementById('animal-name');

/**
 * Shuffles array in place. ES6 version
 * @param {Array} a items An array containing the items.
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

const sleep = async (ms) => new Promise((resolve, reject) => {
    setTimeout(() => resolve(), ms);
});

const getData = async () => {
    const response = await fetch('data/extinct-animals.imgonly.json');
    return await response.json();
};

const displayAnimal = async animal => {
    animalImage.src = `data/images/${animal.image.split('/').pop()}`;
    animalName.innerText = animal.name;
}

const init = async () => {
    const data = await getData();
    shuffle(data);

    for (let animal of data) {
        await displayAnimal(animal);
        await sleep(3000);
    }
};

init();
