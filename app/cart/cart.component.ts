import { Component } from '@angular/core';
import { Observable, of, from,interval, take, timer, concatMap} from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-cart',
  standalone:false,
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})

// {} [] *
export class CartComponent {
  cartData: any[] = [];  
  cartAdd = new Observable<any>;
  data1 : number[] =[] ; 
  data2 : number[] =[] ; 
  data3 : number[] = [];
  data4: number[] = [];

  ofObserv(){
    this.cartAdd = of(10,20,30,50);
    this.cartAdd.subscribe((val: number)=>{
      this.data2.push(val);
    })
  }
  fromObserv(){
    this.cartAdd = from([10,2,1,2]);
    this.cartAdd.subscribe((val: number)=>{
      this.data1.push(val);
    })
  }

  intervalObserv(){
    this.cartAdd = interval(2000);
    const fourNumber = this.cartAdd.pipe(take(4))
    fourNumber.subscribe((val:number)=>{
      this.data3.push(val);
    })
  }

  newObservable = of(1, 2, 3, 4).pipe(
    concatMap((val) => timer(1000).pipe(map(() => val))) 
  );
  timerObserv() {
    this.newObservable.subscribe({
      next: (val: number) =>{
        this.data4.push(val);
      },
      complete: () => {
        console.log("Timer Is STopped")
      }
    })
      
  }
  
  table: number[] = [];
  tableOf(){
    const observ2 = of(1,2,3,4,5,6,7,8,9,10).pipe(map(i => i* 2));
    observ2.subscribe((i)=>this.table.push(i));
  }
}
