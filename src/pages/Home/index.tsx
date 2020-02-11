import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import Layout from '../../Components/Layout'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../services/projects'
import Header from './Header'

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
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Header />
          </Grid>
          {projects.map((project, index) => (
            <Grid key={index} item lg={2} md={3} sm={6} xs={6}>
              <ProjectCard
                name={project.name}
                image={project.images.main}
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
