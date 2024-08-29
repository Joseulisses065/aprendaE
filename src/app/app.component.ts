import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apredeE';
  public encerramento = '';
  public jogoEmAndamento = true;

  public finalizarJogo(status:string):void{
    this.jogoEmAndamento = false;
    this.encerramento=status;
    console.log(this.encerramento)
  }
  public reiniciar(): void {
    this.encerramento='';
    this.jogoEmAndamento = true;
  }
}
