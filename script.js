let tools = [
  {
    name: "Hammer",
    desc: "Used for driving nails",
    image: "https://i.imgur.com/hammer.jpg"
  },
  {
    name: "Hand Saw",
    desc: "Used for cutting wood",
    image: "https://i.imgur.com/saw.jpg"
  }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function render(list) {
  grid.innerHTML = "";

  list.forEach(t => {
    grid.innerHTML += `
      <div class="card">
        <img src="${t.image}">
        <h3>${t.name}</h3>
        <p>${t.desc}</p>
      </div>
    `;
  });
}

function addTool() {
  const name = document.getElementById("name").value;
  const desc = document.getElementById("desc").value;
  const image = document.getElementById("image").value;

  if (!name) return;

  tools.push({ name, desc, image });

  render(tools);
}

search.addEventListener("input", () => {
  let value = search.value.toLowerCase();

  let filtered = tools.filter(t =>
    t.name.toLowerCase().includes(value)
  );

  render(filtered);
});

render(tools);
