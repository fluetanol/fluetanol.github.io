
import './Header.css'

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'About', target: 'about' },
  { label : 'Stack', target: 'stack' },
  { label: 'Team Project', target: 'team-project' },
  { label : 'Side Project', target: 'side-project' },
  { label: 'Contact', target: 'contact' },
]

const moveToSection = (target: string) => {
document.getElementById(target)?.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
})
}


export default function Header(){

    return(
        <header className="header">
        <nav className="navigation" aria-label="주요 메뉴">
          {navItems.map((item) => (
            <button key={item.target} onClick={() => moveToSection(item.target)}>
              {item.label}
            </button>
          ))}
        </nav>
      </header>
    )
}
