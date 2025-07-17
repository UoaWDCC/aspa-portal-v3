import { Flex, Card, Image, Text, rgba } from '@mantine/core';
import { IconFlagExclamation } from '@tabler/icons-react';

export function EventCardMain() {
    // Temp colors, waiting for universal color
    // Need website font as well
    // Temp image, waiting for universal image
    const bg_color = rgba('#717882', 1);
    const font_color = rgba('#FFFFFF', 1);

    return (
        <Flex direction="row" align="center" justify="flex-start" bg={bg_color}>
            <Image
                src="https://www.bartonmcgill.co.nz/wp-content/uploads/2023/12/51S4Ow-YSgL-_AC_SL1500_.jpg"
                w="20%"
                h="20%"
                alt="Example"
            />

            <Flex direction="column" m="md" justify="space-around">
                {/* Title of event */}
                <Text size="xl" tt="uppercase" mt="md" mb="md" c={font_color}>
                    Casual Night @ AKL CBD
                </Text>

                {/* Event date, price and location */}
                <Flex direction="row" justify="space-between" align="center" gap="auto" mt="md" mb="md" c={font_color}>
                    <Text size="md">TUES & THUR 6:30pm-8:00pm</Text>
                    <Text>$6</Text>
                    <Text>Orange Pool Club [9 City Road]</Text>
                </Flex>

                {/* Event description */}
                <Text size="md" mt="xs" c={font_color}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
                    dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat 
                    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Text>
            </Flex>
        </Flex> 
    );
}