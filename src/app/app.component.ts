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
  constructor(private foodService: FoodService) {}

  getFood(price: number, city: string, state: string): void {
    this.foodService.getFood({ price, city, state } as Food).subscribe(data => {
      console.log(data.businesses[Math.floor(Math.random() * 20)]);
    });
  }
}
