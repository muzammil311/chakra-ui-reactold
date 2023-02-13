import react from 'react'
import {Box,
    Button,
    Flex,
    Text,
    Heading,
    HStack,
    StackProps,
    Icon,
    Stack
} from '@chakra-ui/react'
import { CheckIcon } from '../icons/icon'


export const ListItem =(props:StackProps) => {
    const { children, ...rest } = props;

return(
    <HStack as='li' spacing='20px' {...rest} alignItems='start'>

<Icon as={CheckIcon}  w='22px' h='22px' />

<Text textAlign={['left','left','center']}>
{children}
</Text>

    </HStack>
)

}

export function Pricing(){
return (
    <Box mx='6'>
<Box 
    maxW='994px' 
    margin='auto' 
    mt='-150px' 
    borderRadius='12px' 
    overflow={'hidden'}
    boxShadow='2xl'>
<Flex  direction={['column','column','row']} width={'auto'}>

        <Box   p='60px'     bg='#F0EAFB'> 
            <Text fontWeight='800'fontSize='24px'>
                Premium PRO
            </Text>

        <Heading as='h3' mt='16px' fontSize={['5xl','5xl','6xl']}>
            $329
        </Heading>
            <Text color='#171923' fontSize='18px' fontWeight='500' mt='8px' >
                billed just once
            </Text>

        <Button colorScheme='purple'  size='lg' w='282px' mt='24px'>
            Get Started
        </Button>

    </Box>

    <Box p='60px' fontSize={'18px'} bg='#FFFFFF'>
    <Text textAlign={"left"} >
    Access these features when you get this pricing package for your business. 
    </Text>
    
    <Stack as='ul' spacing='20px' pt='24px'  textAlign={['left','left','center']} >
      
    
        <ListItem>International calling and messaging API</ListItem>
        <ListItem>Additional phone numbers</ListItem>
        <ListItem>Automated messages via Zapier</ListItem>
        <ListItem>24/7 support and consulting</ListItem>
        
    </Stack>
</Box>


</Flex>


</Box>

</Box>

)


}