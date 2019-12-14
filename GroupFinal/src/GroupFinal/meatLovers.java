package GroupFinal;

public class meatLovers extends Pizza {
    String style;

    public meatLovers(String Style){
        this.style = Style;
    }

    public String toString(){
        return this.style + super.getBread() + super.getSauce() + super.getCheese() + super.getToppings() + ": " + super.getPrice();
    }
}
