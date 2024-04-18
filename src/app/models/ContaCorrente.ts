import { ContaBancaria } from './ContaBancaria';

export class ContaCorrente extends ContaBancaria {
  constructor(titular: string) {
    super(titular);
  }

  override sacar(valor: number): void {
    if (this.saldo >= valor) {
      this.saldo -= valor;
    } else {
      alert('Saldo Insuficiente');
    }
  }

  override getTipo(): string {
    return 'Conta-Corrente';
  }
}
