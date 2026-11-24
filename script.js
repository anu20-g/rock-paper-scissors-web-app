let p = 0, c = 0;
const opts = ['Rock', 'Paper', 'Scissors'];
function playRound(user) {
    const comp = opts[Math.floor(Math.random() * 3)];
    let res = '';
    if (user === comp) res = `Tie! Both picked ${user}.`;
    else if ((user === 'Rock' && comp === 'Scissors') || (user === 'Paper' && comp === 'Rock') || (user === 'Scissors' && comp === 'Paper')) {
        p++; res = `You win! ${user} beats ${comp}.`;
    } else {
        c++; res = `Computer wins! ${comp} beats ${user}.`;
    }
    document.getElementById('pScore').textContent = p;
    document.getElementById('cScore').textContent = c;
    document.getElementById('resultOutput').textContent = res;
}