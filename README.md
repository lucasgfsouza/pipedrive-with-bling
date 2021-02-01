# pipedrive-with-bling


O projeto foi pensado para ser usado em 3 etapas através de rotas:

1) Rota '/pipetobling' que conecta com a API do Pipedrive e envia as informações para o Bling.

2) Rota '/savedb' conecta com o Bling e salva as informações no DB.

3) Rota '/relatorio' extrai as informações do DB agregando-as por dia/mes/ano e retornando a soma desses períodos.
