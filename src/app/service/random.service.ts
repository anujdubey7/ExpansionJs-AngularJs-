import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RandomService {

  tokenExpired$: Subject<boolean> = new Subject<boolean>;
  tokenRecieved$: Subject<boolean> = new Subject<boolean>;

  constructor() { }
}
