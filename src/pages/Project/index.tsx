import React from 'react'
import { useRoute } from 'wouter'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'

import Layout from '../../Components/Layout'
import { routes } from '../../App'
import { Typography } from '@material-ui/core'
import YouTube from 'react-youtube-embed'

import projects from '../../services/projects'

interface IHomeProps {
  path: string
}

const Project: React.FC<IHomeProps> = () => {
  const [, params] = useRoute(routes.project)
  const project = projects[params.projectName]

  return (
    <Layout>
      <Box>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <Typography variant="h4">{project.name}</Typography>
          </Grid>
          <Grid item lg={8} md={8}>
            <Typography>{project.describe}</Typography>
          </Grid>
          <Grid item lg={4} md={4}>
            <img src="/images/others/play-store.png"></img>
          </Grid>
          <Grid item lg={4} md={4}>
            <Box>
              <YouTube id="X5wyLYNyRDE" />
            </Box>
          </Grid>
          <Grid item lg={4} md={4}>
            <Box>Game here</Box>
          </Grid>
        </Grid>
      </Box>
    </Layout>
  )
}

export default Project
