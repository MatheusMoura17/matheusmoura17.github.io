const westCombat = require('./west-combat.json') as IProject
const wbolh = require('./wbolh.json') as IProject
const recifeAdventures = require('./recife-adventures.json') as IProject
const salveRecife = require('./salve-recife.json') as IProject
const starDonkeys = require('./star-donkeys.json') as IProject
const boyDoBote = require('./boy-do-bote.json') as IProject
const embaixadinha = require('./embaixadinha.json') as IProject
const qualEANota = require('./qual-e-a-nota.json') as IProject
const speedBall3d = require('./speed-ball-3d.json') as IProject
const oPequenoUrubu = require('./o-pequeno-urubu.json') as IProject
const enemRunner = require('./enem-runner.json') as IProject
const gremlinJump = require('./gremlin-jump.json') as IProject
const mulherMelancia = require('./mulher-melancia.json') as IProject

const projects: Record<string, IProject> = {
  'west-combat': westCombat,
  wbolh,
  'mulher-melancia': mulherMelancia,
  'recife-adventures': recifeAdventures,
  'salve-recife': salveRecife,
  'star-donkeys': starDonkeys,
  'boy-do-bote': boyDoBote,
  embaixadinha,
  'qual-e-a-nota': qualEANota,
  'speedball-3d': speedBall3d,
  'o-pequeno-urubu': oPequenoUrubu,
  'enem-runner': enemRunner,
  'gremlin-jump': gremlinJump,
}

export default projects
