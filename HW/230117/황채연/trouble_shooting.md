# Trouble Shooting

# [H/W] Raspberry Pi 4 와 Arduino Uno 1:1 시리얼 통신

1. WiringPi 버전 문제
    - RPI4 와 Arduino 시리얼 통신에 사용되는 WiringPi 설치 시 “collect2 : ld returned 1 exit status” , “skipping incompatible error” 에러 발생
        - 원인 : WiringPi 설치 시 sudo apt-get install wiringpi 설치시 운영체제의 버전과 관계없이 32bit wiringPi 가 설치되어 발생되는 문제
        - 해결
            
            [https://hoho325.tistory.com/212](https://hoho325.tistory.com/212) 블로그 참조
            
            → wiringpi 완전 제거 후 해당 블로그 참조하여 git clone하여 직접설치
            
2. 시리얼 통신 간 원하지 문자열 밀림 발생

![Untitled](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6ce24e5a-2fe8-40f8-ba23-444d2b41245c/Untitled.png)

- 구현 동작
    - RPI4 : Arduino에게 TEST CODE 송신, Arduino에게 받은 데이터 출력
    - Arduino : RPI4에게 Hyomusae 송신, RPI4에게 받은 데이터 출력
