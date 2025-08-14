export function obterMensagemDeErro(status: number): string {
  const mensageDeErro: Record<number, string> = {
    0: 'Erro de rede',
    404: 'Recurso não encontrado',
    500: 'Erro interno do servidor',
  };

  return mensageDeErro[status];
}
