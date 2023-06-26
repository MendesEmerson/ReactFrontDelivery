import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button } from "@chakra-ui/react"
import React from "react"

interface IAlertDialog {
    title: string
    message: string
    onClickConfirm: () => void
    isOpen: boolean
    onClose: () => void
}

export function AlertDialogComponent({ message, onClickConfirm, title, isOpen, onClose }: IAlertDialog) {
    type FocusableElement = HTMLElement | SVGElement | null;
    const cancelRef = React.useRef<FocusableElement>(null);

    return (

        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
            onClose={onClose}
        >
            <AlertDialogOverlay>
                <AlertDialogContent>
                    <AlertDialogHeader fontSize="lg" fontWeight="bold">
                        {title}
                    </AlertDialogHeader>
                    <AlertDialogBody>
                        {message}
                    </AlertDialogBody>
                    <AlertDialogFooter>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button ml={3} colorScheme="red"
                            onClick={() => (
                                onClickConfirm(),
                                onClose()
                            )}
                        >
                            Confirmar
                        </Button>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>

    )
}