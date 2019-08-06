

import { Injectable } from "@angular/core";
import {IPlace} from "./features"
import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {tap, catchError} from 'rxjs/operators';

@Injectable({
    providedIn : 'root'
})
   
export class FeatureService{
   

    featureurl = '/features';
    
    constructor(private httpSer:HttpClient) {
    }
    
    // getPlace() : Observable<IPlace[]>{

    // }

getPlace():Observable<IPlace[]>{
    
        return this.httpSer.get<IPlace[]>(this. featureurl).pipe(
            
        tap(data => console.log('features : '+JSON.stringify(data))),
        catchError(this.handleError)
    );
    }
private handleError(err:HttpErrorResponse){
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
       
      }
      public createUser(features) {
        return this.httpSer.post<features>("//localhost:8090/features", features);
      }
    
    }
    

//         return[
//             {
//       placeID:1,
//       placeName:"Thailand",
//       package:1200,
//       Description:"Thailand is known as the “land of smiles” and it lives up to the hype.Travel south to the Andaman Sea and experience a day in the nomadic life of a Moken villager, a name that means “diving into the sOr simply relax with a famous Thai massage after a full day of biking and temple hopping. With Thailand you can have it all",     
//       placeImg : "./../assets/machu_pichu.jpg",
//       // rating : 4
//   },
//   {   
//       placeID:2,
//       placeName:"Maldiv",
//       package:1400,
//       Description:"Maldives Holidays is a perfect plan for your next vacation. Considered as a perfect beach destination, the place is also said to be 'heaven on earth'.",
//      placeImg:"./../assets/maldiv1.jpg",
//   //    rating : 4
//   },
//   {
//       placeID:3,
//       placeName:"Rajsthan",
//       package:500,
//       Description:"The land of turbans, moustache, ghoonghat and camels, Rajasthan is an unparalleled tourist destination when it comes to culture and heritage tourism in India.",
//    placeImg:"./../assets/Rajasthan.jpg",
//   //  rating : 4
//   },
//   {
//       placeID:4,
//       placeName:"Kerala",
//       package:450,
//     Description:"Kerala, the state also offers exotic beaches, lush hill-stations, spectacular waterfalls, wilderness to explore, many sanctuaries, ancient ports, and greenery everywhere. ",
//    placeImg:"./../assets/kerala.jpg",
//   //  rating : 4
//   },
//   {
//       placeID:5,
//       placeName:"Jammu-Kashmir",
//       package:1100,
//     Description:"Jammu and Kashmir, state of India, located in the northern part of the Indian subcontinent in the vicinity of the Karakoram and westernmost Himalayan mountain ranges. The state is part of the larger region of Kashmir, which has been the subject of dispute between India, Pakistan, and China since the partition of the subcontinent in 1947.",
//     placeImg:"./../assets/kashmir.jpg",
//     // rating : 4
//   },
//   {
//       placeID:6,
//       placeName:"Mysore",
//       package:500,
//     Description:"An incredibly breathtaking example of Indo - Saracenic style of architecture, the Mysore Palace is a magnificent edifice located in Mysore in the state of Karnataka. Also known as the Amba Vilas Palace, it is the former palace of the royal family of Mysore and is still their official residence.",
//      placeImg:"./../assets/mysore_palace.jpeg",
//     //  rating : 4
//   },

//         ]

   