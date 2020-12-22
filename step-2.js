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
    else if (cube.state.length !== 3) {
      msg = "큐브의 길이가 3이 아닙니다.";
    }
    // 첫 번째 줄의 길이가 3이 맞는지 확인
    else if (cube.state[0].length !== 3) {
      msg = "큐브 첫 번째 줄의 길이가 3이 아닙니다.";
    }
    // 첫 번째 줄의 첫 번째 글자가 'R'이 맞는지 확인
    else if (cube.state[0][0] !== "R") {
      msg = "큐브 첫 번째 줄의 첫 번째 글자가 R이 아닙니다";
    }
    // 첫 번째 줄의 두 번째 글자가 'R'이 맞는지 확인
    else if (cube.state[0][1] !== "R") {
      msg = "큐브 첫 번째 줄의 두 번째 글자가 R이 아닙니다";
    }
    // 첫 번째 줄의 세 번째 글자가 'W'가 맞는지 확인
    else if (cube.state[0][2] !== "W") {
      msg = "큐브 첫 번째 줄의 세 번째 글자가 W가 아닙니다";
    }
    // 두 번째 줄의 첫 번째 글자가 'G'가 맞는지 확인
    else if (cube.state[1][0] !== "G") {
      msg = "큐브 두 번째 줄의 첫 번째 글자가 G가 아닙니다";
    }
    // 두 번째 줄의 두 번째 글자가 'C'가 맞는지 확인
    else if (cube.state[1][1] !== "C") {
      msg = "큐브 두 번째 줄의 두 번째 글자가 C가 아닙니다";
    }
    // 두 번째 줄의 세 번째 글자가 'W'가 맞는지 확인
    else if (cube.state[1][2] !== "W") {
      msg = "큐브 두 번째 줄의 세 번째 글자가 W가 아닙니다";
    }
    // 세 번째 줄의 첫 번째 글자가 'G'가 맞는지 확인
    else if (cube.state[2][0] !== "R") {
      msg = "큐브 세 번째 줄의 첫 글자가 R가 아닙니다";
    }
    // 세 번째 줄의 두 번째 글자가 'B'가 맞는지 확인
    else if (cube.state[2][1] !== "B") {
      msg = "큐브 세 번째 줄의 첫 글자가 R가 아닙니다";
    }
    // 세 번째 줄의 세 번째 글자가 'B'가 맞는지 확인
    else if (cube.state[2][2] !== "B") {
      msg = "큐브 세 번째 줄의 첫 글자가 B가 아닙니다";
    }
    // 두 번째 줄이 길이가 3이 맞는지 확인
    else if (cube.state[1].length !== 3) {
      msg = "큐브 두 번째 줄의 길이가 3이 아닙니다.";
    }
    // 세 번째 줄이 길이가 3이 맞는지 확인
    else if (cube.state[2].length !== 3) {
      msg = "큐브 세 번째 줄의 길이가 3이 아닙니다.";
    }
    // 정상적으로 생성
    else {
      msg = "큐브가 정상적으로 생성되었습니다.";
    }
    return msg;
  }
}

test();
