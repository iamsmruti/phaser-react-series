import Phaser from "phaser";
import Example from "./scenes/Example";

const config = {
  type: Phaser.AUTO,
  parent: "phaser-container",
  width: 800,
  height: 600,
  scene: Example,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { y: 200 }
    }
  }
};

export default config;
