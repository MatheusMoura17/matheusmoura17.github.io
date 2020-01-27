import React from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Box from '@material-ui/core/Box'
import Hidden from '@material-ui/core/Hidden'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import { makeStyles } from '@material-ui/core/styles'

import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const drawerWidth = '50px'

const useStyles = makeStyles({
  container: {
    marginLeft: drawerWidth,
  },
  listIcon: {
    minWidth: 0,
    color: '#ecf0f1',
  },
  verticalList: {},
  horizontalList: {
    display: 'flex',
    flexDirection: 'row',
    padding: 0,
  },
  drawer: {
    width: drawerWidth,
  },
  drawerPaper: {
    background: '#8e44ad',
  },
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
})

interface IMenuItemProps {
  direction: 'vertical' | 'horizontal'
}
/**
 * Todos os itens que ficam no menu mobile e desktop
 */
const MenuItems: React.FC<IMenuItemProps> = ({ direction }) => {
  const classes = useStyles()
  return (
    <List
      className={
        direction === 'horizontal'
          ? classes.horizontalList
          : classes.verticalList
      }
      component="nav"
      aria-label="Menu de contato e midias sociais"
    >
      <ListItem button>
        <ListItemIcon className={classes.listIcon}>
          <LinkedInIcon />
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemIcon className={classes.listIcon}>
          <FacebookIcon />
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemIcon className={classes.listIcon}>
          <InstagramIcon />
        </ListItemIcon>
      </ListItem>

      <ListItem button>
        <ListItemIcon className={classes.listIcon}>
          <AccountCircleIcon />
        </ListItemIcon>
      </ListItem>
    </List>
  )
}

interface ILayoutProps {
  children?: React.ReactNode
}

/**
 * Base de todas as páginas, utilize como componente pai
 */
const Layout: React.FC<ILayoutProps> = ({ children }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      {/** Menu desktop */}
      <Hidden smDown>
        <Drawer
          className={classes.drawer}
          open
          variant="permanent"
          anchor="left"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box
            display="flex"
            height="100%"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <MenuItems direction="vertical" />
          </Box>
        </Drawer>
        <div className={classes.container}>{children}</div>
      </Hidden>

      {/** Menu mobile */}
      <Hidden mdUp>
        <Drawer
          open
          anchor="bottom"
          variant="permanent"
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <Box
            display="flex"
            flexDirection="row"
            width="100%"
            alignItems="center"
            alignContent="center"
            justifyContent="center"
          >
            <MenuItems direction="horizontal" />
          </Box>
        </Drawer>
        <div>{children}</div>
      </Hidden>
    </div>
  )
}

export default Layout
