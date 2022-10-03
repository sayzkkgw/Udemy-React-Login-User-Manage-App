import { FC, memo } from "react";
import { Modal, ModalOverlay, ModalHeader, ModalCloseButton, ModalContent, ModalBody, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react';
import { User } from "../../types/api/user";

type Props = {
    user: User | null;
    isOpen: boolean;
    onClose: () => void;
}

export const UserDetailModal: FC<Props> = memo((props) => {
    const { user, isOpen, onClose } = props;
    return (
        <Modal isOpen={isOpen} onClose={onClose} autoFocus={false} motionPreset='slideInBottom'>
            <ModalOverlay />
            <ModalContent pb={6}>
                <ModalHeader>User Details</ModalHeader>
                <ModalCloseButton />
                <ModalBody mx={4}>
                    <Stack spacing={4}>
                        <FormControl>
                            <FormLabel>Name</FormLabel>
                            <Input value={user?.username} isReadOnly />
                            <FormLabel>Full Name</FormLabel>
                            <Input value={user?.name} isReadOnly />
                            <FormLabel>Mail</FormLabel>
                            <Input value={user?.email} isReadOnly />
                            <FormLabel>Tel</FormLabel>
                            <Input value={user?.phone} isReadOnly />
                        </FormControl>
                    </Stack>
                </ModalBody>
            </ModalContent>
        </Modal>

    )
})