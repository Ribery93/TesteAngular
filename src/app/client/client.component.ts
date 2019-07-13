import {Component, OnInit} from '@angular/core';
import {GenericService} from "../service/generic-service";
import {ActivatedRoute, Router} from "@angular/router";
import {Client} from "../model/client";
import {ResponseEntity} from "../model/response-entity";

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {
  private titulo: string;
  private client: Client = new Client();

  constructor(private service: GenericService, private  router: Router, private active: ActivatedRoute) {
  }

  ngOnInit() {
    this.active.params.subscribe(parametro => {

      if (parametro["id"] == undefined) {

        this.titulo = "Novo Cadastro de Pessoa";
      } else {
        this.titulo = "Editar Cadastro de Pessoa";
        this.service.get('/client' + parametro["id"]).subscribe(res => this.client = res);
      }
    });

  }

  /*CARREGADO NA INICIALIZAÇÃO DO COMPONENTE */


  salvar(): void {

    if (this.client.id == undefined) {
      this.service.post('/client', this.client).subscribe(response => {

          //PEGA O RESPONSE DO RETORNO DO SERVIÇO
          let res: ResponseEntity = <ResponseEntity> response;
          if (res.code == 1) {
            alert(res.mensage);
            this.client = new Client();
          }
          else {
            alert(res.mensage);
          }
        },
        (erro) => {
          alert(erro);
        });

    }
    else {

      this.service.put('/client',this.client).subscribe(response => {

          //PEGA O RESPONSE DO RETORNO DO SERVIÇO
          let res: ResponseEntity = <ResponseEntity>response;
          if (res.code == 1) {
            alert(res.mensage);
            this.router.navigate(['/consulta-client']);
          }
          else {
            alert(res.mensage);
          }
        },
        (erro) => {
          alert(erro);
        });
    }

  }

}

