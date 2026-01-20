import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  public getLoan = (value: number): void => {
    if (this.validateStatus() && value > 0) {
      // Chama o método deposit da classe pai para adicionar o valor do empréstimo ao saldo
      this.deposit(value);
      console.log(`Empréstimo de R$ ${value} aprovado e creditado na conta!`);
    } else if (value <= 0) {
      console.log('Valor de empréstimo inválido!');
    }
  }
}
