import { ChangeEvent, FC, memo, useEffect, useState } from "react";
import { Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, FormControl, FormLabel, Input, Stack, ModalFooter } from '@chakra-ui/react';
import { User } from "../../types/api/user";
import { PrimaryButton } from "../../atoms/button/PrimaryButton";

type Props = {
    user: User | null;
    isOpen: boolean;
    isAdmin?: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
    const { user, isOpen, isAdmin = false, onClose } = props;

    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        setUsername(user?.username ?? '');
        setName(user?.name ?? '');
        setEmail(user?.email ?? '');
        setPhone(user?.phone ?? '')
    }, [user])

    const onChangeUsername = (e: ChangeEvent<HTMLInputElement>) => setUsername(e.target.value);
    const onChangeName = (e: ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onChangePhone = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.target.value);

    const onClickUpdate = () => {
        console.log(username);
        console.log(name);
        console.log(email);
        console.log(phone);
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay />
            <ModalContent pb={2}>
                <ModalHeader>User Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input value={username} onChange={onChangeUsername} isReadOnly={!isAdmin} />
                            <FormLabel>Full Name</FormLabel>
                            <Input value={name} onChange={onChangeName} isReadOnly={!isAdmin} />
                            <FormLabel>Mail</FormLabel>
                            <Input value={email} onChange={onChangeEmail} isReadOnly={!isAdmin} />
                            <FormLabel>Tel</FormLabel>
                            <Input value={phone} onChange={onChangePhone} isReadOnly={!isAdmin} />
                        </FormControl>
                    </Stack>
                </ModalBody>
                {isAdmin &&
                    <ModalFooter><PrimaryButton onClick={onClickUpdate}>Update</PrimaryButton></ModalFooter>
                }
            </ModalContent>
        </Modal >

    )
})