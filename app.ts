import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

console.log('=== Testando Conta de Pessoa Física ===');
const peopleAccount: PeopleAccount = new PeopleAccount(123456789, 'João Silva', 1001);
console.log(`Titular: ${peopleAccount.getName()}, Saldo: R$ ${peopleAccount.getBalance()}`);
peopleAccount.deposit(100);
console.log(`Saldo após depósito: R$ ${peopleAccount.getBalance()}`);
peopleAccount.withdraw(30);
console.log(`Saldo após saque: R$ ${peopleAccount.getBalance()}`);

console.log('\n=== Testando Conta de Empresa ===');
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 2001);
console.log(`Empresa: ${companyAccount.getName()}, Saldo: R$ ${companyAccount.getBalance()}`);
companyAccount.deposit(500);
console.log(`Saldo após depósito: R$ ${companyAccount.getBalance()}`);
companyAccount.getLoan(1000);
console.log(`Saldo após empréstimo: R$ ${companyAccount.getBalance()}`);

console.log('\n=== Testando Conta Especial ===');
const specialAccount: SpecialAccount = new SpecialAccount('Cliente VIP', 3001);
console.log(`Titular: ${specialAccount.getName()}, Saldo: R$ ${specialAccount.getBalance()}`);
specialAccount.deposit(100); // Deve adicionar 110 (100 + 10 de bônus)
console.log(`Saldo após depósito especial: R$ ${specialAccount.getBalance()}`);

// Testando validações
console.log('\n=== Testando Validações ===');
console.log('Tentando saque com valor negativo:');
peopleAccount.withdraw(-10);

console.log('\nTentando saque com saldo insuficiente:');
peopleAccount.withdraw(1000);

console.log('\nTentando depósito com valor negativo:');
companyAccount.deposit(-50);

console.log('\nTentando empréstimo com valor inválido:');
companyAccount.getLoan(0);