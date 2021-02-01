let pokemonList = [
  {
    name: 'Bulbasaur',
    height: 2.04,
    type: ['grass', 'poison'],
  },
  {
    name: 'Charizard',
    height: 7.07,
    type: ['fire','flying'],
  },
  {
    name: 'Butterfree',
    height: 3.07,
    type: ['bug','flying'],
  },
];
// This is a for loop that iterates over each item in the pokemonList
for (let i=0; i < pokemonList.length; i++){
  if (pokemonList[i].height <5 && pokemonList[i].height >2){
    document.write('<br>' + pokemonList[i].name + ' height is ' + pokemonList[i].height );
  }else if (pokemonList[i].height >7){
    document.write('<br>' + pokemonList[i].name + ' height is ' + pokemonList[i].height
    + ', Wow that is one big Pokemon');
  }
}
