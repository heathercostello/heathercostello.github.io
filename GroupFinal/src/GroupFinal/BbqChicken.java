package GroupFinal;

public class BbqChicken extends Pizza{
    String style;

    public BbqChicken(String Style){
        this.style = Style;
    }

    public String toString(){
        return this.style + super.getBread() + super.getSauce() + super.getCheese() + super.getToppings() + ": " + super.getPrice();
    }
}
