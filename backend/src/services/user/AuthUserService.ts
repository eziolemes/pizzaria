import prismaClient from "../../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
  email: string;
  password: string;
}

class AuthUserService {
  async execute({ email, password }: AuthRequest) {
    // Verificar se o email existe
    const user = await prismaClient.user.findFirst({
      where: {
        email: email
      }
    });

    if(!user) {
      throw new Error("User/password incorrect");
    }

    // Verificar se a senha esta correta
    const passwordMatch = await compare(password, user.password);

    if(!passwordMatch) {
      throw new Error("User/password incorrect");
    }

    // gerar token JWT e devolver os dados do usuario como id, nome e email


    return {ok: true}
  }
}

export { AuthUserService };