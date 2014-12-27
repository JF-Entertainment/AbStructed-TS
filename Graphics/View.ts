

enum State{
    Active,
    Paused,
    Deleted
}


class View{

    public X: number;
    public Y: number;
    public Width: number;
    public Height: number;
    public Children: View[];
    public Parent: View;
    public State: State;

    constructor(X:number = 0, Y:number = 0, Width:number = 0, Height:number = 0) {
        //Initialize attributes
        this.X = X;
        this.Y = Y;
        this.Width = Width;
        this.Height = Height;

        this.State = State.Active;
        this.Children = [];

    }

    public Tick(elapsed: number) {



        for (var i=0; i < this.Children.length; i++) {

            //Remove children, who have been flagged "Deleted"
            if (this.Children[i].State == State.Deleted) {
                //Delete Child and skip step
                this.Children.splice(i, 1);
                i++;
                //TODO: check if necessary
                if (i >= this.Children.length) break;
            }

            //Call children if not paused
            if (this.Children[i].State != State.Paused) this.Children[i].Tick(elapsed);

        }

    }

    public Draw(e: CanvasRenderingContext2D) {

        for (var i=0; i < this.Children.length; i++) {
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

    public Delete() {
        this.State = State.Deleted;
    }

    public Pause() {
        this.State = State.Paused;
    }

    public Unpause() {
        this.State = State.Active;
    }
}
