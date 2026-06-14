const list = document.getElementById("list");
const content = document.getElementById("content");

function renderList(data){
  list.innerHTML = "";

  data.forEach(x=>{
    const div = document.createElement("div");
    div.className = "item";
    div.innerText = x.name;

    div.onclick = () => showDetail(x.id);

    list.appendChild(div);
  });

  fillCompare();
}

function showDetail(id){
  const d = getChip(id);
  location.hash = id;

  content.innerHTML = `
    <div class="card">
      <h2>${d.name}</h2>
      <p><b>Category:</b> ${d.cat}</p>
      <p><b>Score:</b> ${d.score}</p>
      <p><b>Usage:</b> ${d.usage}</p>
    </div>
  `;
}

function fillCompare(){
  const a = document.getElementById("a");
  const b = document.getElementById("b");

  a.innerHTML = "";
  b.innerHTML = "";

  DB.forEach(x=>{
    a.innerHTML += `<option value="${x.id}">${x.name}</option>`;
    b.innerHTML += `<option value="${x.id}">${x.name}</option>`;
  });
}

// init
renderList(DB);
fillCompare();
