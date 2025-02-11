export const metadata = {
  title: 'about for me',
}

export default function Page() {
  return (
    <section>
        <h1 className="text-3xl font-bold">안녕하세요. 박현상입니다.</h1>
        <div className="mt-8 mb-8">
          <h2 className="mb-3 text-2xl font-semibold">motto</h2>
          <blockquote>
            <strong>一切唯心造(일체유심조)</strong>
            <br/>
            <strong>모든 것은 오직 마음에서 지어내는 것.</strong>
            <br />
            - 대방광불화엄경
          </blockquote>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">about for me</h2>
          <ol className="list-outside list-disc ml-5">
            <li>무신론자이지만 모든 종교를 좋아합니다.</li>
            <li>사소함에서 행복과 감사함을 찾고자 노력합니다.</li>
            <li>죽음을 두려워하지 않습니다. 항상 죽음에 대해서 생각하고 있습니다.</li>
            <li>다양한 경험을 통해서 제 자신을 성장시키고자 노력하고 있습니다.</li>
            <li>최근에는 컴퓨터(공학)을 주로 공부하기 보단, 공학과 함께 어울릴 수 있는 무언가를 찾고 공부하고자 노력하고 있습니다.</li>
          </ol>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">life</h2>
          <ol className="list-outside list-disc ml-5">
            <li>음악을 들으면서, 산책하는 것을 좋아합니다.</li>
            <li>서점에서 책을 보며, 시간 보내는 것을 좋아합니다.</li>
            <li>아름다운 풍경과 건축물을 사진으로 담는 것을 좋아합니다.</li>
          </ol>
        </div>
        <div className="mb-8"> 
          <h2 className="mb-2 text-2xl font-semibold">experience</h2>
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold">work</h3>
            <ol className="list-inside list-disc mt-2">
              <li className="font-bold">정보보호병(사이버관제병) <a href="https://www.army.mil.kr/sites/army/index.do" className="hover:text-neutral-200">@대한민국 육군</a></li>
              <li className="ps-5 list-inside">정보보호 24-1기 / 자세한 업무 내용은 상시작전부대 특성 및 작전보안 상 생략.</li>
            </ol>
            <ol className="list-inside list-disc mt-2">
              <li className="font-bold">Software Engineer <a href="https://www.teamgrit.kr/" className="hover:text-neutral-200">@TeamGRIT, Inc.</a> (2022.08 ~ 2023.08)</li>
              <li className="ps-5 list-inside">Go언어 서버 개발 / 영상 프로세싱 시스템 개발</li>
            </ol>
          </div>
          <div className="mb-2">
            <h3 className="mb-2 text-xl font-semibold">personal</h3>
            <ol className="list-inside list-disc mt-2">
              <li className="font-bold">학부생 <a href="https://home.sch.ac.kr/security/index.jsp" className="hover:text-neutral-200">@순천향대학교 정보보호학과</a> (2023 ~ Current)</li>
              <li className="ps-5 list-insid">1학년 과대표 활동</li>
            </ol>
            <ol className="list-inside list-disc mt-2">
              <li className="font-bold">Organizer <a href="https://gdg.community.dev/gdg-golang-korea/" className="hover:text-neutral-200">@GDG Golang Korea</a> (2023.03 ~ Current)</li>
              <li className="ps-5 list-inside">Go언어와 관련된 각종 행사 개최 및 미디어 담당</li>
              <li className="ps-5 list-inside">GopherCon Korea 2024 미디어 리드</li>
            </ol>
            <ol className="list-inside list-disc mt-2">
              <li className="font-bold">교육생 <a href="https://dream.mokpo.ac.kr/dream/index.do" className="hover:text-neutral-200">@목포대학교 정보보호영재교육원</a> (2017.03 ~ 2021.11)</li>
              <li className="ps-5 list-inside">중등기초, 중등심화, 고등전문(웹해킹), 고등전문(리버싱) 수료</li>
            </ol>
          </div>
        </div>
        <div className="mb-8">
          <h2 className="mb-2 text-2xl font-semibold">contact</h2>
          <p>다양한 분들을 만나뵙고, 함께 의견 나누를 것을 좋아합니다.<br/> 
            언제든 커피챗이 필요하면 메일로 연락 주시면 감사하겠습니다 :-)</p>
          <p className="mt-2"><b>Email - </b><a className="hover:text-neutral-200 hover:font-bold" href="mailto:me@hyunsang.dev">(main) me@hyunsang.dev</a> • <a className="hover:text-neutral-200 hover:font-bold" href="mailto:park.hyunsang@sch.ac.kr">(sub) park.hyunsang@sch.ac.kr</a></p>
        </div>
    </section>
  )
}
