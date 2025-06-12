import {
    Box,
    Button,
    Group,
    Title,
  } from '@mantine/core';
  import logo from '../logo.svg';

  export default function NavBar() {
    return(
        <Box 
            style={{
                width: '100%',
                height: '60px',
                background: '#fff2e6',
                display: 'flex', 
                flexDirection: 'row',
                justifyContent: 'space-between',
                padding: '0px 20px'
            }}
        >
            <Group>
                <Title c='turquoise.6'>Itinera</Title>
            </Group>
            <Group>

            </Group>
            <Group>
                <Button>Join Now</Button>
                <Button>Log In</Button>
            </Group>
        </Box>
    );
  }