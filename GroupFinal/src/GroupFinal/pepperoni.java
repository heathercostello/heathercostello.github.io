package GroupFinal;

public class pepperoni extends Pizza{
    String style;

    public pepperoni(String Style){
        this.style = Style;
    }

    public String toString(){
        return this.style + super.getBread() + super.getSauce() + super.getCheese() + super.getToppings() + ": " + super.getPrice();
    }
}
