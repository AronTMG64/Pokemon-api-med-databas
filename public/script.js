fetchPokemons();

async function fetchPokemons() {
  const res = await fetch('/api/pokemons');
  const data = await res.json();
  drawPokemons(data);
  attachFilterListener(data);
};

function drawPokemons(data) {
  const parent = document.querySelector('#parent');

  parent.innerHTML = data.map(item => `
    <div class="card">
      <h1>${item.name}</h1>
    </div>
  `).join('');
};

function attachFilterListener(data) {
  const searchBtn = document.querySelector('#search-btn');

  searchBtn.addEventListener('click', e => {
    e.preventDefault();
    const searchInput = document.querySelector('#search-input').value;
    const filteredData = data.filter(item => item.name.includes(searchInput));
    drawPokemons(filteredData);
  });
};