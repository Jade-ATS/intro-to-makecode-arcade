controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(50, 69)
    mySprite.sayText("\"...Where is everyone?\"")
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundColor(15)
    music.stopAllSounds()
    game.showLongText("Don't be scared.", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.startEffect(effects.fire, randint(100, 600))
    game.showLongText("It'll go away soon.", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(71, 101)
    mySprite.sayText("\"I feel like I've been here before. But where?\"")
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(123, 70)
    mySprite.sayText("\"This is weird...\"")
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setPosition(124, 95)
})
controller.menu.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`0050000408020100001c00010a006400f401640000040000000000000000000000000005000004300000000400011408000c00011d10001400011818001c00011920002400011b2c003000012034003800011d3c004000011e`), music.PlaybackMode.LoopingInBackground)
    game.splash("\".... . .-.. .--. / .... . .-. .-.-.-\"")
})
let mySprite: Sprite = null
music.play(music.createSong(hex`005a000408020200001c00010a006400f401640000040000000000000000000000000005000004360000000400012204000800011908000c00011e10001400012214001800011918001c00011e20002400012224002800011928002c00011e06001c00010a006400f401640000040000000000000000000000000000000002120030003400011934003800011d38003c000120`), music.PlaybackMode.LoopingInBackground)
scene.setBackgroundColor(10)
game.splash("It is time. Be prepared...")
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 4 4 4 4 4 4 4 . . . . 
    . . . . . a 4 4 1 1 1 4 . . . . 
    . . . . 4 4 a 1 8 1 8 4 4 . . . 
    . . . . 4 4 1 1 1 1 1 4 4 . . . 
    . . . . . . . 9 9 9 . . . . . . 
    . . . . . . . 1 9 9 1 . . . . . 
    . . . . . . 9 9 9 9 9 . . . . . 
    . . . . . . . 1 . 1 . . . . . . 
    . . . . . . . 6 . 6 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
