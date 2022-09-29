import { Box, Divider, Flex, Heading, Input, Stack } from "@chakra-ui/react"
import { ChangeEvent, FC, memo, useState } from "react"
import { PrimaryButton } from "../atoms/button/PrimaryButton"
import { useAuth } from "../hooks/useAuth"

export const Login: FC = memo(() => {
    const { login, loading } = useAuth();
    const [userId, setUserId] = useState<string>("");
    const onChangeUserId = (e: ChangeEvent<HTMLInputElement>) => setUserId(e.target.value);
    const onClickLogin = () => login(userId);
    return (
        <Flex align="center" justify="center" height="100vh">
            <Box bg="white" w="sm" p="4" borderRadius="lg" shadow="md">
                <Heading as="h1" size="md" textAlign="center" m="4" color="gray.700">User Management App!</Heading>
                <Divider my="4" />
                <Stack spacing="5" py="4" px="10">
                    <Input placeholder="User ID" value={userId} onChange={onChangeUserId} />
                    <PrimaryButton disabled={userId === ""} loading={loading} onClick={onClickLogin}>Login</PrimaryButton>
                </Stack>
            </Box>
        </Flex>
    )
})