import { DioAccount } from "./DioAccount";

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  // Sobrescreve o método deposit para adicionar 10 ao valor do depósito
  public deposit(value: number): void {
    if (this.validateStatus() && value > 0) {
      const bonus = 10;
      const totalDeposit = value + bonus;
      super.deposit(totalDeposit);
      console.log(`Depósito especial de R$ ${value} realizado com sucesso! Bônus de R$ ${bonus} adicionado.`);
    } else {
      console.log('Não foi possível realizar o depósito especial.');
    }
  }
}
