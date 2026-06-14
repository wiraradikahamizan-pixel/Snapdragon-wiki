function render(list){
  const c = document.getElementById("content");
  c.innerHTML = "";

  list.forEach(x=>{
    c.innerHTML += `
      <div class="card">
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
      </div>
    `;
  });
}

function filter(type){
  if(type === "all") return render(DB);
  render(DB.filter(x => x.cat === type));
}

function search(){
  let q = document.getElementById("search").value.toLowerCase();
  render(DB.filter(x => x.name.toLowerCase().includes(q)));
}

// init
render(DB);
