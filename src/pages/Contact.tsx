import React from 'react';
import { Container, Form, Segment, Divider } from 'semantic-ui-react';

export const Contact: React.FC = () => {
    return (
        <Container fluid>
            <Container>
                <iframe title='addressMap' src='https://www.google.com/maps/embed/v1/place?key=AIzaSyDnCCdgpDYqZFbcoEKmpHZp_mwBdsKoztA&q=Dhanabal+Chartered+Accountant'></iframe>
            </Container>
            <Divider />
            <Segment>
                <Form>
                    <Form.Input name='name' label='Name' placeholder='Enter Your Full Name' />
                    <Form.Input name='mobile' label='Mobile Number' type='mobile' placeholder='Enter Your Mobile Number' />
                    <Form.TextArea name='message' label='Message' />
                </Form>
            </Segment>
        </Container>
    );
};
