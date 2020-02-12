import React, { useState } from 'react'
import { useRoute } from 'wouter'
import styled from 'styled-components'

import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import YouTube from 'react-youtube-embed'
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button'

import Layout from '../../Components/Layout'
import UnityDialog from '../../Components/UnityDialog'
import { routes } from '../../App'
import projects from '../../services/projects'

const StyledContainer = styled(Container)`
  background: #fff;
`

const TypographyStyled = styled(Typography)`
  text-align: justify;
  font-family: 'Bebas Neue', cursive;
`

const Image = styled.img`
  width: 100%;
`

interface IHomeProps {
  path: string
}

const Project: React.FC<IHomeProps> = () => {
  const [unityOpen, setUnityOpen] = useState(false)
  const [, params] = useRoute(routes.project)
  const project = projects[params.projectName]

  return (
    <Layout>
      <StyledContainer maxWidth="md">
        <Grid container spacing={2}>
          {/** Area de informações */}
          <Grid item sm={12}>
            <TypographyStyled
              style={{ padding: '40px 0' }}
              variant="h3"
              gutterBottom
            >
              {project.name}
            </TypographyStyled>
            <TypographyStyled>{project.describe}</TypographyStyled>
          </Grid>

          {/** Opções de acesso */}
          <Grid item sm={12}>
            <TypographyStyled variant="h5">Opções de acesso</TypographyStyled>
            {project.playStoreLink && (
              <Button
                onClick={() => window.open(project.playStoreLink)}
                color="primary"
                variant="contained"
                style={{ marginRight: 5 }}
              >
                Play Store
              </Button>
            )}
            <Button
              onClick={() => setUnityOpen(true)}
              color="primary"
              variant="contained"
            >
              Jogar Online
            </Button>
          </Grid>

          {/** Vídeo demonstrativo */}
          {project.video && (
            <Grid item sm={12}>
              <TypographyStyled variant="h5">
                Vídeo demostrativo
              </TypographyStyled>
              <YouTube id={project.video} />
            </Grid>
          )}

          {/** Galeria de imagens */}
          <Grid item sm={12}>
            <TypographyStyled variant="h5">Galeria de imagens</TypographyStyled>
            <Grid container>
              {project.images.map((item, index) => (
                <Grid item sm={12} key={index}>
                  <Image src={item} />
                </Grid>
              ))}
            </Grid>
          </Grid>

          {/** Dialogs */}
          <UnityDialog
            open={unityOpen}
            onClose={() => setUnityOpen(false)}
            gameName={params.projectName}
          />
        </Grid>
      </StyledContainer>
    </Layout>
  )
}

export default Project
