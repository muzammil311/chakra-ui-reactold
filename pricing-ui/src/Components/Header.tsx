import React from "react";
import {Box, Heading,Text} from "@chakra-ui/react"
export function Header(){
return(
    <Box pb='0px'  as='section'>
    <Box    
                   color='grey.50'
                    bg= 'purple.600' 
                    pb='198px'
                    px='8'
                    pt='90px'
                    width={'1244'}
                    textAlign={['left','left','center']}
    >
    <Heading fontWeight='extrabold' fontSize={['xl','3xl','5xl']} textColor='#F7FAFC'>
        Simple pricing for your business</Heading>
    
    <Text   fontWeight= 'medium'
            fontSize={['md','lg','2xl']}
            pt='4'
           textColor={'white'}>
    Plans that are carefully crafted to suit your business.</Text>

</Box>
</Box>
)

}