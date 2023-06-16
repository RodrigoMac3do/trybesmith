/* eslint-disable no-await-in-loop */
import fs from 'fs';
import path from 'path';
import { Pool } from 'mysql2/promise';
import connection from '../models/connection';

/**
 * Função responsável por recriar o banco de dados a partir de um arquivo SQL.
 * @param conn Objeto de conexão do banco de dados.
 */
export default async function recreateDatabase(conn: Pool) {
  try {
    const importPath = path.resolve(__dirname, '../../Trybesmith.sql');
    const seedDBContent = fs.readFileSync(importPath).toString();
    const queries = seedDBContent.split(';').filter((p) => p.trim());

    for (let i = 0; i < queries.length; i += 1) {
      const query = queries[i];
      await conn.query(query);
    }
  } catch (error) {
    console.info('Falha ao recriar o banco de dados:', error);
  }
}

// Verifica se este módulo é o módulo principal
if (require.main === module) {
  recreateDatabase(connection)
    .then(async () => {
      console.info('Banco de dados restaurado com sucesso');
      await connection.end(); // Encerra a conexão com o banco de dados
      process.exit(0); // Finaliza o processo com código de saída 0 (sucesso)
    })
    .catch((error) => {
      console.error('Erro ao restaurar o banco de dados:', error);
      process.exit(1); // Finaliza o processo com código de saída 1 (erro)
    });
}
