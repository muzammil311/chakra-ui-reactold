import React from "react";
import { Stack,HStack ,Text ,Flex, Icon  ,StackProps,Box} from '@chakra-ui/react';
import { 
    MoneyBackGuaranteeIcon,
    HassleFreeIcon,
    MonthlySubscriptionIcon 
} from "../icons/icon";


interface FeatureProps extends StackProps{
icon: ElementType;

}


function Feature( props: FeatureProps){
    const { icon, children, ...rest }=props;
return(
<HStack {...rest} spacing='6'>
<Icon as={icon} boxSize='12' />
<Text textAlign='left' fontSize='lg' fontWeight='bold'>
{children}

</Text>


</HStack>

);

}
export function Features(){
    return(

        <Box   p='60px'   > 
<Flex  direction={['column','column','row']} width={'auto'}>

<Box   p='6px'     width={'auto'} height={'auto'} mt='1px'> 


<Feature icon={MoneyBackGuaranteeIcon}>
<Text>30 days money back Guarantee </Text>
</Feature>
</Box>
<Box   p='6px'     width={'auto'} height={'auto'} mt='1px'> 

<Feature icon={HassleFreeIcon}>
<Text>No setup fees
100% hassle-free </Text>

</Feature>
</Box>
<Box   p='6px'     width={'auto'} height={'auto'}> 
<Feature icon={MonthlySubscriptionIcon}>
<Text   >30 days money back Guarantee </Text>
</Feature>


</Box>



  
</Flex>
</Box>
 );
}

