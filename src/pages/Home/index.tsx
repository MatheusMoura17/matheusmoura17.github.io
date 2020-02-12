import React from 'react'
import Grid from '@material-ui/core/Grid'
import { makeStyles } from '@material-ui/core'
import Box from '@material-ui/core/Box'

import Layout from '../../Components/Layout'
import ProjectCard from '../../components/ProjectCard'
import projects from '../../services/projects'
import Header from './Header'

const useStyles = makeStyles({
  projects: {
    width: '100%',
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
      <Box>
        <Grid className={classes.projects} container spacing={4}>
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Header />
          </Grid>
          {Object.entries(projects).map(([key, project]) => (
            <Grid key={key} item lg={2} md={3} sm={6} xs={6}>
              <ProjectCard
                name={project.name}
                image={project.images[0]}
                link={`/project/${key}`}
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
