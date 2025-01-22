import { keyframes ,animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';

// {} [] *

@Component({
  selector: 'app-animation',
  standalone: false,
  animations: [
    trigger('demo', [
      state('inactive', style({backgroundColor: 'blue'})),
      state('active', style({backgroundColor: 'Brown'})),

      transition('* => active',[
        animate('2s',
          keyframes([
            style({backgroundColor: 'blue', offset: 0}),
            style({backgroundColor: 'red', offset: 0.5}),
            style({backgroundColor: 'brown', offset: 1})
          ])
        )
      ]),
      transition('* => inactive', [
        animate('2s', keyframes([
          style({backgroundColor: 'brown', offset: 0}),
          style({backgroundColor: 'cyan', offset: 0.5}),
          style({backgroundColor: 'blue', offset: 1})
        ]))        
      ])

    ])
    
  ],
  templateUrl: './animation.component.html',
  styleUrl: './animation.component.css',

})
export class AnimationComponent {
  status: 'active' | 'inactive' = 'inactive';
  
  toggle(){
    if(this.status==='active'){
      this.status='inactive';
    }
    else{
      this.status='active';
    }
  }


}
