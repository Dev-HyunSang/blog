export const metadata = {
  title: '현재의 나는',
  description: '현재 제가 하고 있는 것들에 대해서 서술합니다.',
}

export default function Page() {
  return (
    <section>
        <h1 className="mb-8 text-2xl font-semibold">현재의 나는</h1>
        <div className="mb-4">
          <h2 className="mb-4 text-xl font-semibold">고민과 실수 속 유영 중</h2>
          <p className="mb-4 whitespace-pre-wrap">
            {`최근에 앞으로 뭘 해야할지에 대한 고민을 많이 하게 되었습니다. 하고 싶은 것들이 너무 많지만 그 중에서 마음을 진정으로 울리는 것을 하고자 고민하고 있습니다.\n`}
            {`실수를 하면서 다른 사람에게 피해를 끼치면 사과를 하고 앞으로 단단하게 성장하기 위해서 노력하고 있습니다. 그리고 그 과정에서 더 나은 사람이 되기 위해 노력하고 있습니다.`}
          </p>
          <blockquote>
            <span className="font-semibold italic">Anyone who has never made mistak has never tried anything new.</span>
            <br />
            <span className="font-semibold italic">한 번도 실수한 적이 없는 사람은 한 번도 새로운 것에 도전해 본 적이 없는 사람이다.</span>
            <br />
            <span className="font-semibold">- 알베르트 아인슈타인, Albert Einstein</span>
          </blockquote>
        </div>
        <hr />
        <div className="mb-4">
          <h2 className="mb-2 text-xl font-semibold">다양한 책을 읽고 있습니다.</h2>
          <p>다양한 책들을 읽으면서 개인적인 소양을 기르기 위해서 노력하고 있습니다. 주로 철학과 인문학을 좋아하며 자주 읽고 있습니다.</p>
          <ol className="list-inside list-disc mt-2">
            <li className="font-bold">2023년에 읽었던 책:</li>
            <ol className="ps-5 list-inside list-decimal">
              <li>이어령의 마지막 수업(김지수, 이어령)</li>
              <li>어떻게 살 것인가(유시민)</li>
              <li>왜 나는 너를 사랑하는가(알랭 드 보통)</li>
            </ol>
          </ol>
          <ol className="list-inside list-disc mt-2">
            <li className="font-bold">2024년에 읽었던 책:</li>
            <ol className="ps-5 list-inside list-decimal mt-1">
              <li>말의 품격(이기주)</li> 
              <li>슬픔을 공부하는 슬픔(신형철)</li>
              <li>사랑의 기술(에리히 프롬)</li>
              <li>정의란 무엇인가(마이클 샌델)</li>
              <li>사랑의 미래(이광호)</li>
            </ol>
          </ol>
        </div>
    </section>
  )
}
