async function getMinMax(firstFile, secondFile) {
  async function handleResponse(response) {
    let nums = await response.json();
    let smallest = nums[0];
    let largest = nums[0];
    for (const num of nums) {
      if (num < smallest) {
        smallest = num;
      }
      if (num > largest) {
        largest = num;
      }
    }
    return [smallest, largest];
  }

  const first = fetch(firstFile).then(handleResponse);
  const second = fetch(secondFile).then(handleResponse);
  let [[s1, l1], [s2, l2]] = await Promise.all([first, second]);

  let smallest = s1;
  let largest = l1;

  if (s2 < smallest) {
    smallest = s2;
  }

  if (l2 > largest) {
    largest = l2;
  }

  return [smallest, largest];
}

try {
  let [smallest, largest] = await getMinMax("first.json", "second.json");
  console.log(smallest);
  console.log(largest);
} catch (e) {
  console.error("Došlo je do pogreške");
  console.error(e);
}
