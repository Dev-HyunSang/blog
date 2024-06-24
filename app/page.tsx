import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        안녕하세요. 소프트웨어 엔지니어 박현상입니다.
      </h1>
      <p className="mb-4">
        {`저는 제가 가지고 있는 기술과 능력을 통해서 다른 사람들을 도와줄 수 있는 사람이 되고 싶습니다.\n좁게는 내 이웃을, 크게는 우리나라를 위해 도움이 될 수 있는 사람이 되고 싶습니다.`}
      </p>
      <p className="mb-4">
        {`학부에서는 정보보호를 전공하고 있습니다. 웹해킹과 위협인텔리전스(CTI, Cyber Threat Intelligence), 공개 출저 정보(OSINT, Open-Source Intelligence)에 관심이 많습니다.`}
      </p>
      <p className="mb-4">
        {`다양한 분들과 소통하며, 인사이트를 얻는 활동을 좋아해서 개발자 커뮤니티인 GDG Golang Korea를 운영하고 있습니다. 이러한 활동을 하면서 제 자신이 부족한 부분을 찾고자 노력하고 있습니다.`}
      </p>
      <div>
        <li>정보보호병(사이버관제병) <a className="hover-link" href="https://www.army.mil.kr/" target="_blank">@대한민국 육군</a> (2024.03.18 ~ 2025.09.17)</li>
        <li>학부생 
          <a className="hover-link" href="https://home.sch.ac.kr/security/index.jsp" target="_blank">@순천향대학교 정보보호학과</a> (2023.03 ~ Current)</li>
        <li>Organizer <a className="hover-link" href="https://gdg.community.dev/gdg-golang-korea/" target="_blank">@GDG Golang Korea</a> (2023.02 ~ Current)</li>
        <li>Softwar Engineer 
          <a className="hover-link" href="https://teamgrit.kr" target="_blank">@TeamGRIT, Inc.</a> (2021.08 ~ 2023.08)
        </li>
      </div>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
