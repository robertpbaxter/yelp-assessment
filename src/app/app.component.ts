import { Component } from "@angular/core";
import { FoodService } from "./food.service";
import { Food } from "./food";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  restaurant: any;
  rating: string;
  delivery: string;
  constructor(private foodService: FoodService) {}

  getFood(price: number, city: string, state: string): void {
    this.foodService.getFood({ price, city, state } as Food).subscribe(data => {
      let result = data.businesses[Math.floor(Math.random() * 20)];
      let delivers = result.transactions.indexOf("delivery");
      delivers > -1
        ? (this.delivery = "Delivers")
        : (this.delivery = "Doesn't deliver");
      this.restaurant = result;
    });
  }
}
