const response = await fetch('https://gist.githubusercontent.com/VChastinet/415c33acc67330b682c655112fb3823b/raw/1645beb6e912ceb8237ec41f766e37fa3af04037/assortedNames.json');
const nameList = await response.json();

const generateRandomObj = (depth) => Array.from({length: generateRandomNumber(1,3)})
  .map(generateRandomString)
  .reduce((acc, key) => ({ ...acc, [key]: generateRandomValue(depth > 10 && 'primitive', depth + 1)}), {});

const generateRandomArray = (depth) => Array.from({length: generateRandomNumber(0, 10)}).map(() => generateRandomValue(depth > 10 && 'primitive', depth + 1));

const generateRandomString = () => {
  const randomIndex = Math.round(Math.random() * nameList.length);
  return nameList[randomIndex];
};

const generateRandomNumber = (min = 0, max = 100) => Math.floor(Math.random() * (max + 1 - min) + min);

const generateRandomValue = (type, depth) => {

  const generatesPrimitives = [
    generateRandomString,
    generateRandomNumber,
  ];
  const generatesComplex = [
    generateRandomObj,
    generateRandomArray,
  ];

  const generates = [...generatesPrimitives, ...generatesComplex];
  const randomIndex = generateRandomNumber(0, 3);
  let randomGenerate = generates[randomIndex];

  if (type === 'primitive') {
    const randomIndex = generateRandomNumber(0, 1);
    randomGenerate = generatesPrimitives[randomIndex];
  }

  if (type === 'complex' || depth < 3) {
    const randomIndex = generateRandomNumber(0, 1);
    randomGenerate = generatesComplex[randomIndex];
  }
  

  return randomGenerate(depth);
};

const randomValue = generateRandomValue('complex', 0)
console.log(randomValue);