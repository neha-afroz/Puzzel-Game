export function createContainer(size) {
  const container = [];

  for (let i = 0; i < size; i++) {
    const boxPieces = [];
    for (let j = 0; j < size; j++) {
      boxPieces.push(i * size + j + 1);
    }
    container.push(boxPieces);
  }

  container[size - 1][size - 1] = "";

  return container;
}

export function swap(container, iOne, iTwo) {
  const size = container.length;
  const newContainer = [];

  for (let i = 0; i < size; i++) {
    newContainer[i] = [...container[i]];
  }

  const temp = newContainer[iOne[0]][iOne[1]];
  newContainer[iOne[0]][iOne[1]] = newContainer[iTwo[0]][iTwo[1]];
  newContainer[iTwo[0]][iTwo[1]] = temp;

  return newContainer;
}

export function isSwapEle(container, index) {
  const size = container.length;

  if (index[0] - 1 >= 0 && container[index[0] - 1][index[1]] === "")
    return true;

  if (index[0] + 1 < size && container[index[0] + 1][index[1]] === "")
    return true;

  if (index[1] - 1 >= 0 && container[index[0]][index[1] - 1] === "")
    return true;

  if (index[1] + 1 < size && container[index[0]][index[1] + 1] === "")
    return true;

  return false;
}

export function getSwapIndexes(container, index) {
  const size = container.length;

  if (index[0] - 1 >= 0 && container[index[0] - 1][index[1]] === "")
    return [index, [index[0] - 1, index[1]]];

  if (index[0] + 1 < size && container[index[0] + 1][index[1]] === "")
    return [index, [index[0] + 1, index[1]]];

  if (index[1] - 1 >= 0 && container[index[0]][index[1] - 1] === "")
    return [index, [index[0], index[1] - 1]];

  if (index[1] + 1 < size && container[index[0]][index[1] + 1] === "")
    return [index, [index[0], index[1] + 1]];
}

export function mixEleContainer(container, times) {
  const size = container.length;
  let newContainer = [];

  for (let i = 0; i < size; i++) {
    newContainer[i] = [...container[i]];
  }

  for (let i = 0; i < times; i++) {
    const spaceInd = getSpaceIndex(newContainer);
    const randInd = getRandomIndex(newContainer, spaceInd);
    newContainer = swap(newContainer, spaceInd, randInd);
  }

  return newContainer;
}

export function getSpaceIndex(container) {
  const size = container.length;

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (container[i][j] === "") return [i, j];
    }
  }
}

export function getRandomIndex(container, index) {
  const handleIndexs = ["t", "b", "l", "r"];
  let randInd;
  do {
    const newIndex = Math.floor(Math.random() * 4);
    randInd = getHandledIndex(index, handleIndexs[newIndex]);
  } while (!isCorrectIndex(container, randInd));

  return randInd;
}

export function isCorrectIndex(container, index) {
  const size = container.length;
  return index[0] >= 0 && index[0] < size && index[1] >= 0 && index[1] < size;
}

export function getHandledIndex(index, direct) {
  if (direct === "t") return [index[0] - 1, index[1]];
  if (direct === "b") return [index[0] + 1, index[1]];
  if (direct === "l") return [index[0], index[1] - 1];
  if (direct === "r") return [index[0], index[1] + 1];
}

export function isCorrectContainer(container) {
  const size = container.length;
  const correctContainer = createContainer(size);

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      if (container[i][j] !== correctContainer[i][j]) return false;
    }
  }

  return true;
}
