
const result = fetch("https://ghibliapi.herokuapp.com/films")
    .then(data => data.json())
    .then(res => scrollTitles(res))
