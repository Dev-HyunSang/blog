import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="whitespace-pre-wrap">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          안녕하세요. 박현상입니다.
        </h1>
        <p>{"학부에서 정보보호를 전공하고 있습니다.\n프로그래밍과 관련된 다양한 글과 함께 제 가치관에 대한 글을 종종 쓰고 있습니다."}</p>
        <div className="my-8">
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
