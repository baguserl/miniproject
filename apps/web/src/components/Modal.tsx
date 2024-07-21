"use client"

import { useState } from "react"

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
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'

import { loginProcess, registerProcess, myProfile } from "@/api/auth"
import { deleteCookie, setCookies } from "@/actions/cookies"
import { useRouter } from "next/navigation"
import validator from 'validator';

interface ModalRegisterProps {
    isOpen: boolean;
    onClose: () => void;
}
export function ModalRegister({isOpen, onClose}: ModalRegisterProps) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmationPassword, setConfirmationPassword] = useState("");
    const [birthdate, setBirthdate] = useState("");
    const [referralCode, setReferralCode] = useState("");
    const [role, setRole] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<"success" | "error" | "info" | "warning" | "loading" | undefined>("error");
    const [alertMessage, setAlertMessage] = useState("");

    const handleRegister = async () => {
        setAlertMessage("");
        setShowAlert(false);
        try {

            if (validator.isEmpty(email) || !validator.isEmail(email)) {
                setAlertMessage("Invalid email");
                throw new Error('Invalid email');
            } else if (validator.isEmpty(password) || validator.isEmpty(confirmationPassword)) {
                setAlertMessage("Password cannot be empty");
                throw new Error('Password cannot be empty');
            } else if (password !== confirmationPassword) {
                setAlertMessage("Passwords do not match");
                throw new Error('Passwords do not match');
            } else if (validator.isEmpty(name)) {
                setAlertMessage("Name cannot be empty");
                throw new Error('Name cannot be empty');
            } else if (validator.isEmpty(birthdate) && !validator.isISO8601(birthdate)) {
                setAlertMessage("Invalid birthdate");
                throw new Error('Invalid birthdate');
            } else if (role != "customer" && role != "event_organizer") {
                setAlertMessage("Invalid role");
                throw new Error('Invalid role');
            }

            const res = await registerProcess({
                name: name,
                email: email,
                password: password,
                birthdate: birthdate,
                referralCode: referralCode,
                role: role
            })
            
            if (res.status === 201) {
                setAlertType("success")
                setShowAlert(true);
                setAlertMessage("Success creating new account, please login to continue")
                setName("");
                setEmail("");
                setPassword("");
                setConfirmationPassword("");
                setBirthdate("");
                setReferralCode("");
                setRole("");
            } else {
                setAlertMessage(res.response.data.message);
                throw new Error(res.data.message);
            }
        } catch (error: any) {
            if (error.response?.data?.message) {
                setAlertMessage(error.response.data.message);
            }
            setAlertType("error")
            setShowAlert(true);
        }
        
    }

    return (
        <>
            <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Create new account</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {showAlert && (
                        <Alert status={alertType} mb={3}>
                            <AlertIcon />
                            {alertMessage}
                        </Alert>
                    )}
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input type='email' name='email' id='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insert email' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Password</FormLabel>
                        <Input type='password' name='password' id='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Insert password' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Confirmation Password</FormLabel>
                        <Input type='password' name='confirmationPassword' id='confirmationPassword' value={confirmationPassword} onChange={(e) => setConfirmationPassword(e.target.value)} placeholder='Insert confirmation password' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Full Name</FormLabel>
                        <Input type='text' name='name' id='name' value={name} onChange={(e) => setName(e.target.value)} placeholder='Insert full name' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Date of Birth</FormLabel>
                        <Input type='date' name='birthdate' id='birthdate' value={birthdate} onChange={(e) => setBirthdate(e.target.value)} placeholder='Insert Date of Birth' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Referral Code (optional)</FormLabel>
                        <Input type='text' name='referralCode' id='referralCode' value={referralCode} onChange={(e) => setReferralCode(e.target.value)} placeholder='Insert Referral Code' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Role</FormLabel>
                        <Select isRequired={true} value={role} defaultValue={""} onChange={(e) => setRole(e.target.value)}>
                            <option value="" disabled>-- Select Role --</option>
                            <option value="customer">Customer</option>
                            <option value="event_organizer">Event Organizer</option>
                        </Select>
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} mr={3}>Close</Button>
                    <Button onClick={handleRegister} colorScheme='blue'>Register</Button>
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
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [showAlert, setShowAlert] = useState(false);
    const [alertType, setAlertType] = useState<"success" | "error" | "info" | "warning" | "loading" | undefined>("error");
    const [alertMessage, setAlertMessage] = useState("");

    const router = useRouter();

    const handleLogin = async () => {
        try {
            if (validator.isEmpty(email) || !validator.isEmail(email)) {
                setAlertMessage("Invalid email");
                throw new Error('Invalid email');
            } else if (validator.isEmpty(password)) {
                setAlertMessage("Invalid password");
                throw new Error('Invalid password');
            }

            const res = await loginProcess(email, password);

            if (res.status === 200) {
                setAlertType("success")
                setShowAlert(true);
                setAlertMessage("Success login, proceed to continue")
                await deleteCookie("authToken");
                await setCookies("authToken", res.data.token);
                setEmail("");
                setPassword("");
                onClose();
            }
        } catch (error: any) {
            if (error.response?.data?.message) {
                setAlertMessage(error.response.data.message);
            }
            setAlertType("error")
            setShowAlert(true);
        }
    }

    return (
        <>
            <Modal closeOnOverlayClick={false} onClose={onClose} isOpen={isOpen} isCentered>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Sign in</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    {showAlert && (
                        <Alert status={alertType} mb={3}>
                            <AlertIcon />
                            {alertMessage}
                        </Alert>
                    )}
                    <FormControl>
                        <FormLabel>Your Email</FormLabel>
                        <Input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Insert your email' />
                    </FormControl>
                    <FormControl mt={4}>
                        <FormLabel>Your Password</FormLabel>
                        <Input type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Insert your password' />
                    </FormControl>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={onClose} mr={3}>Close</Button>
                    <Button onClick={handleLogin} colorScheme='blue'>Login</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )

}

export default ModalLogin