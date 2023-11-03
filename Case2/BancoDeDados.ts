class BancoDeDados {
  private usuarios: Usuarios[];

  constructor(usuarios: Usuarios[]) {
    this.usuarios = usuarios;
  }

  getUsuarios(): Usuarios[] {
    return this.usuarios;
  }

  setUsuarios(usuarios: Usuarios[]): void {
    this.usuarios = usuarios;
  }

  obterUsuarios(): void {
    // Aqui estará a lógica do método
  }

  salvarUsuarios(): void {
    // Aqui estará a lógica do método
  }

  editarUsuarios(): void {
    // Aqui estará a lógica do método
  }

  deletarUsuarios(): void {
    // Aqui estará a lógica do método
  }
}

