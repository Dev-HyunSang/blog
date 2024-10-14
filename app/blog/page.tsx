import { BlogPosts } from 'app/components/posts'

export const metadata = {
  title: 'Blog',
  description: 'Read my blog.',
}

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">HyunSang's blog</h1>
      <p className="tracking-tighter mb-5 font-semibold">문학을 애증합니다. 글로 무언가를 정의하며 설명하는 것을 좋아합니다 :-)</p>  
      <BlogPosts />
    </section>
  )
}
