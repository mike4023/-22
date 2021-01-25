scene.onOverlapTile(SpriteKind.Player, img`
    
`, function on_overlap_tile(sprite: Sprite, location: tiles.Location) {
    game.over(true)
})
let mycorg = corgio.create(SpriteKind.Player)
mycorg.horizontalMovement()
mycorg.verticalMovement()
mycorg.updateSprite()
mycorg.follow()
tiles.setTilemap(tilemap`
    level
`)
