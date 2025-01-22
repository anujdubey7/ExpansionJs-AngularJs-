import { HttpInterceptorFn } from '@angular/common/http';
import { catchError, retry, throwError } from 'rxjs';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  const accToken = localStorage.getItem("AccessToken");
  const newReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${accToken}` 
    }
  });

  return next(newReq).pipe(
    retry(2),
    catchError((error) => {
      console.error('HTTP Error:', error);

      if (error.status === 401) {
        alert('Unauthorized request');
        
      } 
      return throwError(() => new Error(error.message));
    })
  );
};
