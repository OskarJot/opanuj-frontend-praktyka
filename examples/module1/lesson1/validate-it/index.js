function validator() {
  const input = document.getElementById('input');
  const button = document.getElementById('button');
  const button2 = document.getElementById('button2');
  const result = document.getElementById('result');

  const CHECK_NUMBER = Number(input.value);
  const MSG_VALID = 'Valid';
  const MSG_INVALID = 'Invalid';

  button.addEventListener('click', () => {

    if (CHECK_NUMBER % 2 === 0 && CHECK_NUMBER > 0 && CHECK_NUMBER < 100) {
          result.innerHTML = MSG_VALID;
        } else {
          result.innerHTML = MSG_INVALID;
        }
  });

  button2.addEventListener('click', () => {
    input.value = '';
    result.innerHTML = '';
  });
}

validator();
