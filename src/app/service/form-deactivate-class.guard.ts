import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, GuardResult, MaybeAsync, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

//canDeactivate

export class FormDeactivateClassGuard implements CanDeactivate<unknown> {
  canDeactivate(
    component: any,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot): MaybeAsync<GuardResult> {
      
      if(component && component?.username){
        const msg = confirm("YOu have some unsaved data...are you sure to go back?");
        if(msg){
          return true;
        }else{
          return false
        }
        
      }
      return true;
  }
  
}
