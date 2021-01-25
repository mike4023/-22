// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level":
            case "level":return tiles.createTilemap(hex`1400080000000000000000000000000000000000000000030000000000000000000000000000000000000003000000000000000000000000000000000000000300000000000000000000000000020202000000030000000000000000000000000000000000000003000101010101010000010101010101010101000300000000000000000000000000000000000000030101010101010101010101010101010101010103`, img`
. . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . . . . . . . 2 
. . . . . . . . . . . . . 2 2 2 . . . 2 
. . . . . . . . . . . . . . . . . . . 2 
. 2 2 2 2 2 2 . . 2 2 2 2 2 2 2 2 2 . 2 
. . . . . . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.builtin.oceanDepths0,sprites.builtin.forestTiles0,sprites.builtin.brick], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
