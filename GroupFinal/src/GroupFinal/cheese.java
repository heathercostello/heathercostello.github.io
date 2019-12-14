package GroupFinal;

public class cheese extends Pizza {
    String style;

    public cheese(String Style){
        this.style = Style;
    }

    public String toString(){
        return this.style + super.getBread() + super.getSauce() + super.getCheese() + super.getToppings() + ": " + super.getPrice();
    }

}
