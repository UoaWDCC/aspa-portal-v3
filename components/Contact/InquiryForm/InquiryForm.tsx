"use client";
import {
  TextInput,
  Textarea,
  Fieldset,
  Container,
  Paper,
  Title,
} from "@mantine/core";
import styles from "./InquiryForm.module.css";

export interface InquiryForm {
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
}

export function InquiryForm({
  paddingTop = "",
  paddingBottom = "",
  paddingLeft = "",
  paddingRight = "",
}: InquiryForm) {
  return (
    <Container>
      <Title className={styles.title}>Contact Us</Title>
      <Paper
        pt={paddingTop}
        pb={paddingBottom}
        pl={paddingLeft}
        pr={paddingRight}
      >
        <Fieldset legend="Personal Information">
          <TextInput label="First Name" placeholder="" required />
          <TextInput label="Last Name" placeholder="" required />
          <TextInput label="Email" placeholder="" required />
        </Fieldset>
        <Textarea label="Message" placeholder="" required />
      </Paper>
    </Container>
  );
}
