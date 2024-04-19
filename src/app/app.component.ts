import { Component } from '@angular/core';
import { ContaBancaria } from './models/ContaBancaria';
import { ContaService } from './services/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  titular: string = '';
  tipoConta: string = '';
  valorTransacao: number | null = null;
  conta: ContaBancaria | null = null;

  constructor(private contaService: ContaService) {}

  criarConta(): void {
    if (this.titular === '' || this.tipoConta === '') {
      alert('Você deve preencher os campos Nome e Tipo de Conta');
    } else if (this.titular != '' && this.tipoConta) {
      switch (this.tipoConta) {
        case 'corrente':
          this.conta = this.contaService.criarContaCorrente(this.titular);

          break;

        case 'salario':
          this.conta = this.contaService.criarContaSalario(this.titular);

          break;

        case 'poupanca':
          this.conta = this.contaService.criarContaPoupanca(this.titular);

          break;

        default:
          console.error('Tipo de conta inválido');
      }
    }
  }

  depositar(): void {
    if (this.valorTransacao && this.valorTransacao > 0) {
      this.conta && this.conta.depositar(this.valorTransacao);
      this.valorTransacao = null;
    }
  }

  sacar(): void {
    if (this.valorTransacao && this.valorTransacao > 0) {
      this.conta && this.conta.sacar(this.valorTransacao);
      this.valorTransacao = null;
    }
  }
}
