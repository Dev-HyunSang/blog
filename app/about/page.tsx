export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
        <h1 className="text-2xl font-bold">안녕하세요. 박현상입니다.</h1>
        <div className="mt-8 mb-8">
          <h2 className="mb-3 text-xl font-semibold">Motto</h2>
          <blockquote><b>"만일 그대가 그대 자신을 사랑한다면, 그대는 모든 사람을 그대 자신을 사랑하듯 사랑할 것이다. 그대가 그대 자신보다도 다른 사람을 더 사랑하는 한, 그대는 정녕 그대 자신을 사랑하지 못할 것이다. 그러나 그대 자신을 포함해서 모든 사람을 똑같이 사랑한다면, 그대는 그들을 한 인간으로 사랑할 것이고 이 사람은 신인 동시에 인간이다. 따라서 그는 자기 자신을 사랑하면서 마찬가지로 다른 모든 사람도 사랑하는 위대하고 올바른 사람이다."</b>
            <br/>
          - 사랑의 기술(에리히 프롬), 마이스터 에크하르트의 전언 중.
          </blockquote>        
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">About for me</h2>
          <li>무신론자이지만 불교를 좋아합니다.</li>
          <li>사소함에서 행복과 감사함을 찾고자 노력합니다.</li>
          <li>미래에 대한 고민을 항상하면서 내 자신을 돌아봅니다.</li>
          <li>인문학과 철학을 좋아합니다. 글쓰는 것도 좋아합니다.</li>
          <li>다양한 분들을 만나고 이야기 나누며, 식견을 얻는 것을 좋아합니다.</li>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Life</h2>
          <li>음악을 들으면서, 산책하는 것을 좋아합니다.</li>
          <li>서점에서 책을 보며, 시간 보내는 것을 좋아합니다.</li>
          <li>아름다운 풍경과 건축물을 사진으로 담는 것을 좋아합니다.</li>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Interested</h2>
          <li><b>Cyber Secuirty -</b> Web Hacking(Vulnerability) • North Korea Cyber Intelligence</li>
          <li><b>Programming -</b> (main) Golang • Rust • (sub) Python</li>
          <li><b>ETC -</b> Law</li>
        </div>
        <div className="mb-8">
            <h2 className="mb-2 text-xl font-semibold">Experience</h2>
            <li><strong>Duty -</strong> 정보보호(사이버 관제)병
              <a className="hover-link" href="https://www.army.mil.kr/" target="_blank">@대한민국 육군</a> (2024.03.18 ~ 2025.09.17)</li>
            <li><strong>Work -</strong> Softwar Engineer 
                <a className="hover-link" href="https://teamgrit.kr" target="_blank">@TeamGRIT, Inc.</a> (2021.08 ~ 2023.08)
            </li>
            <li><strong>Education -</strong> 학부생 
              <a className="hover-link" href="https://home.sch.ac.kr/security/index.jsp" target="_blank">@순천향대학교 정보보호학과</a> (2023.03 ~ Current)
            </li>
            <li><strong>Personal -</strong> Organizer 
              <a className="hover-link" href="https://gdg.community.dev/gdg-golang-korea/" target="_blank">@GDG Golang Korea</a> (2023.02 ~ Current)
            </li>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-xl font-semibold">Contact for me</h2>
          <li><b>Email - </b><a className="hover-link" href="mailto:me@hyunsang.dev">(main) me@hyunsang.dev</a> • <a className="hover-link" href="mailto:park.hyunsang@sch.ac.kr">(sub) park.hyunsang@sch.ac.kr</a></li>
        </div>
    </section>
  )
}
