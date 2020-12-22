const { log } = console;

// 큐브 생성을 위한 생성자 함수
function Cube() {
  this.state = [
    ["R", "R", "W"],
    ["G", "C", "W"],
    ["G", "B", "B"],
  ];
}

// test
function test() {
  let cube = new Cube();
  // 큐브가 초기 값에 해당하는 값으로 생성되었는지 확인
  let test = cubeCheck(cube);
  // 테스트 내용 출력
  log(test);

  function cubeCheck(cube) {
    // 리턴할 메시지
    let msg;
    // 큐브가 정상적으로 생성되었는지 확인
    if (!cube || !cube.state) {
      msg = "큐브가 정상적으로 생성되지 않았습니다.";
    }
    // 3 * 3 큐브이므로 배열의 길이가 3이 맞는지 확인
    else if (cube.state.length != 3) {
      msg = "큐브의 길이가 3이 아닙니다.";
    }
    // 첫 번째 줄이 정상인지 확인
    else if (cube.state[0].length != 3) {
      msg = "큐브 첫 번째 줄의 코드가 제대로 초기화되지 않았습니다.";
    }
    // 두 번째 줄이 정상인지 확인
    else if (cube.state[1].length != 3) {
      msg = "큐브 두 번째 줄의 코드가 제대로 초기화되지 않았습니다.";
    }
    // 세 번째 줄이 정상인지 확인
    else if (cube.state[2].length != 3) {
      msg = "큐브 세 번째 줄의 코드가 제대로 초기화되지 않았습니다.";
    }
    // 정상적으로 생성
    else {
      msg = "큐브가 정상적으로 생성되었습니다.";
    }
    return msg;
  }
}

test();
