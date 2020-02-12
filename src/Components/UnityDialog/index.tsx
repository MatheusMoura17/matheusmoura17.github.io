import React, { useRef, useState, useEffect, useMemo } from 'react'
import Unity, { UnityContent } from 'react-unity-webgl'

import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import Button from '@material-ui/core/Button'

import { Typography } from '@material-ui/core'

interface IUnityDialog {
  open: boolean
  onClose: () => void
  gameName: string
}

const UnityDialog: React.FC<IUnityDialog> = ({ open, onClose, gameName }) => {
  const [isOpen, setIsOpen] = useState(false)
  const mainRef = useRef<HTMLDivElement>(null)

  const unityContent = useMemo(
    () =>
      new UnityContent(
        `/builds/${gameName}/${gameName}.json`,
        `/builds/${gameName}/UnityLoader.js`,
      ),
    [gameName],
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
          <Unity unityContent={unityContent} />
        </div>
        <Typography>
          Pressione W A S D para andar e B para posicionar uma dinamite
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleFullScreenClicked}>Tela cheia</Button>
        <Button onClick={handleClose}>Fechar</Button>
      </DialogActions>
    </Dialog>
  )
}

export default UnityDialog
