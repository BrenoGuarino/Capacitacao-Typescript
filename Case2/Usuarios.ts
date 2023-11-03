class Usuarios {
  nome: string;
  senha: string;

  constructor(nome: string, senha: string) {
    this.nome = nome;
    this.senha = senha;
  }

  getNome(): string {
    return this.nome;
  }

  setNome(nome: string): void {
    this.nome = nome;
  }

  getSenha(): string {
    return this.senha;
  }

  setSenha(senha: string): void {
    this.senha = senha;
  }

  editarUsuario(): void {
    // Aqui estará a lógica do método
  }
}