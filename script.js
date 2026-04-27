let tools = [
  {
    name: "Laser Distance",
    desc: "Used for measuring long distances accurately",
    image: "images/laser-distance.jpg"
  },
  {
    name: "Laser Level",
    desc: "Used for leveling using laser projection",
    image: "images/laser-level.jpg"
  },
  {
    name: "Hammer",
    desc: "Used for driving nails",
    image: "images/hammer.jpg"
  }
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

/* RENDER */
function render(list) {
  grid.innerHTML = "";

  list.forEach((tool, index) => {
    grid.innerHTML += `
      <div class="card">
        <img src="${tool.image}">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>

        <button class="save-tool-btn" onclick="saveSingleTool(${index})">
          💾 Save
        </button>
      </div>
    `;
  });
}

/* SEARCH */
search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(value)
  );

  render(filtered);
});

/* SAVE SINGLE TOOL */
function saveSingleTool(index) {
  const tool = tools[index];

  const data = JSON.stringify(tool, null, 2);

  const blob = new Blob([data], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = tool.name.replace(/\s+/g, "-").toLowerCase() + ".json";
  a.click();

  URL.revokeObjectURL(url);
}

/* INIT */
render(tools);
