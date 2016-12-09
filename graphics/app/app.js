/* eslint-disable no-var */
var stage;
var recentDonor;
var recentSub;
var topDonor;
var recentFollower;
var bg;

/* eslint-enable no-var */

(function () {
	'use strict';

	const containerEl = document.getElementById('container');
	const stageEl = document.createElement('canvas');
	stageEl.id = 'omnibar';
	stageEl.width = 1920;
	stageEl.height = 36;
	containerEl.appendChild(stageEl);

	const maxX = stageEl.width;
	const maxY = stageEl.height;

	stage = new createjs.Stage('notification');
	createjs.Ticker.addEventListener('tick', event => {
		if (event.paused) {
			return;
		}

		bg.graphics
			.clear()
			.beginFill('#6d6d6d')
			.moveTo(0, 0)
			.lineTo(bg.width, 0)
			.lineTo(bg.width, maxY)
			.lineTo(0, maxY)
			.closePath();
		stage.update();
	});
	createjs.Ticker.framerate = 60;
	createjs.Ticker.timingMode = createjs.Ticker.RAF_SYNCHED;

	const bgContainer = new createjs.Container();
	stage.addChild(bgContainer);

	bg = new createjs.Shape();
	bg.name = 'bg';
	bgContainer.addChild(bg);

	recentDonor = new createjs.Text('')
});
