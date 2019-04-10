class ExtraFactory implements Factory {
    Order(tosti, name): Object {
        // TODO : Long If statement replace with switch
        switch(name) {
            case 'none' :
            return new Tosti_Extra_Decorator(tosti);

            case 'mosterd' : 
            return new Mosterd(tosti)
            
            case 'ketchup' :
            return new Ketchup(tosti)
            
            default : 
            return null;

        }
    }
}