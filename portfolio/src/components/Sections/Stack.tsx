import './Stack.css'

const stackGroups = [
  {
    title: 'FE',
    label: 'Frontend',
    description: '사용자가 직접 마주하는 화면과 경험을 구현합니다.',
    technologies: ['React', 'TypeScript', 'JavaScript', 'HTML', 'CSS', 'Vite'],
  },
  {
    title: 'BE',
    label: 'Backend',
    description: '서비스에 필요한 데이터와 API의 흐름을 이해합니다.',
    technologies: ['Node.js', 'Express', 'Java', 'Spring Boot', 'REST API'],
  },
  {
    title: 'Infra',
    label: 'Infrastructure',
    description: '서비스가 안정적으로 동작할 수 있는 환경을 구성합니다.',
    technologies: ['AWS', 'EC2', 'S3', 'CloudFront', 'Nginx'],
  },
  {
    title: 'DevOps',
    label: 'Development & Operations',
    description: '반복되는 배포 과정을 줄이고 개발 흐름을 개선합니다.',
    technologies: ['Docker', 'GitHub Actions', 'CI/CD', 'Vercel'],
  },
  {
    title: 'Tools',
    label: 'Collaboration Tools',
    description: '더 나은 결과를 위해 기록하고 원활하게 협업합니다.',
    technologies: ['Git', 'GitHub', 'Figma', 'Notion', 'Postman', 'VS Code'],
  },
  {
    title: 'ETC',
    label: 'And More',
    description: '기술뿐 아니라 좋은 제품을 만드는 방식도 고민합니다.',
    technologies: ['Agile', 'Web Accessibility', 'Responsive UI', 'Communication'],
  },
]

export default function Stack() {
  return (
    <section className="content-section stack-section section" id="stack">
      <div className="section-heading">
        <span>03</span>
        <h2>Tech Stack</h2>
      </div>
      <p className="stack-intro">프로젝트를 만들고 협업하는 과정에서 사용하는 기술입니다.</p>

      <div className="stack-grid">
        {stackGroups.map((group, index) => (
          <article className="stack-card" key={group.title}>
            <header className="stack-card__header">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <p>{group.label}</p>
            </header>

            <h3>{group.title}</h3>
            <p className="stack-card__description">{group.description}</p>

            <ul className="stack-list" aria-label={`${group.label} 기술 목록`}>
              {group.technologies.map((technology) => (
                <li key={technology}>{technology}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
