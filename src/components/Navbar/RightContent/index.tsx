import { Flex } from '@chakra-ui/react';
import React from 'react';
import AuthModal from '../../Modal/Auth';
import AuthButtons from './AuthButtons';

type RightContentProps = {
  // user:
};

const RightContent: React.FC<RightContentProps> = () => (
  <>
    <AuthModal />
    <Flex justify="center" align="center">
      <AuthButtons />
    </Flex>
  </>
);
export default RightContent;
