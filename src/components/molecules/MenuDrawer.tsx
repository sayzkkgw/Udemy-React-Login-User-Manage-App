import { FC, memo } from "react"
import { Drawer, DrawerOverlay, DrawerContent, DrawerBody, Button } from "@chakra-ui/react"

type Props = {
    isOpen: boolean;
    onClose: () => void;
    onClickHome: () => void;
    onClickSetting: () => void;
    onClickUserManagement: () => void;
}

export const MenuDrawer: FC<Props> = memo((props) => {
    const { isOpen, onClose, onClickHome, onClickSetting, onClickUserManagement } = props;
    return (
        <Drawer placement="left" size="sm" isOpen={isOpen} onClose={onClose}>
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerBody p="0" bg="gray.100">
                        <Button w="100%" onClick={() => { onClickHome(); onClose(); }}>Top</Button>
                        <Button w="100%" onClick={() => { onClickUserManagement(); onClose(); }}>User List</Button>
                        <Button w="100%" onClick={() => { onClickSetting(); onClose(); }}>Setting</Button>
                    </DrawerBody>
                </DrawerContent>
            </DrawerOverlay>
        </Drawer >

    )
})