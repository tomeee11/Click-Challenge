
#  Click-Challenge
<p align="center"><img src="https://github.com/tomeee11/Click-Challenge/assets/114478045/3df8131f-01d0-490a-ad5b-cd92105f179f" width="60%" height="20%"></p>

</p>
## 📖 Description

Click-Challenge는 참가자들이 실시간으로 클릭 수를 확인하며 서로 경쟁하는 방식으로 진행됩니다.

## :baby_chick: Demo
추후 추가 예정

## ⭐ Main Feature
### Logging
- Logging 모듈을 통해 전역으로 로깅 인터셉터 적용.
### Exception
- exception 모듈을 통해 전역 예외 필터 적용
### Batch
- (미구현)DB에 저장된 데이터를 다른 DB로 주기적으로 이동
### health-check
- (미구현)Batch를 통해 주기적으로 DB 상태 점검.
### User
- email 인증 기능.
- JWT를 이용하여 인증/인가.
- Guard를 통해 라우트 핸들러에서 인증
- CQRS 패턴 적용하여, command, query 분리
- Clean Architecture 적용(infra/ interface/ application/ domain)
- Test code 구현 (application/command Test code 구현, 추후 Query 추가 예정)



## 💻 Getting Started

### Installation
```
npm install
```
### Develop Mode
```
npm run start:dev
```

## 🔧 Stack
- **Language**: JavaScript
- **Library & Framework** : Node.js, Nest.js
- **Database** :Mysql
- **ORM** : TypeOrm
- **Deploy**: ex)AWS EC2

## :open_file_folder: Project Structure

```markdown
📦src
 ┣ 📂auth
 ┃ ┣ 📜auth.module.ts
 ┃ ┗ 📜auth.service.ts
 ┣ 📂batch
 ┃ ┣ 📜batch.controller.ts
 ┃ ┣ 📜batch.module.ts
 ┃ ┗ 📜task.service.ts
 ┣ 📂config
 ┃ ┣ 📜authConfig.ts
 ┃ ┣ 📜emailConfig.ts
 ┃ ┗ 📜validationSchema.ts
 ┣ 📂email
 ┃ ┣ 📜email.module.ts
 ┃ ┗ 📜email.service.ts
 ┣ 📂exception
 ┃ ┣ 📜exception.module.ts
 ┃ ┗ 📜http-exception.filter.ts
 ┣ 📂health-check
 ┃ ┗ 📜health-check.controller.ts
 ┣ 📂logging
 ┃ ┣ 📜logging.interceptor.ts
 ┃ ┗ 📜logging.module.ts
 ┣ 📂users
 ┃ ┣ 📂application
 ┃ ┃ ┣ 📂adapter
 ┃ ┃ ┃ ┗ 📜iemail.service.ts
 ┃ ┃ ┣ 📂command
 ┃ ┃ ┃ ┣ 📜create-user.command.ts
 ┃ ┃ ┃ ┣ 📜create-user.handler.spec.ts
 ┃ ┃ ┃ ┣ 📜create-user.handler.ts
 ┃ ┃ ┃ ┣ 📜login.command.ts
 ┃ ┃ ┃ ┣ 📜login.handler.spec.ts
 ┃ ┃ ┃ ┣ 📜login.handler.ts
 ┃ ┃ ┃ ┣ 📜verify-access-token.command.ts
 ┃ ┃ ┃ ┣ 📜verify-access-token.handler.spec.ts
 ┃ ┃ ┃ ┣ 📜verify-access-token.handler.ts
 ┃ ┃ ┃ ┣ 📜verify-email.command.ts
 ┃ ┃ ┃ ┣ 📜verify-email.handler.spec.ts
 ┃ ┃ ┃ ┗ 📜verify-email.handler.ts
 ┃ ┃ ┣ 📂event
 ┃ ┃ ┃ ┗ 📜user-events.handler.ts
 ┃ ┃ ┗ 📂query
 ┃ ┃ ┃ ┣ 📜get-user-info.handler.ts
 ┃ ┃ ┃ ┗ 📜get-user-info.query.ts
 ┃ ┣ 📂domain
 ┃ ┃ ┣ 📂repository
 ┃ ┃ ┃ ┗ 📜iuser.repository.ts
 ┃ ┃ ┣ 📜cqrs-event.ts
 ┃ ┃ ┣ 📜user-created.event.ts
 ┃ ┃ ┣ 📜user.factory.spec.ts
 ┃ ┃ ┣ 📜user.factory.ts
 ┃ ┃ ┗ 📜user.ts
 ┃ ┣ 📂infra
 ┃ ┃ ┣ 📂adapter
 ┃ ┃ ┃ ┗ 📜email.service.ts
 ┃ ┃ ┗ 📂db
 ┃ ┃ ┃ ┣ 📂entities
 ┃ ┃ ┃ ┃ ┗ 📜user.entity.ts
 ┃ ┃ ┃ ┗ 📂repository
 ┃ ┃ ┃ ┃ ┗ 📜UserRepository.ts
 ┃ ┣ 📂interface
 ┃ ┃ ┣ 📂dto
 ┃ ┃ ┃ ┣ 📜create-user.dto.ts
 ┃ ┃ ┃ ┣ 📜user-login.dto.ts
 ┃ ┃ ┃ ┗ 📜verify-email.dto.ts
 ┃ ┃ ┣ 📜UserInfo.ts
 ┃ ┃ ┗ 📜users.controller.ts
 ┃ ┗ 📜users.module.ts
 ┣ 📂utils
 ┃ ┗ 📂decorators
 ┃ ┃ ┗ 📜not-in.ts
 ┣ 📜app.module.ts
 ┣ 📜auth.guard.ts
 ┗ 📜main.ts

```

## 🔨 Server Architecture
추후 추가 예정

## ⚒ CI/CD
추후 추가 예정


## 👨‍👩‍👧‍👦 Developer
*  **이승원** ([tomeee11](https://github.com/tomeee11))
