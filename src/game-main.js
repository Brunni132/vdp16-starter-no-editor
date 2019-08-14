import {startGame, vdp, color} from "../lib/vdp-lib";
import {clamp, getMapBlock, setMapBlock, TextLayer} from './utils';

function *main() {
	const textLayer = new TextLayer();
	let mario = { x: 120 };

	vdp.configBackdropColor('#59f');
	while (true) {
		if (vdp.input.isDown(vdp.input.Key.Left)) mario.x -= 1;
		if (vdp.input.isDown(vdp.input.Key.Right)) mario.x += 1;
	
		vdp.drawBackgroundTilemap('level1');
		vdp.drawObject(vdp.sprite('mario').tile(6), mario.x, 120);

		textLayer.drawText(0, 0, `Mario.x: ${mario.x} `);
		textLayer.draw();

		yield;
	}
}

startGame('#glCanvas', vdp => main(vdp));