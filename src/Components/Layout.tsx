import React from 'react'

import Menu from './Menu'
import Grid from '@material-ui/core/Grid'

/**
 * Base de todas as páginas, utilize como componente pai
 */
const Layout: React.FC = () => {
  return (
    <Grid container>
      <Grid item>
        <Menu />
      </Grid>
      <Grid item>container</Grid>
    </Grid>
  )
}

export default Layout
