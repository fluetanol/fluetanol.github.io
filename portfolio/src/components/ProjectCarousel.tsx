import { useRef, useState, type PointerEvent } from 'react'

export type Project = {
  title: string
  period: string
  summary: string
  teamSize?: number
  category: string
  thumbnailClass: string
}

type ProjectCarouselProps = {
  projects: Project[]
  showTeamSize?: boolean
}

export default function ProjectCarousel({ projects, showTeamSize = false }: ProjectCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const dragStart = useRef({ x: 0, scrollLeft: 0 })
  const [isDragging, setIsDragging] = useState(false)

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return

    const track = trackRef.current
    if (!track) return

    dragStart.current = { x: event.clientX, scrollLeft: track.scrollLeft }
    setIsDragging(true)
    track.setPointerCapture(event.pointerId)
  }

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !trackRef.current) return
    trackRef.current.scrollLeft = dragStart.current.scrollLeft - (event.clientX - dragStart.current.x)
  }

  const stopDragging = (event: PointerEvent<HTMLDivElement>) => {
    setIsDragging(false)
    if (trackRef.current?.hasPointerCapture(event.pointerId)) {
      trackRef.current.releasePointerCapture(event.pointerId)
    }
  }

  const moveCarousel = (direction: -1 | 1) => {
    trackRef.current?.scrollBy({ left: direction * 940, behavior: 'smooth' })
  }

  return (
    <div className="project-carousel">
      <div className="carousel-toolbar">
        <p><span>DRAG</span> 카드를 잡고 좌우로 움직여 보세요.</p>
        <div className="carousel-controls" aria-label="프로젝트 이동 버튼">
          <button type="button" onClick={() => moveCarousel(-1)} aria-label="이전 프로젝트">←</button>
          <button type="button" onClick={() => moveCarousel(1)} aria-label="다음 프로젝트">→</button>
        </div>
      </div>

      <div
        ref={trackRef}
        className={`project-track${isDragging ? ' is-dragging' : ''}`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={stopDragging}
        onPointerCancel={stopDragging}
        onPointerLeave={(event) => isDragging && stopDragging(event)}
      >
        {projects.map((project, index) => (
          <article className="project-card" key={`${project.title}-${index}`}>
            <div className={`project-thumbnail ${project.thumbnailClass}`} aria-label={`${project.title} 프로젝트 썸네일`}>
              <span className="project-thumbnail__category">{project.category}</span>
              <strong>{String(index + 1).padStart(2, '0')}</strong>
              <div className="project-thumbnail__shape" />
            </div>

            <div className="project-info">
              <span className="project-index">PROJECT {String(index + 1).padStart(2, '0')}</span>
              <h3>{project.title}</h3>

              <dl className="project-meta">
                {showTeamSize && project.teamSize && (
                  <div>
                    <dt>인원</dt>
                    <dd>{project.teamSize}명</dd>
                  </div>
                )}
                <div>
                  <dt>기간</dt>
                  <dd>{project.period}</dd>
                </div>
              </dl>

              <p className="project-summary">{project.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
