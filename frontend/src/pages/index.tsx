import Head from "next/head";
import Image from "next/image";
import styles from '../../styles/home.module.scss';
import { Input } from "../components/ui/Input";

import logoImg from '../../public/logo.svg';

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
          </form>
        </div>
      </div>
    </>
  )
}
