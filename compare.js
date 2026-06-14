function runCompare(){
  const a = getChip(document.getElementById("a").value);
  const b = getChip(document.getElementById("b").value);

  const winner = a.score > b.score ? a.name : b.name;

  document.getElementById("result").innerHTML = `
    <div class="card">
      <p>${a.name} (${a.score}) vs ${b.name} (${b.score})</p>
      <b>Winner: ${winner}</b>
    </div>
  `;
}
