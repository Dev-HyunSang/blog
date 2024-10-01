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
            {`실수를 하면서 다른 사람에게 피해를 끼치면 사과를 하고 앞으로 단단하게 성장하기 위해서 노력하고 있습니다. 그리고 그 과정에서 더 나은 사람이 되기 위해 노력하고 있습니다.`}
        </p>
        <blockquote className="mb-4">
          <span className="font-semibold italic">Anyone who has never made mistak has never tried anything new.</span>
          <br />
          <span className="font-semibold italic">한 번도 실수한 적이 없는 사람은 한 번도 새로운 것에 도전해 본 적이 없는 사람이다.</span>
          <br />
          <span className="font-semibold">- 알베르트 아인슈타인, Albert Einstein</span>
        </blockquote>
        <h2 className="mb-4 text-xl font-semibold">다양한 책을 읽고 있습니다.</h2>
        <p>다양한 책들을 읽으면서 개인적인 소양을 기르기 위해서 노력하고 있습니다. 주로 철학과 인문학을 좋아하며 자주 읽고 있습니다.</p>
        <br />
        <p><b>2024 -</b> 말의 품격(이기주), 슬픔을 공부하는 슬픔(신형철), 사랑의 기술(에리히 프롬)</p>
        <h2 className="mt-3 mb-4 text-xl font-semibold">개인적으로 법학을 공부하고 있습니다.</h2>
        <p>학부 졸업 이후 로스쿨에 가기 위해서 개인적으로 형법과 민법, 그리고 법학의 기본원리에 대해서 공부하고 있습니다.</p>
        <p>로스쿨 입학에 필요한 법학적성시험(LEET)를 준비하고 있습니다.</p>
    </section>
  )
}
