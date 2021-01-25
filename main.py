def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player, img("""
    
"""), on_overlap_tile)

mycorg = corgio.create(SpriteKind.player)
mycorg.horizontal_movement()
mycorg.vertical_movement()
mycorg.update_sprite()
mycorg.follow()
tiles.set_tilemap(tilemap("""
    level
"""))