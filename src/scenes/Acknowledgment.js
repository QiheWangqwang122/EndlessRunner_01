
class Acknowledgment extends Phaser.Scene {
    constructor() {
        super('acknowledgmentScene');
    }

    create() {

        this.add.text(20, 20, 'Credit', { fontSize: '32px', fill: '#FFF' });
        // this.add.text(20, 60, 'Controls:', { fontSize: '24px', fill: '#FFF' });
        let creditText = [

            "\n\nProducer:          JASON WANG",
            "\nArt Software:      aseperite, texturePacker",
            "\nMusic Sources:     https://pixabay.com/",
            // "\n              freesound.org. (2023, 12/14 ). freesound. Retrieved from [https://freesound.org/search/?q=cite]"
        ]

        this.add.text(20, 150, creditText, {
            fontSize: '20px',
            fill: '#FFF',
            zIndex: 1000
        })

        this.add.text(200, 500, 'Press R to return to the Menu', { fontSize: '20px', fill: '#FFF' })
            .setInteractive()
            .on('pointerdown', () => this.scene.start('menuScene'));

        this.input.keyboard.on('keydown-R', () => this.scene.start('menuScene'));
    }
}
