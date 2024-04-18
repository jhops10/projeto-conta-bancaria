import { ContaCorrente } from './ContaCorrente';

export class ContaSalario extends ContaCorrente {
  constructor(titular: string) {
    super(titular);
  }

  override getTipo(): string {
    return 'Conta Salário';
  }
}
