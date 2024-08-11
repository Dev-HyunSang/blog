export const metadata = {
  title: 'To me now',
  description: 'To me now',
}

export default function Page() {
  return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold">To me now</h1>
        <h2 className="mb-4 text-xl font-semibold">고민과 실수 속 유영 중</h2>
        <p className="mb-4">
            {`최근에 앞으로 뭘 해야할지에 대한 고민을 많이 하게 되었습니다. 하고 싶은 것들이 너무 많지만 그 중에서 마음을 진정으로 울리는 것을 하고자 고민하고 있습니다.`}
            <br />
            {`실수를 하면서 앞으로 단단하게 성장하기 위해서 노력하고 있습니다. 그리고 그 과정에서 더 나은 사람이 되기 위해 노력하고 있습니다.`}
        </p>
        <blockquote className="mb-4">
          <span className="font-semibold italic">Anyone who has never made mistak has never tried anything new.</span>
          <br />
          <span className="font-semibold italic">한 번도 실수한 적이 없는 사람은 한 번도 새로운 것에 도전해 본 적이 없는 사람이다.</span>
          <br />
          <span className="font-semibold">- 알베르트 아인슈타인, Albert Einstein</span>
        </blockquote>
    </section>
  )
}
