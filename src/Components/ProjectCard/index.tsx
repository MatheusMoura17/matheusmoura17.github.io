import React from 'react'

import styled from 'styled-components'
import { Typography } from '@material-ui/core'
import { Link } from 'wouter'

const overlayCircle = require('./overlay-01.svg')
const overlayHexagon = require('./overlay-02.svg')

interface IProjectCardProps {
  name: string
  image: string
  link: string
  overlay: 'circle' | 'hexagon'
}

const ProjectCardStyled = styled.div<Pick<IProjectCardProps, 'image'>>`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background: url("${({ image }: Pick<IProjectCardProps, 'image'>) => image}");
  background-position: center;
  background-size: cover;
  cursor: pointer;
  transition: transform 200ms;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    transform: scale(1.04, 1.04);
  }
`

const ProjectCardInfo = styled.div<Pick<IProjectCardProps, 'overlay'>>`
  background: url(${({ overlay }: Pick<IProjectCardProps, 'overlay'>) =>
    overlay === 'circle' ? overlayCircle : overlayHexagon});
  background-repeat: no-repeat;
  width: 70%;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  && > p {
    font-family: 'Bebas Neue', cursive;
  }
`

const Root = styled.div`
  position: relative;
  width: 100%;
  padding-top: 140%;
`

const Content = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

/**
 * Mini visualização do projeto, geralmente utilizado na home
 */
const ProjectCard: React.FC<IProjectCardProps> = ({
  name,
  image,
  link,
  overlay,
}) => {
  return (
    <Root>
      <Content>
        <Link href={link}>
          <ProjectCardStyled image={image}>
            <ProjectCardInfo overlay={overlay}>
              <Typography variant="body1">{name.toUpperCase()}</Typography>
            </ProjectCardInfo>
          </ProjectCardStyled>
        </Link>
      </Content>
    </Root>
  )
}

export default ProjectCard
