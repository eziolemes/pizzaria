declare namespace Express {
  export interface Request {
    user_id: string;
  }
}
/*
  Aqui esta sobrescrevendo o Request do express, adicionando um novo atributo
  Precisa descomentar o "typeRoots": [], no tconfig e adicionar lá 
*/