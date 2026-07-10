import ProjectCarousel, { type Project } from '../ProjectCarousel'

const teamProjects: Project[] = [
  {
    title: '함께 만드는 협업 플랫폼',
    teamSize: 5,
    period: '2025.03~2025.06',
    summary: '팀원들이 업무와 일정을 한눈에 공유하고, 프로젝트의 흐름을 놓치지 않도록 만든 협업 서비스입니다.',
    category: 'COLLABORATION',
    thumbnailClass: 'thumbnail--forest',
  },
  {
    title: '지역 기반 커뮤니티',
    teamSize: 4,
    period: '2024.09~2024.12',
    summary: '동네의 유용한 정보와 관심사를 가까운 사람들과 편안하게 나눌 수 있는 지역 커뮤니티입니다.',
    category: 'COMMUNITY',
    thumbnailClass: 'thumbnail--sage',
  },
  {
    title: '학습 기록 대시보드',
    teamSize: 3,
    period: '2024.03~2024.07',
    summary: '매일의 학습 기록을 시각화하고 목표 달성 과정을 직관적으로 확인할 수 있도록 설계했습니다.',
    category: 'EDUCATION',
    thumbnailClass: 'thumbnail--night',
  },
]

export default function TeamProject() {
  return (
    <section className="content-section project-section section" id="team-project">
      <div className="section-heading">
        <span>04</span>
        <h2>Team Project</h2>
      </div>
      <p className="section-intro">팀과 함께 고민하고 완성한 프로젝트입니다.</p>
      <ProjectCarousel projects={teamProjects} showTeamSize />
    </section>
  )
}
