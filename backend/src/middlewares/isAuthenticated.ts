import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  sub: string;
}

export function isAuthenticated(req: Request, res: Response, next: NextFunction) {

  const authToken = req.headers.authorization;

  if(!authToken) {
    return res.status(401).end();
  }

 /* o token esta neste padrão Bearer 84925924572948572
  * agora é preciso remover o Bearer e ficar só com o token puro
  * o slit vai desmembrar separando por espaço
  * coloque , antes para ignorar o primero resultado que será o Bearer
  */
  const [, token] = authToken.split(" ");

  try {
    // Validar token
    // No final estou afirmando que o retorno será do tipo Payload
    const { sub } = verify(
      token,
      process.env.JWT_SECRET
    ) as Payload;

    // Recuperar o id do token e colocar dentro de uma variável dentro do req
    req.user_id = sub;

    return next();
  } catch (error) {
    return res.status(401).end();
  }
}