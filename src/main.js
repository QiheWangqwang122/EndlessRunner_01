/******
 * First Name : Qihe(Jason)
 * Last Name : Wang
 * Hours : 40 (TO MUCH BUGSSSSSSSSSSSSSSSSSSSS)
 * Credit example 1
 * Background music from PlayOnLoop.com
 * Licensed under Creative Commons by Attribution 4.0
 * 
 * Technical Creative Tilts:
 * Throughout the game, especially noted in Play.js, 
 * I employed a dynamic generation technique for obstacles and collectibles, 
 * like stars and clouds. This not only randomizes the player's experience each time they play but also optimizes performance 
 * by reusing objects within the game's world, enhancing the technical sophistication of the project.
 * Adaptive Difficulty Level: In the Play.js file, 
 * I introduced an adaptive difficulty system that increases the game's challenge 
 * by adjusting the speed of obstacles and enemies based on the player's survival time. 
 * This method keeps the gameplay engaging and challenging, 
 * encouraging players to improve their skills over time
 * Visual Creative Tilts:

 * Custom Art and Animation: The visual elements of the game, 
 * including characters, obstacles, and the game environment, 
 * were meticulously designed using "aseprite" and "TexturePacker," 
 * as mentioned in Acknowledgment.js. The use of custom spritesheets 
 * for the player character, showcased through multiple animations 
 * for running and jumping, provides a unique visual style that sets our game apart.
 * Visual creativity is further exemplified in the Menu.js and GameOver.js scenes, where interactive elements guide players through the game's narrative and feedback loop. 
 * The visual feedback during menu navigation and the game over sequence enriches the player's experience, ensuring that even moments of failure are engaging.

 */

'use strict';
const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: [Menu,Play,GameOver,GameDescribe,Acknowledgment]  // assuming you have a Menu scene as well
  };
  
  const game = new Phaser.Game(config);
  let level;
  let newHighScore = false;
  let highScoreText ;
  let cursors;