"use client";
import {
  TextInput,
  Textarea,
  Fieldset,
  Paper,
  Text,
  Center,
  Flex,
} from "@mantine/core";
import styles from "./InquiryForm.module.css";
import { Button } from "@/components/Shared/Button/Button";

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
    <Paper
      pt={paddingTop}
      pb={paddingBottom}
      pl={paddingLeft}
      pr={paddingRight}
      bg="#91a3b0"
      className={styles.formContainer}
    >
      <Fieldset variant="unstyled">
        <Center>
          <Text className={styles.title}>Inquiry Form</Text>
        </Center>
        <Flex justify="space-between" gap="xl">
          <TextInput
            label="First Name:"
            placeholder=""
            required
            className={styles.nameInput}
            radius="xs"
            size="md"
          />
          <TextInput
            label="Last Name:"
            placeholder=""
            required
            className={styles.nameInput}
            radius="xs"
            size="md"
          />
        </Flex>
        <TextInput
          label="Email:"
          placeholder=""
          required
          className={styles.input}
          radius="xs"
          size="md"
        />
      </Fieldset>
      <Textarea
        label="What would you like to tell us?"
        placeholder=""
        required
        className={styles.input}
        radius="xs"
        size="md"
      />
      <Center className={styles.buttonContainer}>
        <Button outlined>SUBMIT</Button>
      </Center>
    </Paper>
  );
}
