package GroupFinal;

public class margarita extends Pizza{
    String style;

    public margarita(String Style){
        this.style = Style;
    }

    public String toString(){
        return this.style + super.getBread() + super.getSauce() + super.getCheese() + super.getToppings() + ": " + super.getPrice();
    }
}
