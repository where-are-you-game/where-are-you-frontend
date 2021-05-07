const PLAYER_ANSWER = {};

for (let i = 1; i < 14; i++) {
  PLAYER_ANSWER[`puzzle${i}`] = {
    answer: "",
    isRight: false
  };
}

export default PLAYER_ANSWER;
