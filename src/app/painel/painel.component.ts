import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Frase} from "../share/frase.model";
import {FRASES} from "./frase-mock";
import {Coracao} from "../share/coracao.model";

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {


  public frases: Frase[] = FRASES
  public instrucao: string = 'Traduza a frase'
  public resposta: string = ''
  public rodada: number = 0;
  public erros: number = 0;
  public rodadaFrase!: Frase
  @Output() public finalizarJogo: EventEmitter<string> = new EventEmitter();
  public progresso: number = 0;

  public tentativas: number = 3;

  constructor() {
    this.atualizaRodada()
  }

  ngOnInit() {
  }

  public atualizaResposta(resposta: Event): void {
    this.resposta = (<HTMLInputElement>resposta.target).value
    // console.log(this.resposta)
  }



  public verificarResposta(): void {
    // console.log('Verificar resposta: ', this.resposta)
    if (this.rodadaFrase.frasePtBr == this.resposta) {
      alert('A tradução está correta.')
      this.rodada++

      //atualiza o objeto rodadaFrase
      this.atualizaRodada()

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length)

      if (this.rodada == FRASES.length) {
        this.finalizarJogo.emit("Venceu");
      }


    } else {
      if (this.tentativas != 0) {
        this.tentativas -= 1;
      } else {
        this.finalizarJogo.emit("Derrota")
      }
    }

  }

  public atualizaRodada(): void {
    //define a frase da rodada com base em alguma lógica
    this.rodadaFrase = this.frases[this.rodada]
    //limpar a resposta
    this.resposta = ''
  }

}
