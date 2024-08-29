import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Coracao} from "../share/coracao.model";

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.css']
})
export class TentativasComponent implements OnChanges {
  public coracaoVazio: string = '/assets/coracao_vazio.png'
  public coracaoCheio: string = '/assets/coracao_cheio.png'

  @Input() public tentativas: number = 0;

  public coracoes:Coracao[] = [
    new Coracao(true),
    new Coracao(true),
    new Coracao(true)
  ];
  constructor() {

  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.tentativas!== this.coracoes.length) {
      let indice = this.coracoes.length - this.tentativas;
      this.coracoes[indice-1].cheio=false;
    }
  }

}
