package GroupFinal;

import java.util.ArrayList;

public class Menu {

    ArrayList<Pizza> pizzaOptions = new ArrayList<Pizza>();

    public Menu(){

    }

    public void addItem(Pizza newPizza){
        this.pizzaOptions.add(newPizza);
    }

    public void displayPizzaMenu(){
        for (Pizza pizzaOption : pizzaOptions){
            pizzaOption.toString();
        }
    }
}
