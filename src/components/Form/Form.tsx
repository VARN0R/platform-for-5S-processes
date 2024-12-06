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
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors((prev) => ({ ...prev, name: false }));
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: false }));
    }
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors((prev) => ({ ...prev, message: false }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      name: !name.trim(),
      email: !email.trim(),
      message: !message.trim(),
    };

    setErrors(newErrors);

    if (!newErrors.name && !newErrors.email && !newErrors.message) {
      console.log({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }
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
            onChange={handleNameChange}
            $isError={errors.name}
          />
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
            $isError={errors.email}
          />
          <Label htmlFor="message">MESSAGE</Label>
          <Textarea
            id="message"
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            rows={5}
            $isError={errors.message}
          />
          <Button type="submit">SUBMIT</Button>
        </FormStyled>
      </FormWrapper>
    </Container>
  );
};
