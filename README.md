# HyunSang's blog

## Development
```
vc dev
```

## Deploy
```
vc --prod
```

## Updated Fuction

- (2024.11.25) 파일명을 한글로 작성하여도 불러올 수 있도록 개선함.
    - 기존) 블로그 글 작성 시 파일명을 한글이 아닌 영어로 작성해야지만 글이 등록 되었음.
    - 변경) 블로그 글 작성 시 파일명을 영어가 아닌 한글로 작성하여도 반영되도록 개선하였음. 
        - `blog/components/mdx.tsx`의 `slugify()`에서 ` .replace(/[^\w\-\uac00-\ud7af]+/g, '')`로 변경하여 한글도 인식할 수 있도로 개선하였음.
        - `blog/utils.ts`의 `getMDXData()`에서 기존에 `slug`를 한글도 인식할 수 있도록 `safeSlug`를 추가하여 개선하였음.