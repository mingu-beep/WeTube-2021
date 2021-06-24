# WeTube Clone coding - 2021

- / -> Home
- /join -> Join
- /login -> Login
- /search -> Search

- /users/:id -> See User
- /users/logout -> Log Out
- /users/edit -> Edit MY Profiles
- /users/delete -> Delete MY Profiles

- /videos/:id -> Watch video
- /videos/:id/edit -> Edit video
- /videos/:id/delete -> Delete Video
- /videos/upload -> Upload Video

<hr/>

## 구글 크롬 Err_Connection_Refused 오류 해결법

1. 명령 프롬프트를 관리자 권한으로 실행한다.
2. 'netsh winsock reset catalog'를 입력한다
   - 카탈로그 재설정 문구를 확인합니다.
3. 'ipconfig /flushdns'를 입력한다
   - DNS 확인자 캐시를 플러시 했습니다.

- 계속 같은 현상이 반복되서 크롬의 보안 정책상 문제라 판단하고 브라우저를 바꿨다.

210620 : 크롬에서 변경한 브레이브 브라우저에도 같은 현상 발생.

1. 위에 기술한 방법을 실행 후 재부팅 -> 해결

<hr/>

## HOW TO SEND A DATA TO BACK END

- using pug, POST request

```
form(method="POST")
   input(name="title" placeholder="Video TItle", value=video.title, required)
   input(value="Save", type="submit")
```

- form으로 받은 value는 res.body로 받아올 수 있다.

  - req.body, 즉 form의 value를 javascript로 바꿔주는 middleware가 필요하다
  - server의 router 전에 middleware 필수
    `app.use(express.urlenconded({extended:true}));`

- how back end to handle a post request
  `Router.post(controller);`

1. request가 오면 필요한 녀석을 찾을 때까지 router를 확인한다.
2. 적절한 router를 찾으면 router안에서 적절한 controller를 탐색한다.
   - 지나가는 길에 middleware(urlencorder)를 만나면 req.body가 생성된다.

## 프로젝트 시작하기 전

- 우분투 실행시켜서
  `sudo service mongodb start`
  - 즉, mongodb 실행시키기

## 서버를 실행중인 terminal을 종료시켜 서버를 정상으로 사용할 수 없을 때

- npx kill-port (포트번호)

## Webpack 폴더별 의미

- assets 폴더 : 브라우저가 접근하여 읽는 파일들을 모아놓은 폴더.
- src/client 폴더 : webpack이 처리하기 전의 파일들을 모아놓은 폴더.

## 프로젝트를 실행시 유의사항

- 콘솔을 두개 실행시킬 것

1. backend용 npm run dev
2. frontend용 npm run assets

## API로 요청 보내는 방법

- fetch("요청 보낼 api의 url", {method : "보낼 요청의 종류 (default: get)"})

## Bugs

1. videoPlayer.js에서 new Date(seconds \* 1000).toISOString().substr(14,5);

- substr(startIndex,length) -> 내가 원하는 길이보다 원본 길이가 짧을 경우 .0000 으로 모자란 길이만큼 채워진다. 시작 index를 옮겼으면 길이에도 신경 쓸 것

2. getElementById와 querySelector의 차이

- querySelector는 해당 query 밑에 있는 tag 중 적절한 tag 하나를 찾아 return 해준다.
