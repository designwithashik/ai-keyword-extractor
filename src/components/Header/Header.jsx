import React from 'react';
import logo from '../../assets/light-bulb.svg'
import { Heading, Image, Text } from '@chakra-ui/react';

const Header = () => {
    return (
        <>
            <Image src={logo} alt='logo' width={100} marginBottom='1rem' />
            <Heading color='white' marginBottom='1rem'>
                AI Keyword Extractor
            </Heading>

            <Text textAlign='center' fontSize={25}>
                Paste in your text below and We'll extract the keyword for you
            </Text>
            
        </>
    );
};

export default Header;