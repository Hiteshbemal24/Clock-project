const time = new Date();
const hour = -3600 * (time.getHours() % 12);
const mins = -60 * time.getMinutes();
face.style.setProperty('--dm', `${mins}s`);
face.style.setProperty('--dh', `${(hour+mins)}s`);