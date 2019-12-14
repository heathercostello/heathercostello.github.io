package GroupFinal;

public class Pizza<string> {
    double price;
    string bread;
    string cheese;
    string sauce;
    string toppings;

    public Pizza(){
    }

    //setters

    void setBread(string newBread){
        this.bread = newBread;
    }

    void setPrice(double newPrice){
        this.price = newPrice;
    }

    void setCheese(string newCheese){
        this.cheese = newCheese;
    }

    void setSauce(string newSauce){
        this.sauce = newSauce;
    }

    void setToppings(string newToppings){
        this.toppings = newToppings;
    }


    //getters

    string getBread(){
        return this.bread;
    }

    double getPrice(){
        return this.price;
    }

    string getCheese(){
        return this.cheese;
    }

    string getSauce(){
        return this.sauce;
    }

    string getToppings(){
        return this.toppings;
    }

}
