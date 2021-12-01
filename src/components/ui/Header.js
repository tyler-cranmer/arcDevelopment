import React from 'react';
import AppBar from '@mui/material/AppBar';
import { Toolbar } from '@mui/material';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

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
        marginRight: 'auto'
  },
  tabContainerR: {
      marginLeft: 'auto'
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        // marginLeft: "25px"
    },
}));

export default function Header(props) {
    const classes = useStyles();
    

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar color='primary'>
          <Toolbar>
            <Tabs className={classes.tabContainerL}>
              <Tab className={classes.tab} label='Story' />
              <Tab className={classes.tab} label='Roadmap' />
              <Tab className={classes.tab} label='Team' />
              <Tab className={classes.tab} label='Terms' />
            </Tabs>
            <Tabs className={classes.tabContainerR}>
              <Tab className={classes.tab} label='Wallet Button' />
              <Tab className={classes.tab} label='Twitter Button' />
              <Tab className={classes.tab} label='Discord Logo' />
              <Tab className={classes.tab} label='OpenSea Button' />
            </Tabs>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}
