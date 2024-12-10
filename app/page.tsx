import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <div className="whitespace-pre-wrap">
        <h1 className="mb-4 text-2xl font-semibold tracking-tighter">안녕하세요. 박현상입니다.</h1>
        <div className="my-8">
          <BlogPosts />
        </div>
      </div>
    </section>
  )
}
