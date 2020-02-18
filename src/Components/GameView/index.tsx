import React, { useRef, useState, useEffect, useMemo } from 'react'
import Unity, { UnityContent } from 'react-unity-webgl'
import styled from 'styled-components'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'

const StyledIframe = styled.iframe`
  border: none;
  width: 100%;
  height: 100%;
`

interface IGameView {
  open: boolean
  variant: 'html' | 'unity'
  onClose: () => void
  gameName: string
}

const GameView: React.FC<IGameView> = ({
  variant,
  open,
  onClose,
  gameName,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const builGamePath = `/builds/${gameName}`

  const unityContent = useMemo(
    () =>
      new UnityContent(
        `${builGamePath}/${gameName}.json`,
        `${builGamePath}/UnityLoader.js`,
      ),
    [builGamePath, gameName],
  )

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  const handleFullScreenClicked = () => {
    mainRef?.current?.requestFullscreen()
  }

  const handleClose = () => {
    setIsOpen(false)
    onClose()
  }

  return (
    <Dialog onClose={handleClose} open={isOpen} maxWidth="lg">
      <DialogContent>
        <div ref={mainRef}>
          {variant === 'unity' && <Unity unityContent={unityContent} />}
          {variant === 'html' && (
            <StyledIframe src={`${builGamePath}/index.html`} />
          )}
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFullScreenClicked}>Tela cheia</Button>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default GameView
