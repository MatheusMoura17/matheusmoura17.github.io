import React, { useState } from 'react'
import styled from 'styled-components'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import Typography from '@material-ui/core/Typography'

import MenuIcon from '@material-ui/icons/Menu'
import ExpandLessIcon from '@material-ui/icons/ExpandLess'
import IconButton from '@material-ui/core/IconButton'

const ListStyled = styled(List)`
  display: flex;
  direction: row;
  padding: 0;
  width: 100%;
`

const ListItemTextStyled = styled(ListItemText)`
  text-align: right;
  && > span {
    font-family: 'Bebas Neue', cursive;
  }
`
const TypographyStyled = styled(Typography)`
  font-family: 'Satisfy', cursive;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

/**
 * Cabeçalho da pagina principal
 */
const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  /** Lista de items que serão renderizados no menu */
  const menuItems = (
    <>
      <ListItem button>
        <ListItemTextStyled primary="Games" />
      </ListItem>
      <ListItem button>
        <ListItemTextStyled primary="UI/UX" />
      </ListItem>
      <ListItem button>
        <ListItemTextStyled primary="Web Design" />
      </ListItem>
      <ListItem button>
        <ListItemTextStyled primary="Timeline" />
      </ListItem>
      <ListItem button selected>
        <ListItemTextStyled primary="All jobs" />
      </ListItem>
    </>
  )

  return (
    <Grid container>
      <Grid item lg={6} md={4} sm={12} xs={12}>
        <Flex>
          <TypographyStyled variant="h4">Matheus Moura</TypographyStyled>
          <Hidden mdUp>
            <IconButton size="small" onClick={() => setMenuOpen(prev => !prev)}>
              {isMenuOpen ? <ExpandLessIcon /> : <MenuIcon />}
            </IconButton>
          </Hidden>
        </Flex>
      </Grid>

      {/** Menu desktop */}
      <Hidden smDown>
        <Grid item lg={6} md={8} sm={12} xs={12}>
          <ListStyled>{menuItems}</ListStyled>
        </Grid>
      </Hidden>

      {/** Menu mobile */}
      <Hidden mdUp>
        {isMenuOpen && (
          <Grid item lg={6} md={8} sm={12} xs={12}>
            <List>{menuItems}</List>
          </Grid>
        )}
      </Hidden>
    </Grid>
  )
}

export default Header
