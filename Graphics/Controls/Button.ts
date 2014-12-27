/// <reference path="Control.ts" />

class Button extends Control {

    public Draw(e: CanvasRenderingContext2D) {
        super.Draw(e);

        e.fillStyle = "red";
        e.fillRect(0, 0, this.Width, this.Height)

    }

}
