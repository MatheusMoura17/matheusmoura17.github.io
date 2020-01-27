import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import Layout from '../Components/Layout'
import ProjectCard from '../components/ProjectCard'

const useStyles = makeStyles({
  root: {
    padding: 5,
  },
  projects: {
    padding: '0 5%',
  },
})

interface IHomeProps {
  path: string
}

const Home: React.FC<IHomeProps> = () => {
  const classes = useStyles()
  return (
    <Layout>
      <Box className={classes.root}>
        <Grid className={classes.projects} container spacing={4}>
          {[...new Array(50)].map((_, index) => (
            <Grid key={index} item lg={2} md={3} sm={6} xs={6}>
              <ProjectCard
                name="West Combat"
                image="/images/west-combat/image.png"
                link=""
                overlay={Math.random() * 2 > 1 ? 'circle' : 'hexagon'}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Layout>
  )
}

export default Home
