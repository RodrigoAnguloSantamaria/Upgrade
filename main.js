let count = 0;

function cc(card) {
  // Cambia solo el código debajo de esta línea
  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count += 1;
      return
      break;
    case 7:
    case 8:
    case 9:
      count +=0;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count -=1;
      break;
  }
  if (count > 0){
    let bet=count + " Bet";
    return bet;
  }
  else{
    let hold=count + " Hold";
    return hold;
  }

  return "Change Me";
  // Cambia solo el código encima de esta línea
}

cc(2); cc(3); cc(4); cc('K'); cc('Q');