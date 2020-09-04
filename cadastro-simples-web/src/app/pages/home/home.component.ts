import { CepService } from './../../services/cep-service.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  formEndereco = new FormGroup({
    cep: new FormControl(''),
    rua: new FormControl(''),
    numero: new FormControl(''),
    bairro: new FormControl(''),
    complemento: new FormControl(''),
    cidade: new FormControl(''),
    estado: new FormControl(''),
    pais: new FormControl(''),
  });

  rua: any;
  numero: any;
  bairro: any;
  complemento: any;
  cidade: any;
  estado: any;
  pais: any;


  // {
  //   "__zone_symbol__state": true,
  //   "__zone_symbol__value": {
  //     "cep": "03210000",
  //     "state": "SP",
  //     "city": "São Paulo",
  //     "neighborhood": "Vila Alpina",
  //     "street": "Rua Costa Barros",
  //     "service": "viacep"
  //   }
  // }


  constructor(private cep: CepService) { }

  ngOnInit(): void {

  }

  public cepPesquisa: any;

  consultaCepService() {

    this.cep.consultaCep(this.formEndereco.get('cep').value);
    this.cepPesquisa = this.cep.resultado;
    
  }





}
