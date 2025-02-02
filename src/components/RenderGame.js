import React, { useEffect } from 'react'
import Phaser from "phaser";

import exampleConfig from '../phaser/ExampleGame'

const RenderGame = ({ config }) => {
  console.log(config)
  useEffect(() => {
    const game = new Phaser.Game(config);

    return () => {
      game.destroy(true);
    }
  }, [config])

  return (
    <div id="phaser-container" />
  )
}

export default RenderGame
