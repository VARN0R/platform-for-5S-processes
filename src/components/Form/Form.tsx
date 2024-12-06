import React, { useState } from "react";
import {
  Button,
  FormDescr,
  FormStyled,
  FormWrapper,
  Input,
  Label,
  Textarea,
} from "./Form.styles";
import Container from "../Container";
import { TitleStyled } from "../Title/Title.styles";

export const Form: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, email, message });
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <FormWrapper>
        <div>
          <TitleStyled>Some text, idk</TitleStyled>
          <FormDescr>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora ab
            magnam, voluptates quibusdam esse quisquam sapiente quae repellat
            hic inventore, cum commodi nulla vel dolores sequi vero molestiae
            voluptas id.
          </FormDescr>
        </div>

        <FormStyled onSubmit={handleSubmit}>
          <Input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Label htmlFor="message">MESSAGE</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            required
          />
          <Button type="submit">SUBMIT</Button>
        </FormStyled>
      </FormWrapper>
    </Container>
  );
};
