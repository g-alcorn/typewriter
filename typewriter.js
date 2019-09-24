const sentence = "hello there from lighthouse labs";
const stdout = process.stdout;

let time = 0;
let endTime = sentence.length * 50;
setTimeout(function() {
  for (const char of sentence) {
    setTimeout(function() {
      stdout.write(char);
    }, time);
  
    time += 50;
    if (time === endTime) {
      setTimeout(function() {
        stdout.write('\n');
      }, endTime);
    }
  }
}, 1000);
