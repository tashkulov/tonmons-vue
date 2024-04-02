import { EventBus } from '../EventBus';
import { Scene } from 'phaser';

export class Scene1 extends Scene
{
    constructor ()
    {
        super('Game');
    }
    preload(){
        this.load.image("background", "public/assets/onepiece1.jpg");
        
    }


    create ()
    {
        this.cameras.main.setBackgroundColor(0x00ff00);
        this.add.text(512, 384, 'Welcome to \n Supernaturals!!!', {
            fontFamily: 'Arial Black', fontSize: 64, color: '#ffffff',
            stroke: '#000000', strokeThickness: 8,
            align: 'center'
        }).setOrigin(0.5).setDepth(100);
        this.add.image(512, 384, 'background').setAlpha(0.5).setScale(1.5);

        

        EventBus.emit('current-scene-ready', this);
    }

    changeScene ()
    {
        
        this.scene.start('GameOver');
    }
}