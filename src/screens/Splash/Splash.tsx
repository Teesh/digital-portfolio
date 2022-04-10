import { AppBar, Toolbar } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ContactCard } from 'components'

const Splash = () => {
  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
    },
  })

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="fixed">
        <Toolbar>
          <ContactCard />          
        </Toolbar>
      </AppBar>
    </ThemeProvider>
  )
}

export default Splash