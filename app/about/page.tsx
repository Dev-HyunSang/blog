export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
        <h1 className="mb-8 text-2xl font-bold">안녕하세요. 박현상입니다.</h1>
        <div className="mb-8">
          <h2 className="mb-8 text-xl font-semibold">Motto</h2>
          <blockquote></blockquote>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">About for me</h2>
          <li>무신론자이지만 불교를 좋아합니다.</li>
          <li>미래에 대한 고민을 항상하면서 내 자신을 돌아봅니다.</li>
          <li>인문학과 철학을 좋아합니다. 글쓰는 것도 좋아합니다.</li>
          <li>다양한 분들을 만나고 이야기 나누며, </li>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Life</h2>
          <li>음악을 들으면서, 산책하는 것을 좋아합니다.</li>
          <li>아름다운 풍경과 건축물을 사진으로 담는 것을 좋아합니다.</li>
        </div>
        <div>
            <h2 className="mb-6 text-xl font-semibold">Experience</h2>
            <li><strong>Duty -</strong> 정보보호(사이버 관제)병 <a className="hover-link" href="https://www.army.mil.kr/" target="_blank">@대한민국 육군</a> (2024.03.18 ~ 2025.09.17)</li>
            <li><strong>Work -</strong> Softwar Engineer 
                <a className="hover-link" href="https://teamgrit.kr" target="_blank">@TeamGRIT, Inc.</a> (2021.08 ~ 2023.08)
            </li>
            <li><strong>Education -</strong> 학부생 
            <a className="hover-link" href="https://home.sch.ac.kr/security/index.jsp" target="_blank">@순천향대학교 정보보호학과</a> (2023.03 ~ Current)</li>
            <li><strong>Personal -</strong> Organizer 
                <a className="hover-link" href="https://gdg.community.dev/gdg-golang-korea/" target="_blank">@GDG Golang Korea</a> (2023.02 ~ Current)</li>
        </div>
    </section>
  )
}
