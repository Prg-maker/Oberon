import {
  Container,
  Form,
  Title,
  Input,
  ButtonCreateProfile,
  ButtonBack,
} from "./styles";

import OberonImg from "../../assets/Ellipse.png";

import { ArrowRight, ArrowLeft } from "phosphor-react";
import { Link, useNavigate } from "react-router-dom";
import { FormEvent, useState } from "react";
import { api } from "../../services/api";
import Swal from "sweetalert2";

export function CreateUser() {
  localStorage.clear();

  const [nameGithub, setNameGithub] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigate();

  async function submitProfile(event: FormEvent) {

    event.preventDefault();

    try {
      
      if (name.length <= 2) {
        return Swal.fire({
          icon: "error",
          title: "nome não é válido",
          text: "tente criar com outro nome",
        });
      }

      if (password.length <= 7) {
        return Swal.fire({
          icon: "error",
          title: "senha não é válida",
        });
      }

      await api.post("/register", {
        name,
        nameGithub,
        password,
      });

      Swal.fire({
        position: "center",
        icon: "success",
        title: "usuário criado",
        showConfirmButton: false,
        timer: 1500,
      });

      navigation("/");
    } catch (err) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Usuário com esse nome j́a existe",
      });
    }
  }

  return (
    <Container>
      <div>
        <img src={OberonImg} alt="Oberon" />
      </div>

      <Form>
        <div className="name">
          <label htmlFor="nome">Nome</label>
          <Title>Nome</Title>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome"
            type="nome"
          />
        </div>

        <div className="github">
          <label htmlFor="github">Perfil do github</label>
          <Title>Perfil do github</Title>
          <strong>opcional*</strong>
          <Input
            value={nameGithub}
            onChange={(e) => setNameGithub(e.target.value)}
            placeholder="Perfil do github"
            type="text"
            id="github"
          />
        </div>

        <div className="senha">
          <label htmlFor="senha">Senha</label>
          <Title>Senha</Title>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            type="password"
            id="senha"
          />
        </div>

        <div className="buttons">
          <ButtonCreateProfile onClick={submitProfile}>
            Criar
            <ArrowRight size={25} weight="bold" />
          </ButtonCreateProfile>

          <ButtonBack>
            <Link to="/">
              <ArrowLeft size={25} weight="bold" />
              Voltar
            </Link>
          </ButtonBack>
        </div>
      </Form>
    </Container>
  );
}
