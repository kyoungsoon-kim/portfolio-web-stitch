import {
  siClaude,
  siCursor,
  siDocker,
  siGit,
  siGithub,
  siGithubcopilot,
  siHuggingface,
  siNumpy,
  siPandas,
  siPython,
  siPytorch,
  siScikitlearn,
  siTensorflow,
  siVercel,
} from 'simple-icons'
import { ChartBar, FlowArrow, FunctionIcon } from '@phosphor-icons/react'

/*
  Static map, not a dynamic lookup on the whole package: importing simple-icons by
  computed key pulls all ~3300 icons into the bundle and kills tree-shaking.
*/
const brandIcons = {
  claude: siClaude,
  cursor: siCursor,
  docker: siDocker,
  git: siGit,
  github: siGithub,
  githubcopilot: siGithubcopilot,
  huggingface: siHuggingface,
  numpy: siNumpy,
  pandas: siPandas,
  python: siPython,
  pytorch: siPytorch,
  scikitlearn: siScikitlearn,
  tensorflow: siTensorflow,
  vercel: siVercel,
}

// Tools Simple Icons does not carry (Operations Research, AnyLogic, Minitab).
const fallbackIcons = {
  function: FunctionIcon,
  flow: FlowArrow,
  chart: ChartBar,
}

const BrandIcon = ({ slug, fallback, size = 20, className = '' }) => {
  const icon = slug ? brandIcons[slug] : null

  if (!icon) {
    const Fallback = fallbackIcons[fallback] ?? FunctionIcon
    return <Fallback size={size} weight="regular" className={className} aria-hidden="true" />
  }

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
    >
      <path d={icon.path} />
    </svg>
  )
}

export default BrandIcon
