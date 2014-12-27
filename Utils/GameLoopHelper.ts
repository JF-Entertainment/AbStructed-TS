

class GameLoopHelper{

    static Start(Callback: any) {

        setInterval( function() {
            Callback(1000 / 60);
        }, 1000 / 60 );

    }

}
