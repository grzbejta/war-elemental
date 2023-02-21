class Game {
  constructor() {
    this.player = new Player();
    this.ai = new Ai();
    this.draw = new Draw();

    document
      .getElementById("play")
      .addEventListener("click", this.gameStart.bind(this));

    document.querySelectorAll("[data-option]").forEach((item) => {
      item.addEventListener("click", (e) => {
        this.player.setSelectionPlayer(e.target.dataset.option);
        this.render(this.player.getSelectionPlayer());
      });
    });
  }

  render(
    selectionPlayer = "",
    selectionAi = "",
    result = "",
    numbers = this.draw.getNumbers(),
    loses = this.draw.getLoses(),
    wins = this.draw.getWins(),
    draws = this.draw.getDraws()
  ) {
    document.querySelectorAll("[data-option]").forEach((item) => {
      if (item.dataset.option === this.player.getSelectionPlayer()) {
        item.style.border = "6px solid #6fc763";
      } else {
        item.style.border = "";
      }

      document.querySelector(`[data-summary="your-choice"]`).textContent =
        this.player.getSelectionPlayer();
      document.querySelector(`[data-summary="ai-choice"]`).textContent =
        selectionAi;

      document.querySelector(`[data-summary="who-win"]`).textContent = result;

      document.querySelector(`.numbers span`).textContent = numbers;
      document.querySelector(`.losses span`).textContent = loses;
      document.querySelector(`.wins span`).textContent = wins;
      document.querySelector(`.draws span`).textContent = draws;
    });
  }
  cleane() {
    this.player.setSelectionPlayer("");
    this.ai.setSelectionAi("");
    document
      .querySelectorAll("[data-option]")
      .forEach((item) => (item.style.border = ""));
  }
  gameStart() {
    if (!this.player.getSelectionPlayer()) return alert("Wybierz swój żywioł");
    this.ai.setSelectionAi(this.ai.generatorSelectionAi());
    const ktowygral = Result.gameLog(
      this.player.getSelectionPlayer(),
      this.ai.getSelectionAi()
    );
    this.draw.howWin(ktowygral);
    this.render(
      this.player.getSelectionPlayer(),
      this.ai.getSelectionAi(),
      Result.howWin(ktowygral),
      this.draw.getNumbers(),
      this.draw.getLoses(),
      this.draw.getWins(),
      this.draw.getDraws()
    );

    this.cleane();
  }
}
