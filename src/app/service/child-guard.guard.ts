import { CanActivateChildFn } from '@angular/router';


// canActivateChild
export const childGuardGuard: CanActivateChildFn = (childRoute, state) => {

  const data = localStorage.getItem('Role');
  if(data === 'xyz'){
    return true;
  }else{
    alert("access denied")
    return false;
  }
};
