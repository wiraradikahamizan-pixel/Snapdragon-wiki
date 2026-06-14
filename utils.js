function getChip(id){
  return DB.find(x => x.id === id);
}
