input.onButtonPressed(Button.A, function () {
    JugadorArriba.change(LedSpriteProperty.Y, -1)
    JugadorAbajo.change(LedSpriteProperty.Y, -1)
})
let JugadorAbajo: game.LedSprite = null
let JugadorArriba: game.LedSprite = null
JugadorArriba = game.createSprite(1, 3)
JugadorAbajo = game.createSprite(1, 4)
let JugadorObstaculo = game.createSprite(4, 4)
basic.forever(function () {
	
})
