import { Link as ReactRouterLink } from 'react-router-dom';
import { Box, Container, Link as ChakraLink, Button } from '@chakra-ui/react';

import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsAuth } from 'redux/auth/selectors';

export const Navigation = () => {
  const isAuth = useSelector(selectIsAuth);
  return (
    <Container>
      <Box
        as="nav"
        display="flex"
        alignItems="center"
        justifyContent="start"
        gap="15"
      >
        <ChakraLink fontSize="21" as={ReactRouterLink} to="/">
          Home
        </ChakraLink>
        {isAuth ? (
          <>
            <ChakraLink fontSize="20" as={ReactRouterLink} to="/contacts">
              Contacts
            </ChakraLink>
            <UserMenu />
          </>
        ) : (
          <Box display="flex" gap="10" ml="auto">
            <Button
              as={ReactRouterLink}
              colorScheme="green"
              variant="outline"
              to="/signUp"
            >
              Sign up
            </Button>
            <Button
              colorScheme="green"
              variant="outline"
              as={ReactRouterLink}
              to="/logIn"
            >
              Log in
            </Button>
          </Box>
        )}
      </Box>
    </Container>
  );
};
