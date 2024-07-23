'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import {
  Box,
  Flex,
  Text,
  Icon,
  IconButton,
  Button,
  Stack,
  Collapse,
  Input,
  Image,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react'
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
} from '@chakra-ui/icons'
import { ModalRegister, ModalLogin } from '@/components/Modal'
import { deleteCookie, getCookie } from '@/actions/cookies'
import { myProfile } from '@/api/auth'
import { useRouter } from 'next/navigation'

const NAV_ITEMS = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Events',
    href: '#',
  },
  {
    label: 'Create Events',
    href: '/CreateEvent',
  },
  {
    label: 'About Us',
    href: '/AboutUs',
  },
];

export function Navbar() {
  const [hasCookie, setHasCookie] = useState(false);
  const [balance, setBalance] = useState(0);
  const nav = useDisclosure();

  const modalRegister = useDisclosure();
  const modalLogin = useDisclosure();

  const router = useRouter();

  async function checkCookie() {
    const cookie = await getCookie('authToken');
    setHasCookie(!!cookie);
  }

  async function getProfile() {
    const res = await myProfile();
    setBalance(res.data.profile.balance);
  }

  useEffect(() => {
    checkCookie();
  }, [setHasCookie]);

  useEffect(() => {
    checkCookie();
  }, [modalLogin]);

  useEffect(() => {
    if (hasCookie) {
      getProfile();
    }
  }, [hasCookie]);

  const handleLogout = async () => {
    await deleteCookie('authToken');
    setHasCookie(false);
    router.push('/');
  }

  return (
    <Box>
      <Flex
        bg={useColorModeValue('white', 'gray.800')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
        justify={'space-between'}
      >
        <Flex
          flex={{ base: 'none', md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}>
          <IconButton
            onClick={nav.onToggle}
            icon={nav.isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>

        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'center' }} align="center" position="relative">
          <Image
            src="/images/logo.png"
            alt="logo"
            boxSize="40px"
            mr={2}
          />
          <Text
            textAlign={useBreakpointValue({ base: 'center', md: 'center' })}
            fontFamily={'heading'}
            fontSize='2xl'
            fontWeight='semibold'
            whiteSpace="nowrap"
            color={useColorModeValue('gray.800', 'white')}
            mx="auto"
          >
            Musical Concert
          </Text>
        </Flex>

        <Flex flex={{ base: 'none', md: 'auto' }} justify={{ base: 'center', md: 'center' }} align="center" mx={4}>
          <DesktopNav />
        </Flex>

        <Flex flex={{ base: 0, md: 0 }} justify={{ base: 'center', md: 'flex-end' }} align="center">
          {!hasCookie ? (
            <Stack direction={'row'} spacing={4} align="center" display={{ base: 'none', md: 'flex' }}>
              <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} onClick={modalLogin.onOpen}>
                Sign In
              </Button>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={600}
                variant={'link'}
                href={'#'}
                onClick={modalRegister.onOpen}>
                Register
              </Button>
            </Stack>
          ) : (
            <Stack direction={'row'} spacing={4} align="center" display={{ base: 'none', md: 'flex' }}>
              <Box as={'a'} fontSize={'sm'}>Balance: {balance}</Box>
              <Button
                as={'a'}
                fontSize={'sm'}
                fontWeight={400}
                variant={'link'}
                href={'#'}
                onClick={handleLogout}>
                Sign Out
              </Button>
            </Stack>
          )}
        </Flex>
      </Flex>

      <Collapse in={nav.isOpen} animateOpacity>
        <MobileNav 
          modalLogin={modalLogin}
          modalRegister={modalRegister}
          hasCookie={hasCookie}
          balance={balance}
          handleLogout={handleLogout}
        />
        <Box p={4} display={{ md: 'none' }}>
          <Input
            placeholder="Search Location"
            width="100%"
            bg={useColorModeValue('white', 'gray.700')}
            color={useColorModeValue('gray.800', 'white')}
            mb={4}
          />
        </Box>
      </Collapse>

      <ModalRegister isOpen={modalRegister.isOpen} onClose={modalRegister.onClose}/>
      <ModalLogin isOpen={modalLogin.isOpen} onClose={modalLogin.onClose}/>
    </Box>
  )
}

const DesktopNav = () => {
  const linkColor = useColorModeValue('gray.600', 'gray.200')
  const linkHoverColor = useColorModeValue('gray.800', 'white')

  return (
    <Stack direction={'row'} spacing={4} alignItems="center" display={{ base: 'none', md: 'flex' }}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Box
            as="a"
            p={2}
            href={navItem.href ?? '#'}
            fontSize={'sm'}
            fontWeight={500}
            color={linkColor}
            _hover={{
              textDecoration: 'none',
              color: linkHoverColor,
            }}>
            {navItem.label}
          </Box>
        </Box>
      ))}
      <Input
        placeholder="Search Location"
        width="auto"
        bg={useColorModeValue('white', 'gray.700')}
        color={useColorModeValue('gray.800', 'white')}
        ml={4}
      />
    </Stack>
  )
}

const MobileNav = ({ modalLogin, modalRegister, hasCookie, balance, handleLogout }: { modalLogin: any, modalRegister: any, hasCookie: boolean, balance: number, handleLogout: () => void }) => {
  return (
    <Stack bg={useColorModeValue('white', 'gray.800')} p={4} display={{ md: 'none' }}>
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
      {!hasCookie ? (
        <Stack direction={'row'} spacing={4} align="center" mt={4}>
          <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} onClick={modalLogin.onOpen}>
            Sign In
          </Button>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={600}
            variant={'link'}
            href={'#'}
            onClick={modalRegister.onOpen}>
            Register
          </Button>
        </Stack>
      ) : (
        <Stack direction={'row'} spacing={4} align="center" mt={4}>
          <Box as={'a'} fontSize={'sm'}>Balance: {balance}</Box>
          <Button
            as={'a'}
            fontSize={'sm'}
            fontWeight={400}
            variant={'link'}
            href={'#'}
            onClick={handleLogout}>
            Sign Out
          </Button>
        </Stack>
      )}
    </Stack>
  )
}

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Box
        py={2}
        as="a"
        href={href ?? '#'}
        justifyContent="space-between"
        alignItems="center"
        _hover={{
          textDecoration: 'none',
        }}>
        <Text fontWeight={600} color={useColorModeValue('gray.600', 'gray.200')}>
          {label}
        </Text>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={'all .25s ease-in-out'}
            transform={isOpen ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          />
        )}
      </Box>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.700')}
          align={'start'}>
          {children &&
            children.map((child) => (
              <Box as="a" key={child.label} py={2} href={child.href}>
                {child.label}
              </Box>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  )
}

interface NavItem {
  label: string
  subLabel?: string
  children?: Array<NavItem>
  href?: string
}
