import logo from '../assets/mindseye-logo.svg'

type LogoMarkProps = {
  className?: string
}

export function LogoMark({ className = '' }: LogoMarkProps) {
  return <img src={logo} alt="Mind's Eye Resilience & Wellbeing" className={className} />
}
