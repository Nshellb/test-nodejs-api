프론트엔드 클라이언트 테스트를 위한 Node.js 서버
기존에 만들었던 Node.js 서버가 보이지 않아서 새로 만들기로 했다.

Spec
Node.js 18.15.0 LTS

Reference
https://velog.io/@archivvonjang/Node.js-간단한-API-서버-만들기

1. express-generator 설치
Express Application Generator Tool : 사용자가 손쉽게 프로젝트를 생성할 수 있도록 도와주는 웹 애플리케이션 프레임워크
```
npm install -g express-generator
```

2. 프로젝트 생성
```
express project-name
```

(> express test-nodejs-api)
express : 이 시스템에서 스크립트를 실행할 수 없으므로~ 오류 발생시 node.js 환경변수를 등록해야한다.
https://hellcoding.tistory.com/entry/VSCode-오류-이-시스템에서-스크립트를-실행할-수-없으므로
get-ExecutionPolicy
권한 상태값이 [Restricted] 일때
로컬에서 작성한 스크립트를 실행할 수 없는 상태여서 오류가 발생한다.
Set-ExecutionPolicy RemoteSigned
권한 상태값을 [RemoteSigned]로 변경한다.
get-ExecutionPolicy
권한 상태값이 [RemoteSigned]로 변경되었는지 확인한다.

3. 모듈 설치
생성된 프로젝트 디렉토리로 이동한뒤 npm 설치를 진행한다.
```
npm install
```

4. 서버 실행 및 서버 구동 확인
```
npm start
```
localhost:3000

5. cors 설치
서버를 분리해서 구성하므로 CORS 패키지를 설치
```
npm install cors
```
app.js에 cors 코드 추가

6. nodemon
핫리로드 기능 사용
node + monitor의 약자
```
npm install --save-dev nodemon
```

npm이 설치된 이후 package.json의 scripts 수정
```
"scripts": {  
	"start": "nodemon ./bin/www"  // 수정
}
```
npm start 으로 실행했을때 terminal에서 nodemon을 확인한다.

7.api 생성
/router/test.js에 get api 선언
