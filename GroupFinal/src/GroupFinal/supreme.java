package GroupFinal;

public class supreme extends Pizza {
    String style;

    public supreme(String Style){
        this.style = Style;
    }

    public String toString(){
        return this.style + super.getBread() + super.getSauce() + super.getCheese() + super.getToppings() + ": " + super.getPrice();
    }


}
