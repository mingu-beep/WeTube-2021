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
3.
