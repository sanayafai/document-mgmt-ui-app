import { HttpInterceptorFn } from '@angular/common/http';
import {AuthToken} from '../auth-token.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = AuthToken.getToken();
  if (token) {
    req = req.clone({
      setHeaders: { Authorization: `Bearer ${token}` }
    });
  }
  return next(req);
};
