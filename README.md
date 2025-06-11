# <img width="1920" alt="sikshare-readme" src="https://github.com/user-attachments/assets/02051137-b27d-465e-98b1-b8e848554c08" />

> **식샤 -  1인 가구를 위한 식자재 공유 플랫폼** <br/>
> [sik-share.com](https://sik-share.com) <br/>
> 개발 기간 : 25.05.07 ~ 25.06.04 (1차 개발 완료)

<br/>

**📎 테스트 계정 (구글로그인)**
- 이메일 : sikshare.dev@gmail.com
- 비밀번호 : 5t6y7u8i!


### 🥗 Team Sik-Share

|  이름  | 역할                                                                      |
| :---- | :------------------------------------------------------------------------ |
| 김다훈 [@hoon95](https://github.com/hoon95) | **PM, 발표 및 자료 제작** <br/> - 아이디어 발의 / 기초 기획 고안 <br/> - 메인 페이지 / 동네 지도 시스템 개발 <br/> - 나눔·같이장보기 상세조회 및 참여 개발 |
| 박은지 [@EJ-99](https://github.com/EJ-99) | **DB 설계** <br/> - 로그인 / 회원가입 인증 개발 <br/> - 나눔·장보기 등록 및 수정 개발 <br/> - 후기 작성 개발 |
| 서현우 [@Harang-Dev](https://github.com/Harang-Dev) | **웹소켓 서버 구축** <br/> - 1:1 나눔 채팅, 1:N 같이 장보기 채팅 시스템 개발 <br/> - 3D 나눔함 개발 |
| 송하 [@poan1221](https://github.com/poan1221) | **디자인 / 공통 스타일 구성** <br/> - 마이페이지 회원 정보 조회·수정 개발 및 3D 캐릭터 제작 <br/> - 작성, 참여 내역, 후기 조회 개발 <br/> - 배포 및 PWA  관련 설정 | 


👉 [Team Wiki](https://github.com/FRONT-END-BOOTCAMP-PLUS-4/sik-share/wiki)


<br/>

## 🛠️ 프로젝트 소개

**"이웃과 함께 나누며, 까다로운 식자재 관리까지 한번에!"**  

🤔 **기획 의도**
- 1인 가구의 증가로 개인화된 생활, 각박한 현대 사회 속 이웃과의 단절, 소통 부재 해결
![기획의도](https://github.com/user-attachments/assets/52489682-161f-46a7-a718-d73526705aa1)

- 가파른 물가 상승에 따른 체감 장바구니 부담의 해소 필요
![기획의도02](https://github.com/user-attachments/assets/f6088932-22e7-46dc-bf13-e2de306f887f)

🙋 **타겟 사용자**
- 큰 단위의 삭자재 구매가 어려운 1인 가구
- 이웃과 소통하며 남는 식자재도 소비하고 싶은 이용자
- 1인 가구가 많이 살고 있는 관악구를 중심으로 기획

<br/>

🎯 **주요 목표**

- 식자재 나눔·같이 장보기 등록 및 공유
- 3D 나눔함을 통해 등록된 나눔을 직접적으로 확인
- 내 주변에 있는 나눔·같이 장보기를 지도 맵 클러스터를 통해 조회
- 나눔·같이 장보기 신청 후, 채팅을 통한 의사소통 및 만남 예약
- 나눔 지수에 따른 캐릭터 성장 및 마이페이지 내 사용자의 내역 조회

 <br/>

## 📌 주요 기능
### 👤 회원 등록
- SNS 계정으로 간편한 회원가입
- 최초 1회 동네 등록으로 위치 기반 서비스 제공

![회원등록 gif](https://github.com/user-attachments/assets/4850c8a9-fd4d-4eec-9df3-2979baf090dc)

### 🏡 동네기반 클러스터링
- 사용자의 현재 위치를 기준으로 가까운 이웃 정보 반영
- 민감한 위치 노출은 최소화, 동네 활동 이웃 수 직관적 표시
- 클러스터 클릭 시, 해당 지역의 나눔·같이 장보기 리스트 출력

![동네기반 클러스터링 gif](https://github.com/user-attachments/assets/a5731971-68e8-42dd-966f-2d25eb64100f)

### 📦 나눔·장보기 등록
- 남은 식재료 나눔 또는 장보기 모집을 간편하게 등록
- 동네 이웃에게 실시간으로 정보 노출

![나눔·장보기 gif](https://github.com/user-attachments/assets/5d1e7bf1-23f9-40b9-991a-4edb7e0b7b28)

### 🥕 3D 식재료 관리
- 보유 중인 식재료를 3D로 시각화하여 표현 👉 @react-three-fiber/drei로 식재료 모델 배치
- 식재료 클릭 시 간략 정보 제공 및 나눔 신청 가능

![3D 식재료 gif](https://github.com/user-attachments/assets/48daf533-7ae6-48b3-b080-8a629bfecdfc)

### 실시간 1:1 & 그룹 채팅
- 이웃과 즉시 소통할 수 있는 실시간 채팅 제공
- 채팅 내 일정 공유, 후기 작성 등 부가 기능 지원
- 실시간 읽음 표시 확인 가능

![채팅 gif](https://github.com/user-attachments/assets/6928eee6-2f81-4315-83ea-6699ca0fed68)
![후기작성 gif](https://github.com/user-attachments/assets/a4af1a9e-127f-40d3-8e8c-0d993ab63076)

### 🍚 마이페이지
- 나눔·장보기 등 활동 이력을 한 눈에 확인 가능
- 🌡️ 나눔지수 : 활동 내역, 받은 후기 기반 신뢰도 표시
- 🐤 캐릭터 성장 : 활동할 수록 캐릭터가 성장하는 재미요소로 자연스러운 참여 유도 

![마이페이지 gif](https://github.com/user-attachments/assets/22e53a0e-b4e3-49eb-aa47-4f7a33514cf6)

## 프로젝트 일정
![프로젝트 일정](https://github.com/user-attachments/assets/654c4706-ab94-4910-b2b4-b0f9a57677ae)

## 기술 스택
![기술 스택](https://github.com/user-attachments/assets/f6f95703-b52f-4146-8119-7f5280f1d42d)

## ERD
![ERD](https://github.com/user-attachments/assets/bc3b3edf-f030-455b-bb5f-6c8d5fa88f88)


## 🔫 트러블 슈팅
### 📱 PWA 설정
식샤를 더 빠르게 이용하는 방법!
- 홈 화면에 추가하여, 브라우저를 거치지 않고 앱처럼 실행 하도록 유도
→ 앱과 같은 환경에서 더 부드럽고 빠르게 사용 가능
- 모바일 브라우저 접속 시, PWA 설치 안내 팝업 자동 노출

![PWA](https://github.com/user-attachments/assets/d05ad676-5e9f-4637-8600-acb2fb4b2d56)

### 📁 데이터 캐싱
React Hooks 활용 커스텀 캐싱
- 개선 전 : 탭 전환마다 동일한 fetch 요청 발생 → 불필요한 네트워크 낭비, 사용자 입장에서도 로딩 지연 발생
- 개선 후 : 탭 별 데이터를 Key-Value 형태로 메모리에 캐싱 → 동일한 selectedId에 대해서는 API 재요청 없이 즉시 렌더링
![데이터 캐싱](https://github.com/user-attachments/assets/609bc86c-6578-4b2b-a234-8a85ff777fbe)