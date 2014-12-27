/// <reference path="../Graphics/View.ts" />

interface GameOptions{
    showMouse?: boolean;
}


class Game extends View{


    private Canvas: HTMLCanvasElement;
    private Context: CanvasRenderingContext2D;
    private any: requestAnimationFrame;

    public Options: GameOptions;

    constructor(Canvas: HTMLCanvasElement, Options: GameOptions) {

        //Initialize parent
        super(0, 0, Canvas.width, Canvas.height);

        //Initalize attributes
        this.Canvas = Canvas;
        this.Canvas.focus();

        this.Context = Canvas.getContext("2d");
        this.Options = Options;

        this.Tick(0);
        this.Draw(this.Context);

        //Get RequestAnimationFrame;
        this.requestAnimationFrame =    window.requestAnimationFrame ||
                                        window.webkitRequestAnimationFrame ||
                                        window.mozRequestAnimationFrame    ||
                                        window.oRequestAnimationFrame      ||
                                        window.msRequestAnimationFrame     ||
                                        null ;

        

    }

    Tick(elapsed: number) {
        super.Tick(elapsed);

        console.log("Tick")

    }

    Draw(e: CanvasRenderingContext2D) {
        super.Draw(e);

        //Clear canvas
        e.clearRect(0, 0, this.Width, this.Height);


    }
}
