---
title: "Webpack - Module의 기본 구조 "
date: "2019-11-26"
path: /blog/webpack-structure-of-module
tags: WEBPACK, MODULE
layout: post
---
## Module의 기본구조
### Module의 정의
프로그램을 구성하는 내부의 코드가 기능별로 나뉘어져 있는 형태로  
Module을 사용하게 되면 한 파일에 쓰여진 큰 코드 덩어리를 여러 파일로 쪼개서 관리 할 수 있다.  
어떤 기준을 통해 코드가 파일 단위로 분리 되어있는 형태로 서로가 참조 되어있는 형태를 띈다.

### Module의 표준
  
어떤 파일을 Module로 다루기 위해서는 Module System이 있어야한다.  
Module System이 있는 환경은 파일을 하나의 Module로 읽을 수 있다.  
이는 자신의 코드를 다른 곳에서 참조할수 있게 하거나 다른 Module로 부터 특정 기능을 가져와 사용 할 수 있게 하는 키워드를 제공한다.  
Module을 사용하는 방법은 Module이 어떤 표준을 따르느냐에 따라 달라진다.

Module System은 여러가지가 있지만 이번에 살펴볼 두가지 시스템은  
JavaScript의 실행환경인 NodeJS에서 채택한 [CommonJS]라는 표준이 있고, 다른 하나는  
ECMAScript에서 정의한 모듈표준화인 ESM이다.

### Module을 다루는 키워드

1. [CommonJS] : `require (참조 하고자 하는 모듈의 경로)`

      **module.exports의 형태**  
        `module.exports={...}`  
        `module.exports= 값`  
        `module.exports.키_이름=값`  
        `exports.키_이름=값`  
        
    [index.js]
    ```JavaScript
   /***
   * 1. 원의 넓이를 구하는 공식
   * 2. PI 정의
   * 3. 공식을 통해 결과 얻기
   ***/
   
   const PI = 3.14;
   const getCircleArea = r => r * r * PI;
   
   const result = getCircleArea(2);
   console.log(result);
   ```
   실행 명령어  
   ```commend line
   $ node index.js
   ```
   위의 `index.js`코드를 모듈화 한다면 
   
   [mathUtil.js]
   ```JavaScript
    const PI = 3.14;
    const getCircleArea = r => r * r * PI;
   
    module.exports = {
      PI,
      getCircleArea
   }
   ```
   exports를 이용하여 개별적으로 내보낼때  
   [mathUtil.js]
   ```JavaScript
   const PI = 3.14;
   const getCircleArea = r => r * r * PI;
   
   exports.PI = PI;
   exports.getCircleArea;
   ```
   *[mathUtil.js] 둘 중 한가지 방법으로만 사용해야 내보내기의 기능 유실을 막을 수 있다.*
   
   [index.js]
   ```JavaScript
   /***
   * 1. 원의 넓이를 구하는 공식
   * 2. PI 정의
   * 3. 공식을 통해 결과 얻기
   ***/
   
   const { getCircleArea } = require('./mathutil');
   
   const result = getCircleArea(2);
   console.log(result);
   ```
 
2. [ESM] : `import 모듈_이름 from 모듈_위치`  
           **기능을 내보내는 키워드**  
           `export`  
           `export default`
           
    *NodeJS환경에서는 CommonJS모듈을 기본으로 사용하기 때문에 ESM방식의 모듈을 사용하려면 별도의 설치가 필요하다.*
    ```commend line
    $ npm install esm
    ```
    실행 명령어  
    ( -r을 추가 하게 되면 다른 모듈의 표준`commonJS/ESM 모두 가능`도 실행 할 수 있게 해준다.)
    ```commend line
    $ node -r esm index.js
    ```
   1\. `export`  
    [index.js]
   ```JavaScript
   /***
   * 1. 원의 넓이를 구하는 공식
   * 2. PI 정의
   * 3. 공식을 통해 결과 얻기
   ***/
   
   import { getCircleArea } from './mathUtil'
   
   const result = getCircleArea(2);
   console.log(result);
   ```
    [mathUtil.js]
    ```JavaScript
    export {
       PI,
       getCircleArea
   }
    ```
   2\. `export default`  
    [mathUtil.js]
    ```JavaScript
    export default {
       PI,
       getCircleArea
   }
    ```
    [index.js]
   ```JavaScript
   /***
   * 1. 원의 넓이를 구하는 공식
   * 2. PI 정의
   * 3. 공식을 통해 결과 얻기
   ***/
   
   import mathUtil from './mathUtil'
   
   const result = mathUtil.getCircleArea(2);
   console.log(result);
   ```
