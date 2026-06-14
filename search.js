function handleSearch(){
  const q = document.getElementById("search").value.toLowerCase();

  const res = DB.filter(x =>
    x.name.toLowerCase().includes(q) ||
    x.cat.includes(q) ||
    x.usage.toLowerCase().includes(q)
  );

  renderList(res);
}

function filterCat(cat){
  renderList(DB.filter(x => x.cat === cat));
}

function showRanking(){
  renderList([...DB].sort((a,b)=>b.score-a.score));
}
