import { AppBar, Toolbar, Grid } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ContactCard, History } from 'components'

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
      <Grid sm={3} container sx={{ mt: '100px' }}>
        <History />
      </Grid>
    </ThemeProvider>
  )
}

export default Splash