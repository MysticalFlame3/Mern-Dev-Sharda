document.getElementById('fetchData').addEventListener('click', () => {
    fetch('https://randomfox.ca/floof/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('data').innerHTML = `<img src="${data.image}" alt="Random Fox">`;
        })
        .catch(error => {
            document.getElementById('data').textContent = 'Failed to fetch the image.';
        });
});