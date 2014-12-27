/// <reference path="../Graphics/View.ts" />
/// <reference path="../Utils/GameLoopHelper.ts" />

interface GameOptions{
    showMouse?: boolean;
}


class Game extends View{

    //General
    private Canvas: HTMLCanvasElement;
    private Context: CanvasRenderingContext2D;
    public Options: GameOptions;

    //Gameloop
    private requestAnimationFrame: any;


    constructor(Canvas: HTMLCanvasElement, Options: GameOptions) {

        //Initialize parent
        super(0, 0, Canvas.width, Canvas.height);

        //Initalize attributes
        this.Canvas = Canvas;
        this.Canvas.focus();

        this.Context = Canvas.getContext("2d");
        this.Options = Options;

        //Start Gameloop
        GameLoopHelper.Start(this.Tick.bind(this));

    }

    public Tick(elapsed) {
        super.Tick(elapsed);


        //Call Draw-Methods
        this.Draw(this.Context);
    }

    public Draw(e: CanvasRenderingContext2D) {
        super.Draw(e);

        //Clear canvas
        e.clearRect(0, 0, this.Width, this.Height);
    }
}
