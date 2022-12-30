import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss';

import logoImg from '../../public/logo.svg';

import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>SujeitoPizza - Faça seu login</title>
      </Head>
      <div className={styles.containerCenter}>
        <Image src={logoImg} alt="Logo sujeito pizzaria" />

        <div className={styles.login}>
          <form action="">
            <Input 
              placeholder="Digite seu e-mail"
              type="text"
            />

            <Input 
              placeholder="Digite sua senha"
              type="password"
            />
            <Button 
              type="submit"
              loading={false}
            >
              Cadastrar
            </Button>
          </form>

          <Link href="/signup">
            <a className={styles.text}>Não possui conta? Cadastre-se</a>
          </Link>

        </div>
      </div>
    </>
  )
}
