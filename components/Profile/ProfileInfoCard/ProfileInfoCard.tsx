import { User } from "@/payload-types";
import { Center, Flex, Text, Stack } from "@mantine/core";
import { Button } from "@/components/Shared/Button/Button";
import styles from "./ProfileInfoCard.module.css";

export default function ProfileInfoCard(user: User) {
  return (
    <div style={{ margin: "100px auto", padding: "20px" }}>
      <div
        style={{
          padding: "20px",
          marginBottom: "30px",
        }}
      >
        <Center>
          <Text className={styles.title}>Your Profile</Text>
        </Center>

        <Flex className={styles.flex}>
          <Stack>
            {user.firstname && (
              <Text className={styles.text}>
                <strong>First Name:</strong> {user.firstname}
              </Text>
            )}
            {user.university && (
              <Text className={styles.text}>
                <strong>University:</strong> {user.university}
              </Text>
            )}
            {user.email && (
              <Text className={styles.text}>
                <strong>Email:</strong> {user.email}
              </Text>
            )}
          </Stack>

          <Stack>
            {user.lastname && (
              <Text className={styles.text}>
                <strong>Last Name:</strong> {user.lastname}
              </Text>
            )}
            {user.upi && (
              <Text className={styles.text}>
                <strong>UPI:</strong> {user.upi}
              </Text>
            )}
            {user.contactNum && (
              <Text className={styles.text}>
                <strong>Contact Number:</strong> {user.contactNum}
              </Text>
            )}
          </Stack>
        </Flex>
        {user.skillLevel && (
          <Text className={styles.skill}>
            <strong>Skill Level:</strong> {user.skillLevel}
            <span className={styles.span}>
              {user.skillLevel === "Intermediate" &&
                "Plays occasionally, or more of a social player"}
            </span>
          </Text>
        )}
        <Flex justify="space-around" w="100%" pt="5vh">
          <Button className={styles.button}>Edit Profile</Button>
          <Button className={styles.button}>Logout</Button>
        </Flex>
      </div>
    </div>
  );
}
