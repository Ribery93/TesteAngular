import {Component, OnInit} from '@angular/core';
import {GenericService} from "../../service/generic-service";
import {Router} from "@angular/router";
import {Client} from "../../model/client";
import {ResponseEntity} from "../../model/response-entity";

@Component({
  selector: 'app-list-client',
  templateUrl: './list-client.component.html',
  styleUrls: ['./list-client.component.scss']
})
export class ListClientComponent implements OnInit {
  private clients: Client[] = new Array();
  private titulo: string;

  constructor(private router: Router, private service: GenericService) {
  }

  ngOnInit() {
    this.titulo = "Registros Cadastrados";

    /*CHAMA O SERVIÇO E RETORNA TODAS AS PESSOAS CADASTRADAS */
    this.service.get('/client').subscribe(res => this.clients = res);
  }

  remove(codigo: number, index: number): void {

    if (confirm("Deseja realmente excluir esse registro?")) {

      /*CHAMA O SERVIÇO PARA REALIZAR A EXCLUSÃO */
      this.service.delete('/client', codigo).subscribe(response => {
          let res: ResponseEntity = <ResponseEntity>response;

          if (res.code == 1) {
            alert(res.mensage);
            this.clients.splice(index, 1);
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

  edit(codigo: number): void {
    this.router.navigate(['/client', codigo]);
  }


}
