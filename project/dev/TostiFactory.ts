class TostiFactory implements Factory {
    Order(name): Object {
        // TODO : Long If statement replace with switch
        switch(name) {
            case 'hawaii' :
            return new Tosti_Hawaii();

            case 'ei' : 
            return new Tosti_Ei();

            case 'zalm' :
            return new Tosti_Zalm();
            
            default : 
            return new Normale_Tosti();

        }
    }
}