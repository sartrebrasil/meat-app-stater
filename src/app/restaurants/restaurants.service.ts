import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { Restaurant } from './restaurant/restaurant.model';
import { MenuItem } from '../restaurant-detail/menu-item/menu-item.model';

import { MEAT_API } from '../app.api';
import { Errorhandler } from '../app.error-handlers';

@Injectable()
export class RestaurantService {

    /**
     * Contructor with Http Object
     * @param http is a private field of this service
     */
    constructor(private http: HttpClient) {

    }

    /**
     * Find All Restaurants
     */
    restaurants(search?: string): Observable<Restaurant[]> {
        let params: HttpParams = undefined;
        if (search) {
            params = new HttpParams().set('q', search);
        }
        return this.http.get(`${MEAT_API}/restaurants`, {params: params});
    }

    /**
     * Find Restaurant By ID
     * @param id
     */
    restaurantById(id: String): Observable<Restaurant> {
        return this.http.get<Restaurant>(`${MEAT_API}/restaurants/${id}`);
    }

    /**
     * 
     * @param id
     */
    reviewsOfRestaurants(id: String): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`);
    }

    /**
     *
     * @param id
     */
    menuOfRestaurants(id: String): Observable<MenuItem[]> {
        return this.http.get<MenuItem[]>(`${MEAT_API}/restaurants/${id}/menu`);
    }
}