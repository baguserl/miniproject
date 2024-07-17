"use client"

import {
    Button,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    FormControl,
    FormLabel,
    Input,
    Select,
} from '@chakra-ui/react'

interface ModalRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}
export function ModalRegister({isOpen, onClose}: ModalRegisterProps) {

    return (
        <>
            <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Create new account</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' placeholder='Insert email' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' placeholder='Insert password' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Confirmation Password</FormLabel>
                        <Input type='password' placeholder='Insert confirmation password' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' placeholder='Insert full name' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input type='date' placeholder='Insert Date of Birth' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Referral Code (optional)</FormLabel>
                        <Input type='text' placeholder='Insert Referral Code' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Role</FormLabel>
                        <Select isRequired={true}>
                            <option value="customer">Customer</option>
                            <option value="event_organizer">Event Organizer</option>
                        </Select>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

interface ModalLoginProps {
    isOpen: boolean;
    onClose: () => void;
}

export function ModalLogin({isOpen, onClose}: ModalLoginProps) {

    return (
        <>
            <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Sign in</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <FormControl>
                        <FormLabel>Your Email</FormLabel>
                        <Input type='email' placeholder='Insert your email' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Your Password</FormLabel>
                        <Input type='password' placeholder='Insert your password' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose}>Close</Button>
                    
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default ModalLogin