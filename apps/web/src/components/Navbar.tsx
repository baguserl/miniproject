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
  const [user, setUser] = useState({} as any);

  const nav = useDisclosure();

  const modalRegister = useDisclosure();
  const modalLogin = useDisclosure();

  const router = useRouter();

  async function checkCookie() {
    const cookie = await getCookie('authToken');
    if (cookie) {
      setHasCookie(!!cookie);
    } else {
      router.push('/');
    }
  }

  async function getProfile() {

    try {
      const res = await myProfile();
      setBalance(0);

      setUser(res.data.profile);
      if (res.data.profile.role === 'customer') {
        setBalance(res.data.profile.balance);
      }

      if (res.data.profile.role === 'event_organizer') {
        router.push('/eo');
      }
    } catch (error: any) {
      if (error.response.status === 500) {
        // deleteCookie('authToken');
        // router.push('/');
      }
    }
  }

  useEffect(() => {
    checkCookie();
  }, []);

  useEffect(() => {
    checkCookie();
  }, [setHasCookie, modalLogin]);

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

        {!hasCookie ? (
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>
            <Button as={'a'} fontSize={'sm'} fontWeight={400} variant={'link'} href={'#'} onClick={modalLogin.onOpen}>
              Sign In
            </Button>
            <Button
              as={'a'}
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'pink.400'}
              href={'#'}
              _hover={{
                bg: 'pink.300',
              }}
              onClick={modalRegister.onOpen}>
              Sign Up
            </Button>
          </Stack>
        ) : (
          <ProfileDropdown user={user} handleLogout={handleLogout} />
        )}
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

const ProfileDropdown = ({user, handleLogout }: {user: any, handleLogout: () => void}) => {
  const { isOpen, onToggle } = useDisclosure()

  return (
    <Stack p={4}>
      <Box>
        <Popover trigger={'click'} placement={'bottom'} closeOnBlur={false}>
          <PopoverTrigger>
            <Box>
              <Text>Hello, {user.name}</Text>
            </Box>
          </PopoverTrigger>
          <PopoverContent>
            {user.role == 'customer' && (
              <Stack>
                <Text fontSize={'sm'} fontWeight={'bold'} p={2}>
                  RefCode: {user.referralCode}
                </Text>
                <Text fontSize={'sm'} fontWeight={'bold'} p={2}>
                  Balance: {user.balance.toLocaleString('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 })}
                </Text>
              </Stack>
            )}
            <Button
              as={'a'}
              fontSize={'sm'}
              fontWeight={400}
              variant={'link'}
              href={'#'}
              p={2}
              backgroundColor={'red.500'}
              color={'white'}
              onClick={handleLogout}>
              Sign Out
            </Button>
          </PopoverContent>
        </Popover>
        
      </Box>
    </Stack>
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
