
#  Click-Challenge
<p align="center"><img src="https://github.com/tomeee11/Click-Challenge/assets/114478045/3df8131f-01d0-490a-ad5b-cd92105f179f" width="60%" height="20%"></p>

</p>
## 📖 Description

Click-Challenge는 참가자들이 실시간으로 클릭 수를 확인하며 서로 경쟁하는 방식으로 진행됩니다.

## :baby_chick: Demo
추후 추가 예정

## ⭐ Main Feature

### User
- email 인증 기능.
- JWT를 이용하여 인증/인가.
- CQRS 패턴 적용하여, command, query 분리


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
현재.
📦src
 ┣ 📂auth
 ┃ ┣ 📜auth.module.ts
 ┃ ┗ 📜auth.service.ts
 ┣ 📂batch
 ┃ ┣ 📜batch.controller.ts
 ┃ ┣ 📜batch.module.ts
 ┃ ┗ 📜task.service.ts
 ┣ 📂config
 ┃ ┣ 📂env
 ┃ ┃ ┣ 📜.development.env
 ┃ ┃ ┣ 📜.production.env
 ┃ ┃ ┗ 📜.stage.env
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
 ┣ 📂migrations
 ┣ 📂users
 ┃ ┣ 📂command
 ┃ ┃ ┣ 📜create-user.command.ts
 ┃ ┃ ┣ 📜create-user.handler.ts
 ┃ ┃ ┣ 📜login.command.ts
 ┃ ┃ ┣ 📜login.handler.ts
 ┃ ┃ ┣ 📜user-created.event.ts
 ┃ ┃ ┣ 📜verify-access-token.command.ts
 ┃ ┃ ┣ 📜verify-access-token.handler.ts
 ┃ ┃ ┣ 📜verify-email.command.ts
 ┃ ┃ ┗ 📜verify-email.handler.ts
 ┃ ┣ 📂dto
 ┃ ┃ ┣ 📜create-user.dto.ts
 ┃ ┃ ┣ 📜user-login.dto.ts
 ┃ ┃ ┗ 📜verify-email.dto.ts
 ┃ ┣ 📂entities
 ┃ ┃ ┗ 📜user.entity.ts
 ┃ ┣ 📂event
 ┃ ┃ ┣ 📜cqrs-event.ts
 ┃ ┃ ┣ 📜test.event.ts
 ┃ ┃ ┣ 📜user-created.event.ts
 ┃ ┃ ┗ 📜user-events.handler.ts
 ┃ ┣ 📂query
 ┃ ┃ ┣ 📜get-user-info.handler.ts
 ┃ ┃ ┗ 📜get-user-info.query.ts
 ┃ ┣ 📜UserInfo.ts
 ┃ ┣ 📜users.controller.ts
 ┃ ┣ 📜users.module.ts
 ┃ ┗ 📜users.service.ts
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

## 👨‍💻 Role & Contribution

**Frontend (Web)**

- ex)관리자 페이지 (Vue.js) 개발
- ex)전체 아키텍처 구성

**Devops**

-ex) CI/CD 구축 (Docker, Github Action)

**etc**

- 전체 개발 일정 및 이슈 관리

## 👨‍👩‍👧‍👦 Developer
*  **이승원** ([tomeee11](https://github.com/tomeee11))
