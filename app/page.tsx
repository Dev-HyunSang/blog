import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        안녕하세요. 소프트웨어 엔지니어 박현상입니다.
      </h1>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
