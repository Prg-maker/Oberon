import {
  Container,
  Form,
  Title,
  Input,
  ButtonEnterInProfile,
  ButtonBack,
} from "./styles";

import { ArrowLeft, ArrowRight } from "phosphor-react";

import { useState, useContext } from "react";
import { api } from "../../services";

import { UserContext } from "../../context/useContext";

import {useNavigate} from 'react-router-dom'


export function Login() {
  const {setState } = useContext(UserContext);

  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const navigation = useNavigate()

  async function handleSingIn(event) {

    event.preventDefault();

    try {

      const { data } = await api.post("/login ", {
        name,
        password,
      });
      const {user} = data

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", user.id);


      setState(
        {
          id:user.id,
          name:user.name,
          github:user.github
       }
      );


      navigation(`/user/projects/${user.id}`)
    } catch (err) {
      alert('Usuário não existe ou senha errada')
    }
  }


  return (
    <Container>
      <div>
        <img
          src={`https://upload.wikimedia.org/wikipedia/commons/3/31/Oberon_-_PIA00034.jpg`}
          alt="Oberon"
        />
      </div>

      <Form>
        <div className="name">
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name"
            type="nome"
          />
        </div>

        <div className="password">
          <label htmlFor="senha">Senha</label>
          <Title>Senha</Title>
          <Input
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
            id="senha"
          />
        </div>

        <div className="buttons">
          <ButtonBack href="/">
            <ArrowLeft size={25} weight="bold" />
            Voltar
          </ButtonBack>

          <ButtonEnterInProfile onClick={handleSingIn}>
            Entrar
            <ArrowRight size={25} weight="bold" />
          </ButtonEnterInProfile>
        </div>
      </Form>
    </Container>
  );
}
