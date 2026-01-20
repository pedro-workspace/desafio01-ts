export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  public getName = (): string => {
    return this.name;
  }

  public deposit(value: number): void {
    if (this.validateStatus()) {
      if (value > 0) {
        this.balance += value;
        console.log(`Depósito de R$ ${value} realizado com sucesso!`);
      } else {
        console.log('Valor de depósito inválido!');
      }
    }
  }

  public withdraw = (value: number): void => {
    if (this.validateStatus() && this.balance >= value && value > 0) {
      this.balance -= value;
      console.log(`Saque de R$ ${value} realizado com sucesso!`);
    } else if (value <= 0) {
      console.log('Valor de saque inválido!');
    } else if (this.balance < value) {
      console.log('Saldo insuficiente para o saque!');
    }
  }

  public getBalance = (): number => {
    return this.balance;
  }

  public validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }
    throw new Error('Conta inválida');
  }
}
