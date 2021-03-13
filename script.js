var titleObj = document.getElementById('title')
var descriptionObj = document.getElementById('description')
var posterObj = document.getElementById('poster')
var inputObj = document.getElementById('input')
var buttonObj = document.getElementById('button')


buttonObj.onclick = newSearch
inputObj.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
      newSearch()
    }
});


function newSearch() {
    let search = inputObj.value
    search = search.split(' ').join('+')
    fetch('http://api.tvmaze.com/search/shows?q=' + search)
        .then(results => results.json())
        .then(data => {
            console.log(data[0].show)
            titleObj.innerHTML = data[0].show.name
            descriptionObj.innerHTML = data[0].show.summary
            posterObj.src = data[0].show.image.medium
        })
}