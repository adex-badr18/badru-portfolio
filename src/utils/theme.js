import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
    fonts: {
        body: `'Poppins', sans-serif`,
        heading: `'Poppins', sans-serif`,
    },
    styles: {
        global: {
            'html, body': {
                bg: '#111',
                color: 'white',
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                margin: 0,
                padding: 0,
            },
            '#root': {
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
            },
        }
    }
})