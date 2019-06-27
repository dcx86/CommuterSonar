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

function repeatSound(dateTime) {
  const futureTime = getUnixTime(dateTime);
  const timeLeft = (futureTime - Date.now()) / 1000;
  const interval = (futureTime - Date.now()) / 60;
  console.log(timeLeft)

  playSound();
  if(timeLeft < 0) return;
  setTimeout( () => repeatSound(dateTime), interval)
}

const getUnixTime = (time) => {
  const [year, month, day] = time.date.split('-');
  const [hour, minute, second] = time.time.split(':');

  return new Date(year, month-1, day, hour, minute, second).getTime()
}

export default repeatSound;