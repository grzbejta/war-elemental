class Result {
  static gameLog(selectionPlayer, selectionAi) {
    if (
      (selectionPlayer === "fire" && selectionAi === "ice") ||
      (selectionPlayer === "fire" && selectionAi === "grass") ||
      (selectionPlayer === "grass" && selectionAi === "rock") ||
      (selectionPlayer === "grass" && selectionAi === "ground") ||
      (selectionPlayer === "rock" && selectionAi === "ice") ||
      (selectionPlayer === "rock" && selectionAi === "fire") ||
      (selectionPlayer === "ice" && selectionAi === "ground") ||
      (selectionPlayer === "ice" && selectionAi === "grass") ||
      (selectionPlayer === "ground" && selectionAi === "fire") ||
      (selectionPlayer === "ground" && selectionAi === "rock")
    ) {
      return "+";
    } else if (selectionPlayer === selectionAi) {
      return "/";
    } else {
      return "-";
    }
  }

  static howWin(number) {
    switch (number) {
      case "-":
        return "Przegrałes";
      case "+":
        return "Wyrałeś";
      case "/":
        return "Remis";
    }
  }
}
