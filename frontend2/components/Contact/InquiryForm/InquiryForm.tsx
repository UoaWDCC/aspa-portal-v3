'use client';
import { TextInput, Textarea, Fieldset, Container, Paper, Title, Center, Button } from '@mantine/core';
import styles from './InquiryForm.module.css';

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
    paddingRight= ""
}: InquiryForm) {
    return (
        <Center>
            <Container className={styles.queryFormBg} w={'90%'}>
            
                <Title className={styles.title}>Contact Us</Title>
                    <Fieldset pt={paddingTop} pb={paddingBottom} pl={paddingLeft} pr={paddingRight} radius={45} style={{backgroundColor: '#5E4127'}}>
                        <h1>Inquiry Form</h1>
                        <TextInput label="First Name:" placeholder="" required />
                        <TextInput label="Last Name:" placeholder="" required />
                        <TextInput label="Email:" placeholder="" required />
                        <Textarea label="How may we assist you?" placeholder="" required />
                    </Fieldset>
                    <Center>
                        <Button>Submit</Button>
                    </Center>
            </Container>
        </Center>
    );
}
    

