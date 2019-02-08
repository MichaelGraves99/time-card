let time = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]

function addTime(w, d) {
  time[w][d]++

  if (time[w][d] > 24) {
    time[w][d] = 24
  }
  findWeeklyTime()
}

function subtractTime(w, d) {
  time[w][d]--

  if (time[w][d] < 1) {
    time[w][d] = 0
  }
  findWeeklyTime()
}

function findWeeklyTime() {
  let w0Total = 0
  let w1Total = 0
  for (let i = 0; i < 5; i++) {
    w0Total = w0Total + time[0][i]
    w1Total = w1Total + time[1][i]
  }
  draw(w0Total, w1Total)
}

function reset() {
  time = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0]]
  findWeeklyTime()
}

function draw(w0Total, w1Total) {
  document.getElementById('hour00').innerText = `${time[0][0]}`
  document.getElementById('hour01').innerText = `${time[0][1]}`
  document.getElementById('hour02').innerText = `${time[0][2]}`
  document.getElementById('hour03').innerText = `${time[0][3]}`
  document.getElementById('hour04').innerText = `${time[0][4]}`
  document.getElementById('hour10').innerText = `${time[1][0]}`
  document.getElementById('hour11').innerText = `${time[1][1]}`
  document.getElementById('hour12').innerText = `${time[1][2]}`
  document.getElementById('hour13').innerText = `${time[1][3]}`
  document.getElementById('hour14').innerText = `${time[1][4]}`
  document.getElementById('w0Total').innerText = `${w0Total}`
  document.getElementById('w1Total').innerText = `${w1Total}`
  document.getElementById('grand-total').innerText = `${w0Total + w1Total} hours worked at $40.25/hr = $${40.25 * (w0Total + w1Total)}`
}