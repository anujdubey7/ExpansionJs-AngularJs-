import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  const role = localStorage.getItem('Role');
  const router = inject(Router)
    if (role === 'xyz') {
      return true;
    }
    alert('You are not authorized to access this route');
    router.navigate(['/login']);
    return false;
};
