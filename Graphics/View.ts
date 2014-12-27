

class View{

    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public Children: View[];
    public Parent: View;

    constructor(X:number = 0, Y:number = 0, Width:number = 0, Height:number = 0) {
        //Initialize attributes
        this.X = X;
        this.Y = Y;
        this.Width = Width;
        this.Height = Height;

        this.Children = [];

    }

    public Tick(elapsed: number) {

        for (var i=1; i < this.Children.length; i++) {
            this.Children[i].Tick(elapsed);
        }


    }

    public Draw(e: CanvasRenderingContext2D) {

        for (var i=1; i < this.Children.length; i++) {
            var Child: View = this.Children[i];

            //Translate canvas and call children
            e.translate(Child.X, Child.Y);
            Child.Draw(e);
            e.translate(-Child.X, -Child.Y);
        }

    }

    public addView(NewView: View) {

        //Set & link attributes
        NewView.Parent = this;

        //Add to array
        this.Children.push(NewView);

    }

}
