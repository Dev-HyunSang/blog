import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="whitespace-pre-wrap">
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">안녕하세요. 박현상입니다.</h1>
        <div className="my-8">
          <div className="mb-9 mt-5">
            <p>소프트웨어 엔지니어링 분야 중 백엔드 개발에 관심이 많고 다양한 경험을 통해서 성장한 내용들을 블로그에 적습니다.
              학부에선 정보보호를 전공하고 있습니다. 소프트웨어의 보안적 안전성에 대해서 생각을 하며, 어떻게 하면 사용자 관점에서 안전한 서비스 환경을 만들어 나갈 수 있을지에 대해 항상 공부하고 경험하고 있습니다.
              다양한 분야의 관심이 많으며, 최근에는 법학에 관심이 많아서 정보보호와 법학을 접목하여 다양한 일을 할 수 있는 방법에 대해 고민하고 있습니다.  
            </p>
            <p className="text-right mt-5">
              <a href='/about' className="mt-1 underline">more for me →</a>
            </p>
          </div>
          <div className="mt-9">
            <h2 className="mb-4 text-xl font-semibold tarackig-tighter">Recent articles</h2>
            <BlogPosts />
          </div>
        </div>
      </div>
    </section>
  )
}
