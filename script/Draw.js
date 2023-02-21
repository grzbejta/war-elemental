class Draw {
     constructor(){
        let _numbers = 0;
         this.getNumbers = () => _numbers;
        this.setNumbers = () => ++_numbers;
         
        let _wins = 0;
        this.getWins = () => _wins;
        this.setWins = () => ++_wins;
         
        let _loses = 0;
        this.getLoses = () => _loses;
        this.setLoses = () => ++_loses;
         
        let _draws = 0;
        this.getDraws = () => _draws;
        this.setDraws = () => ++_draws;    
    }
    
    howWin(value){
          switch (value){
            case "-": this.setLoses();this.setNumbers(); break;
            case "+": this.setWins();this.setNumbers(); break; 
            case "/": this.setDraws();this.setNumbers(); break;
              default: alert("nie ma takiego znaku ");
    }
    }
    
}