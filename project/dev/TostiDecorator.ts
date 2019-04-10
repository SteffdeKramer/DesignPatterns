class Tosti_Extra_Decorator implements Tosti {
    private _tosti: Tosti;

    constructor(Tosti: Any){
        this._tosti = Tosti;
    }

    getName(): String{
        return this._tosti.getName();
    }
}