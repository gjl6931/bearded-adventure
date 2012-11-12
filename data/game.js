(function() {
	/**
	 * Startup it all up when the document is ready.
	 * Change for your favorite frameworks initialization code.
	 */
	window.addEventListener(
			'load',
			function() {
				var director = new CAAT.Director().initialize(800, 600, 'gameCanvas');				
				initGame(director);			
				CAAT.loop(24);
				
			},
			false);
})();

function initGame(director) {
	
	var circleSize=               80;
    var prevTime=           -1;
    var pixelsPerSecond=    150;
    var scene=              director.createScene().setFillStyle('#29964F');
    var cirlce=           	null;
    var keys=               [0,0,0,0];

	
	scene.createTimer( scene.time, Number.MAX_VALUE, null,
        function(time, ttime, timerTask) {
            var ottime= ttime;
            if ( -1!=prevTime ) {
                ttime-= prevTime;
 
                circle.x += (ttime/1000)*pixelsPerSecond * (keys[1]-keys[0]);
                circle.y += (ttime/1000)*pixelsPerSecond * (keys[3]-keys[2]);
 
                if ( circle.x > director.width-20 ) {
                    circle.x= director.width-20;
                } else if ( circle.x<-20 ) {
                    circle.x= -20;
                }
                if ( circle.y > director.height-20 ) {
                    circle.y= director.height-20;
                } else if ( circle.y<-20 ) {
                    circle.y= -20;
                }
            }
            prevTime= ottime;
        },
        null
    );
	
	CAAT.registerKeyListener( function kl( keyEvent ) 
	{
        if ( keyEvent.getKeyCode()===CAAT.Keys.UP ) {
            keyEvent.preventDefault();
            keys[2]= ( keyEvent.getAction()==='up' ) ? 0 : 1;
        }
        if ( keyEvent.getKeyCode()===CAAT.Keys.DOWN ) {
            keyEvent.preventDefault();
            keys[3]= ( keyEvent.getAction()==='up' ) ? 0 : 1;
        }
        if ( keyEvent.getKeyCode()===CAAT.Keys.LEFT ) {
            keyEvent.preventDefault();
            keys[0]= ( keyEvent.getAction()==='up' ) ? 0 : 1;
        }
        if ( keyEvent.getKeyCode()===CAAT.Keys.RIGHT ) {
            keyEvent.preventDefault();
            keys[1]= ( keyEvent.getAction()==='up' ) ? 0 : 1;
        }
	});
	
	circle = new CAAT.ShapeActor().
        setLocation(50,50).
        setSize(25,25).
		setStrokeStyle('#000').
        setFillStyle('#D1A821');
		
	scene.addChild(circle);
};