const generateRandomObj = (depth) => Array.from({length: generateRandomNumber(1,3)})
  .map(generateRandomString)
  .reduce((acc, key) => ({ ...acc, [key]: generateRandomValue(depth > 10 && 'primitive', depth + 1)}), {});

const generateRandomArray = (depth) => Array.from({length: generateRandomNumber(0, 10)}).map(() => generateRandomValue(depth > 10 && 'primitive', depth + 1));

const generateRandomString = () => 'asdasdadas'; // TODO: Generate random strings

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

  if (type === 'primitive') {
    const randomIndex = generateRandomNumber(0, 1);
    const randomGenerate = generatesPrimitives[randomIndex];
    return randomGenerate(depth);
  }

  if (type === 'complex' || depth < 3) {
    const randomIndex = generateRandomNumber(0, 1);
    const randomGenerate = generatesComplex[randomIndex];
    return randomGenerate(depth);

  }
  
  const generates = [...generatesPrimitives, ...generatesComplex];
  const randomIndex = generateRandomNumber(0, 3);
  const randomGenerate = generates[randomIndex];
  return randomGenerate(depth);
};


console.log(generateRandomValue('complex', 0));
