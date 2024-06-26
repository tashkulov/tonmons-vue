import { Scene } from 'phaser';

export class GameOverScene extends Scene {
    constructor() {
        super("GameOverScene");
    }

    preload(){
        this.load.image("backgroundWin", "public/assets/GameOverScene/WinBackground.jpg");
        this.load.image("backgroundLose", "public/assets/GameOverScene/LoseBackground.jpg");
    }

    create(data) {
        if (data.message === "You Win!") {
            this.add.image(512, 384, "backgroundWin");
        } else if(data.message === 'You Lose!') {
            this.add.image(512, 384, "backgroundLose").setScale(1.5);
        }

        // Добавляем текст с сообщением
        this.add.text(400, 300, data.message, { fontSize: '94px', fill: '#000' }).setOrigin(0.5);

        // Добавляем кнопку "Play Again"
        const playAgainButton = this.add.text(512, 500, 'Play Again', {
            fontSize: '32px',
            fill: '#ffffff',
            backgroundColor: '#000000',
            padding: {
                x: 20,
                y: 10
            }
        }).setOrigin(0.5);

        // Добавляем обработчик события для кнопки "Play Again"
        playAgainButton.setInteractive();
        playAgainButton.on('pointerdown', () => {
            this.scene.start('Fight'); // Переход к сцене "Fight"
        });
    }
}
