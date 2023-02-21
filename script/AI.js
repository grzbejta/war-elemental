class Ai {
	constructor() {
		let _selectionAi = '';
		this.getSelectionAi = () => _selectionAi;
		this.setSelectionAi = selectionAi => {
			return (_selectionAi = selectionAi);
		};
	}
	generatorSelectionAi() {
		switch (Math.floor(Math.random() * 5)) {
			case 0:
				return 'fire';
			case 1:
				return 'grass';
			case 2:
				return 'ice';
			case 3:
				return 'ground';
			case 4:
				return 'rock';
		}
	}
}
