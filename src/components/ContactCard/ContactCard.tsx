import { Avatar, Typography, Link, Grid } from '@mui/material'
import { LinkedIn } from '@mui/icons-material'

const ContactCard = () => {
  return (
    <Grid container direction="row" alignItems="center" mb={1}>
      <Grid item>
        <Avatar
          alt="Teesh"
          src={process.env.PUBLIC_URL + '/teesh.jpg'}
          sx={{ width: 75, height: 75 }}
        />
      </Grid>
      <Grid item sx={{ pl: 2 }}>
        <Grid container direction="column">
          <Typography sx={{ fontSize: 30 }}>
            Priteesh Shahi
          </Typography>
          <Typography sx={{ fontSize: 15 }}>
            Senior Software Engineer
          </Typography>
          <Grid container direction="row" alignItems="center">
            <Grid item sx={{ pr: .5 }}><LinkedIn/></Grid>
            <Grid item><Link href="httsp://linkedin.com/in/teeshshahi" target="_blank" underline="none">linkedin.com/in/teeshshahi</Link></Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default ContactCard