import { Form } from '../../global/themes/ThemeGlobal';
import React from 'react'

const Login = () => {
  return (
    <>
      <h1>Crie sua conta</h1>
      <p>Consuma todos os cursos criando sua conta.</p>
      <Form action="">
        <div>
          <label htmlFor="name">Nome</label>
          <input
            data-value
            placeholder="Sua nome"
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            data-value
            placeholder="Seu email"
            type="email"
            name="email"
            id="email"
          />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input
            data-value
            placeholder="Sua senha"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <div>
          <label htmlFor="passwordChecked">Confirme sua senha</label>
          <input
            data-value
            placeholder="Sua senha"
            type="password"
            name="passwordChecked"
            id="passwordChecked"
          />
        </div>
        <input type="submit" value="Criar conta" />
      </Form>
    </>
  );
}

export default Login