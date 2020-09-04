import { Injectable } from '@angular/core';
import * as cep from 'cep-promise';

@Injectable({
  providedIn: 'root'
})
export class CepService {

  constructor() { }

  resultado;

  async consultaCep(cepInfo) {
    return this.resultado = cep(cepInfo);
  }
}
