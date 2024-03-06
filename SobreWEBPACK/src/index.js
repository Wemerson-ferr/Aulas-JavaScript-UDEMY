//Para saber mais meios de exportar e importar veja a documentação oficial.

import {nome, funcaoQualquer} from "./moduloB";
import { conecta as novaConexao } from "./moduloA";

const nomeImportado = nome;
console.log(nomeImportado)

funcaoQualquer();

novaConexao();//Mudamos o nome da função ao importar, para evitar possíveis conflitos

