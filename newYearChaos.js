function minimumBribes(q) {
  // Write your code here
  let bribes = 0;
  for (let index = 0; index < q.length; index++) {
    if (q[index] > index + 1) {
      let bribe = q[index] - 1 - index;
      if (bribe > 2) {
        console.log("Too chaotic");
        return;
      } else {
        bribes += bribe;
      }
    } else {
      for (let j = index + 1; j < q.length; j++) {
        if (q[index] > q[j]) {
          bribes += 1;
        }
      }
    }
  }
  console.log(bribes);
}
