import ProjectCarousel, { type Project } from '../ProjectCarousel'

const sideProjects: Project[] = [
  {
    title: '오늘의 문장',
    period: '2025.07~2025.09',
    summary: '마음에 남은 문장을 수집하고 다시 꺼내 읽을 수 있는 개인 아카이빙 서비스입니다.',
    category: 'ARCHIVE',
    thumbnailClass: 'thumbnail--paper',
  },
  {
    title: '나만의 공간 큐레이션',
    period: '2025.01~2025.03',
    summary: '좋아하는 공간을 목적과 분위기에 따라 기록하고 공유하는 취향 기반 큐레이션 프로젝트입니다.',
    category: 'CURATION',
    thumbnailClass: 'thumbnail--mint',
  },
  {
    title: '집중 시간 기록기',
    period: '2024.10~2024.11',
    summary: '방해 요소를 줄이고 하루의 집중 시간을 가볍게 기록할 수 있도록 만든 생산성 도구입니다.',
    category: 'PRODUCTIVITY',
    thumbnailClass: 'thumbnail--blue',
  },
]

export default function SideProject() {
  return (
    <section className="content-section project-section section" id="side-project">
      <div className="section-heading">
        <span>05</span>
        <h2>Side Project</h2>
      </div>
      <p className="section-intro">일상의 작은 불편과 관심사에서 시작한 개인 프로젝트입니다.</p>
      <ProjectCarousel projects={sideProjects} />
    </section>
  )
}
