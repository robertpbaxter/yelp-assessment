import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError } from "rxjs/operators";
import { Food } from "./food";

@Injectable({
  providedIn: "root"
})
export class FoodService {
  private authKey =
    "Bearer TKeoKxm4CPCxArsgBsVlZDD2y6E_2FmBBlKlAGY2YTvMBN_2yP4ZCWnQ57aS6ShjqXG2IuboBtVuY_iCI2A-NJ3nkW3eLaz8_pVY6CeuUO4CjVtETxCMYHnH_fbqW3Yx";
  private baseUrl =
    "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?open_now=true&location=";

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.authKey,
      "X-Requested-With": "application/xhtml+xml"
    })
  };

  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }

  getFood(food: Food): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseUrl}"${food.city} ${food.state}"&price=${food.price}`,
        this.httpOptions
      )
      .pipe(catchError(this.handleError("getFood", [])));
  }
  // getFood(food: Food): Observable<any[]> {
  //   return this.http
  //     .get<any[]>(
  //       `${this.baseUrl}"${food.city} ${food.state}"&price=${food.price}`,
  //       this.httpOptions
  //     )
  //     .pipe(catchError(this.handleError("getFood", [])));
  // }
}
