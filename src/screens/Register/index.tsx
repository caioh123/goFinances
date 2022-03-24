import React from "react";
import { Text } from "react-native";
import { Input } from "../../components/Forms/Input";
import { Button } from "../../components/Forms/Button";
import { Container, Header, Title, Form } from "./styles";

export function Register() {
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Input placeholder="Nome" />
        <Input placeholder="Preço" />
        <Button title="a" />
      </Form>
    </Container>
  );
}
