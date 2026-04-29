const tools = [
  {
  name: "Laser Distance",
  desc: "Used for measuring long distances accurately using laser technology",
  image: "laser-distance.jpg"
},
{
  name: "Laser Level",
  desc: "Used for checking level alignment using laser projection",
  image: "https://i.imgur.com/JH6ln6Y.png"
},
{
  name: "Hose Level",
  desc: "Used for leveling using water hose system",
  image: "https://i.imgur.com/NhPRDwA.jpeg"
},
{
  name: "Metal Screw",
  desc: "Used for fastening metal materials securely",
  image: "https://i.imgur.com/A65O8Vw.jpeg"
},
{
  name: "Nail Gun",
  desc: "Used for fast driving of nails into materials",
  image: "https://i.imgur.com/lDcZHMy.jpeg"
},
{
  name: "Metal Tape",
  desc: "Used for measuring metal or construction materials",
  image: "https://i.imgur.com/ll7zClG.jpeg"
},
{
  name: "Metal Punch",
  desc: "Used for marking or punching metal surfaces",
  image: "https://i.imgur.com/CsctAJz.jpeg"
},
{
  name: "Concrete Nail",
  desc: "Used for fastening into concrete surfaces",
  image: "https://i.imgur.com/B6DkOS5.jpeg"
},
{
  name: "Hand Riveter",
  desc: "Used for installing rivets manually",
  image: "https://i.imgur.com/rbzLpqd.jpeg"
},
{
  name: "Blind Rivets",
  desc: "Used for joining materials where only one side is accessible",
  image: "https://i.imgur.com/oGBYJPn.jpeg"
},
{
  name: "Metal Shears",
  desc: "Used for cutting metal sheets",
  image: "https://i.imgur.com/YHYeO0Q.jpeg"
},
{
  name: "Long Nose Pliers",
  desc: "Used for gripping small objects in tight spaces",
  image: "https://i.imgur.com/sF9J1EO.jpeg"
},
{
  name: "Pencil Sharpener",
  desc: "Used for sharpening marking pencils",
  image: "https://i.imgur.com/Wj4nwJY.png"
},
{
  name: "Battery Pack",
  desc: "Portable power source for cordless tools",
  image: "https://i.imgur.com/bvzV0pY.jpeg"
},
{
  name: "Cutter",
  desc: "Used for cutting materials like plastic or wires",
  image: "https://i.imgur.com/8DyTKiS.jpeg"
},
{
  name: "Gloves",
  desc: "Protective hand gear for safety",
  image: "https://i.imgur.com/WPgVerr.jpeg"
},
{
  name: "Cladding",
  desc: "Material used for covering walls or structures",
  image: "https://i.imgur.com/OKV7omT.jpeg"
},
{
  name: "Chalk Line Reel or Pitik",
  desc: "Used for drawing straight lines over long distances",
  image: "https://i.imgur.com/GEEIHd7.jpeg"
},
{
  name: "Plumb Bob or Tonton",
  desc: "Used to check vertical alignment",
  image: "https://i.imgur.com/z95GMte.jpeg"
},
{
  name: "Vise Grip",
  desc: "Locking pliers used for clamping objects",
  image: "https://i.imgur.com/FitAU1a.jpeg"
},
{
  name: "Cordless Drill or Power Drill",
  desc: "Battery-powered drilling tool",
  image: "https://i.imgur.com/mvDA2Wa.jpeg"
},
{
  name: "Caulking Gun",
  desc: "Used for applying sealant or caulk materials",
  image: "https://i.imgur.com/AxJNVib.png"
}
];

const grid = document.getElementById("grid");
const search = document.getElementById("search");

function render(list) {
  grid.innerHTML = "";

  list.forEach(tool => {
    grid.innerHTML += `
      <div class="card">
        <img src="${tool.image}" alt="">
        <h3>${tool.name}</h3>
        <p>${tool.desc}</p>

        <button class="save-img-btn" onclick="saveImage('${tool.image}', '${tool.name}')">
          💾 Save Image
        </button>
      </div>
    `;
  });
}

function saveImage(imageUrl, name) {
  const a = document.createElement("a");
  a.href = imageUrl;
  a.download = name.replace(/\s+/g, "-").toLowerCase() + ".jpg";
  a.click();
}

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();

  const filtered = tools.filter(t =>
    t.name.toLowerCase().includes(value)
  );

  render(filtered);
});

render(tools);
