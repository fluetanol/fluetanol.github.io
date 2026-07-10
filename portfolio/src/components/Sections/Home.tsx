
import './Home.css'

  const moveToSection = (target: string) => {
    document.getElementById(target)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }


export default function Home() {

    return(
             <section className="hero section" id="home">
          <div className="hero__eyebrow reveal reveal--one">
            <span className="status-dot" />
            새로운 기회를 기다리고 있습니다
          </div>

          <h1 className="hero__title" aria-label="Frontend Dev 정태승">
            <span className="reveal reveal--two">Frontend Dev</span>
            <span className="reveal reveal--three">정태승<span className="accent">.</span></span>
          </h1>

          <p className="hero__description reveal reveal--four">
            기술로 개발자와 사용자 모두의 문제를 해결하고 싶은 프론트엔드 개발자 정태승입니다.
          </p>

          <button className="scroll-guide reveal reveal--five" onClick={() => moveToSection('about')}>
            <span>SCROLL TO EXPLORE</span>
            <span className="scroll-guide__line" />
          </button>

          <span className="hero__number" aria-hidden="true">01</span>
        </section>
    )
}
