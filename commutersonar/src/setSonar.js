function playSound() {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const audioCtx = new AudioContext();

  const osc = audioCtx.createOscillator();
  osc.frequency.value = 440;
  osc.type = 'sine';

  const gain = audioCtx.createGain();

  osc.connect(gain);

  gain.connect(audioCtx.destination);
  gain.gain.exponentialRampToValueAtTime( 0.00001, audioCtx.currentTime + 5 )

  osc.start();
}

function repeatSound(deadline) {
  console.log(deadline)
  // const deadline = time + 60000;
  // const currentTime = Date.now();
  // const timeLeft = (deadline - currentTime) / 1000;
  // const interval = (deadline - currentTime) / 6;
  // console.log(timeLeft);

  // playSound();
  // if(timeLeft < 0) return;
  // setTimeout( () => repeatSound(time), interval)
}

export default repeatSound;