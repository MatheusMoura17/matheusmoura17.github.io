/**
 * Conteúdo dos projetos na pasta 'projects'
 */
interface IProject {
  /** Nome do projeto */
  name: string
  /** Descrição completa */
  describe: string
  /** Data de criação */
  createAt: string
  /** Todas as habilidades abordadas neste projeto */
  skills: string[]
  images: {
    /** Imagem principal do projeto */
    main: string
  }
}
