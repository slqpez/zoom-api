fetch("https://rickandmortyapi.com/api/character").then((response) => {
  response.json().then((data) => {
    console.log(data.results);
  });
});
