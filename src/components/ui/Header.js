import React, {useState}  from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TwitterIcon from '@mui/icons-material/Twitter';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';




function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

const useStyles = makeStyles((theme) => ({
  toolbarMargin: {
    ...theme.mixins.toolbar,
  },
  tabContainerL: {
    marginRight: 'auto',
  },
  tabContainerR: {
    marginLeft: 'auto',
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    // marginLeft: "25px"
  },
  logo: {
    ...theme.typography.logo,
  },
  button: {
    
  }
}));

// // used for discord logo
// function DiscordIcon(props) {
//   return (
//     <SvgIcon {...props}>
//       <path d='M42.298,11.65c-0.676-1.021-1.633-1.802-2.768-2.256c-2.464-0.988-4.583-1.648-6.479-2.02	C31.721,7.114,30.404,7.768,29.771,9l-0.158,0.308c-1.404-0.155-2.895-0.207-4.593-0.164c-1.741-0.042-3.237,0.009-4.643,0.164	L20.22,9c-0.633-1.232-1.952-1.885-3.279-1.625c-1.896,0.371-4.016,1.031-6.479,2.02c-1.134,0.454-2.091,1.234-2.768,2.256	c-4.721,7.131-6.571,14.823-5.655,23.517c0.032,0.305,0.202,0.578,0.461,0.741c3.632,2.29,6.775,3.858,9.891,4.936	c1.303,0.455,2.748-0.054,3.517-1.229l1.371-2.101c-1.092-0.412-2.158-0.9-3.18-1.483c-0.479-0.273-0.646-0.884-0.373-1.363	c0.273-0.481,0.884-0.65,1.364-0.373c3.041,1.734,6.479,2.651,9.942,2.651s6.901-0.917,9.942-2.651	c0.479-0.277,1.09-0.108,1.364,0.373c0.273,0.479,0.106,1.09-0.373,1.363c-1.056,0.603-2.16,1.105-3.291,1.524l1.411,2.102	c0.581,0.865,1.54,1.357,2.528,1.357c0.322,0,0.647-0.053,0.963-0.161c3.125-1.079,6.274-2.649,9.914-4.944	c0.259-0.163,0.429-0.437,0.461-0.741C48.869,26.474,47.019,18.781,42.298,11.65z M18.608,28.983c-1.926,0-3.511-2.029-3.511-4.495	c0-2.466,1.585-4.495,3.511-4.495s3.511,2.029,3.511,4.495C22.119,26.954,20.534,28.983,18.608,28.983z M31.601,28.957	c-1.908,0-3.478-2.041-3.478-4.522s1.57-4.522,3.478-4.522c1.908,0,3.478,2.041,3.478,4.522S33.509,28.957,31.601,28.957z'  />
//     </SvgIcon>
//   );
// }


export default function Header(props) {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const handleChange = (e, value) => {
    setValue(value)
  }
    

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position='fixed' color='secondary'>
          <Toolbar disableGutters>
            <Tabs
              value={value}
              onChange={handleChange}
              className={classes.tabContainerL}>
              <Tab className={classes.tab} label='Story' />
              <Tab className={classes.tab} label='Roadmap' />
              <Tab className={classes.tab} label='Team' />
              <Tab className={classes.tab} label='Terms' />
            </Tabs>
            <Stack direction='row' spacing={1}>
              <Button
                variant='contained'
                className={classes.button}
                color='secondary'
                disableElevation>
                Wallet Connect Button
              </Button>
              <IconButton>
                <TwitterIcon fontSize='large' className={classes.logo} />
              </IconButton>
              <IconButton>
                <SportsEsportsIcon fontSize='large' className={classes.logo} />
              </IconButton>
              <IconButton>
                <SportsEsportsIcon fontSize='large' className={classes.logo} />
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
