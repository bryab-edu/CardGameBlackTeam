function playerHit() {
  const card = deck.pop();
  playerHand.push(card);  
  playerSum = handVal(playerHand);
  if (playerSum == 21) {
    status = "won";
  }
  else if (sum > 21) {
    status = "lost, player bust"; 
}
function dealerHit() {
  const card = deck.popcard(); 
  dealerHand.push(card); 
  dealerSum = handVal(dealerHand); 
  while (dealerSum < 17) { // dealer hits aslong as <17 
    dealerHand.push(card); 
    dealerSum = handVal(dealerHand); 
  }
  if (dealerSum == playerSum) { // tie game 
    status = "tie"; 
  }
  else if (dealerSum > 21) { // dealer busted 
    status = "won, dealer bust"; 
  }
  else if (playerSum < aiSum) { // if dealers hand is stronger than players 
    status = "player lost"; 
  }
}
