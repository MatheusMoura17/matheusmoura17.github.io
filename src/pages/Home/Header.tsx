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
  font-family: 'Bebas Neue', cursive;
`

/**
 * Cabeçalho da pagina principal
 */
const Header: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  /** Lista de items que serão renderizados no menu */
  const getMenuItems = (isMobile: boolean) => (
    <>
      {isMobile && (
        <ListItem button onClick={() => setMenuOpen(prev => !prev)}>
          <ListItemTextStyled>
            {isMenuOpen ? <ExpandLessIcon /> : <MenuIcon />}
          </ListItemTextStyled>
        </ListItem>
      )}
      {(!isMobile || isMenuOpen) && (
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
      )}
    </>
  )

  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={4} sm={12} xs={12}>
        <TypographyStyled variant="h3">
          &#123; Matheus Moura &#125;
        </TypographyStyled>
      </Grid>
      <Grid item lg={6} md={8} sm={12} xs={12}>
        {/** Menu desktop */}
        <Hidden smDown>
          <ListStyled>{getMenuItems(false)}</ListStyled>
        </Hidden>

        {/** Menu mobile */}
        <Hidden mdUp>
          <List>{getMenuItems(true)}</List>
        </Hidden>
      </Grid>
    </Grid>
  )
}

export default Header
