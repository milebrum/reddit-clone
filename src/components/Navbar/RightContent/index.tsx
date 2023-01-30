import { Button, Flex } from '@chakra-ui/react';
import { signOut } from 'firebase/auth';
import React from 'react';
import { auth } from '../../../firebase/clientApp';
import AuthModal from '../../Modal/Auth';
import AuthButtons from './AuthButtons';

type RightContentProps = {
  user: any;
};

const RightContent: React.FC<RightContentProps> = ({ user }) => (
  <>
    <AuthModal />
    <Flex justify="center" align="center">
      {user ? (
        <Button onClick={() => signOut(auth)}>Logout</Button>
      ) : (
        <AuthButtons />
      )}
    </Flex>
  </>
);
export default RightContent;
