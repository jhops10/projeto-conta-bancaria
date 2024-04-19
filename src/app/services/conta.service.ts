import { Injectable } from '@angular/core';
import { ContaBancaria } from '../models/ContaBancaria';
import { ContaCorrente } from '../models/ContaCorrente';
import { ContaPoupanca } from '../models/ContaPoupanca';
import { ContaSalario } from '../models/ContaSalario';

@Injectable({
  providedIn: 'root',
})
export class ContaService {
  conta: ContaBancaria | null = null;

  constructor() {}

  criarContaCorrente(titular: string): ContaBancaria {
    this.conta = new ContaCorrente(titular);
    return this.conta;
  }

  criarContaPoupanca(titular: string): ContaBancaria {
    this.conta = new ContaPoupanca(titular);
    return this.conta;
  }

  criarContaSalario(titular: string): ContaBancaria {
    this.conta = new ContaSalario(titular);
    return this.conta;
  }

  getConta(): ContaBancaria | null {
    return this.conta;
  }
}
