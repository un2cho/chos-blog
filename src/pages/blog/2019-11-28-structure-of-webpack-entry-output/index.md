---
title: "Webpack의 기본 구조 - entry, output"
date: "2019-11-28"
path: /blog/structure-of-webpack-entry-output
tags: WEBPACK, ENTRY, OUTPUT
layout: post
---
##Webpack의 정의
-웹어플리케이션을 위해 사용하는 모듈 번들러라는 도구.  
웹팩은 모듈간의 의존관계를 해석한 후에 의존성 그래프를 만들어 모듈들을 해석하고 번들링을 하는 과정을 진행한다.
이과정은 파일별로 쪼개진 모듈들의 내용을 번들 파일 내에 모두 담는 과정을 의미한다.

###Entry란?
-모듈의 의존 관계를 이해하기 위한 시작점을 설정.

###Output이란?
-Webpack이 생성하는 번들 파일에 대한 정보를 설정.

###예제로 이해하기

모듈에 대한 내용을 진행 할 폴더에서 
```shell script
$ npm init -y
```
console에 json에 대한 내용이 출력되고 package.json 파일이 생성된다.  
이 파일은 작업하는 프로젝트에 대한 정보를 나타내고 이 프로젝트가 사용하는 패키지들을 관리해주는 역활을 한다.  
또 npm명령어를 통해 복잡한 스크립트를 쉽게 다룰 수 있게 도와 준다.  

package.json파일을 살펴 보면 내가 만든 파일의 이름이 name이라는 프로퍼티에 기록된 것을 확인 할 수 있으며,  
프로젝트의 버젼 설명등 다양한 프로젝트에 관한 정보들을 담고 있다.
name의 기본값은 프로젝트 폴더의 이름으로 만들어진다. 그리고 외부 패키지를 사용하게 되면 이 파일안에 기록한다.

```shell script
$ npm install webpack webpack-cli --save-dev
```
(`webpack-cli` : 웹팩을 실행 할 수 있는 명령어들을 지원해주는 패키지를 의미한다.)

설치가 끝나면 node-modules라는 폴더가 생기고,  
이 안에 webpack과 webpack-cli 패키지 그리고 이 두패키지가 의존하고 있는 다른 패키지들이 모두 설치 되어 있다.  

폴더 내부에 package.json파일 안에서 webpack과 webpack-cli이 설치된 것을 볼 수 있다.

[mathUtil.js]
```javascript
const PI = 3.14;
const getCircleArea = r => r * r * PI;
const getSquareArea = d = d * d;

module.exports = {
    PI,
    getCircleArea,
    getSquareArea
}
```
[log.js]
```javascript
const logInput = input => `입력받은 값 : ${input}`;
const logResult = (figure, result) => `${figure}의 넓이는 : ${result} 입니다.`;
const logFigureError = "지원되지 않는 도형입니다. '정사각형' 또는 '원'을 입력해주세요. \n커맨드 라인을 종료합니다.";

module.exports = {
    logInput,
    logResult,
    logFigureError
}
```
[index.js]
```javascript
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const { getCircleArea, getSquareArea } = require('./mathUtil');
const { logFigureError, logInput, logResult } = require('./log');

rl.question(
    "넓이를 구하고자 하는 도형의 종류를 입력해주세요. ( 정사각형, 원) :", 
    figure => {
    console.log (`선택된 도형: ${figure}`);
    
    switch (figure) {
      case "정사각형":
        rl.question("변의 길이를 입력 해 주세요. :", input =>{
        console.log(logInput(input));
        console.log(logResult(figure, getSquareArea(input)));
        rl.close();
        });
        break;
        case "원":
          rl.question("반지름의 길이를 입력 해 주세요. :", input =>{
          console.log(logInput(input));
          console.log(logResult(figure, getCircleArea(input)));
          rl.close();
          });
        break;
      default:
        console.log(logFigureError);
        rl.close();
    }
  }
);
```
[index.js]파일과 [mathUtil.js],[log.js]파일은 서로 의존성이 있는 파일로  
웹팩을 이용하 하나의 파일로 번들링 된다.

이에 웹팩을 실행 하려면 이전 버젼의 웹팩에서는 설정해 주어야 했던 것들 을  
웹팩 4버젼으로 업데이트 된 후에 Zero Configuration을 통하여 자동으로 설정을 잡아주게 되었다. 

대신 Zero Configuration을 사용하기 위해서는  
엔트리의 경로를 src폴더 안에 index.js라는 파일 이름으로 준비해 주어야 동작을 하고,  
또한 번들 파일의 위치도 dist라는 폴더 안으로 설정해주어야 하며 번들파일의 이름은 미리 main.js 로 정해져 있다.
즉, entry와 output을 따로 설정 하지 않아도 자동으로 설정이 된다.

이렇게 환경 설정을 해준 후
```shell script
$ npx webpack --target=node
```
`--target=node` 는 readline이라는 node의 내장 모듈을 인식할 수 있게 target키를 통해 node환경을 설정해주는 명령어이다.

### Webpack 직접 설정하기
[webpack.config.js]
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js' // cli와 다르게 main.js가 아닌 bundle.js로 파일이 생성된다
    },
    target: 'node'
}
```







<br><br><br><br><br><br><br>
######*위의 내용은 [fastcampus]의 WEBPACK-백성훈 online 강의를 정리한 내용입니다. 
