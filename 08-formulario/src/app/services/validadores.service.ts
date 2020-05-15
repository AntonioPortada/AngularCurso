import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidadoresService {

  constructor() { }

  existeUsuario( control: FormControl ): Promise<ErrorValidate> | Observable<ErrorValidate> {

    if ( !control.value ){
      return Promise.resolve(null);
    }

    return new Promise( (resolve, reject) => {
      setTimeout( () => {
        if ( control.value === 'fxndx' && control.valueChanges ){
          resolve({ existe: true });
        }else{
          resolve({ existe: false });
        }
      } , 3500);
    });
  }
}

interface ErrorValidate {
  [s: string]: boolean;
}