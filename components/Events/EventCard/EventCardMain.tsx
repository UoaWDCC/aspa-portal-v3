import { Card, Image } from '@mantine/core';

export function EventCardMain() {
    return (
        <Card padding="lg" style={{ display: 'flex', flexDirection: 'row' }}>
            <Image
                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                width={60}
                height={60}
                alt="Example"
            />
            <h2>Event Name</h2>
            <p>Description of the event goes here. It can be a brief overview of what the event is about.</p>
        </Card> 
    );
}