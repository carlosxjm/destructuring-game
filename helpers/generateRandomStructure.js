import NAME_LIST from '../assets/nameKeys.json'

const MAX_DEPTH = 10
const MIN_DEPTH = 5

const generateRandomObj = (depth) =>
  Array.from({ length: generateRandomNumber(1, 3) })
    .map(generateRandomString)
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: generateRandomStructure(
          depth >= MAX_DEPTH && 'primitive',
          depth + 1
        )
      }),
      {}
    )

const generateRandomArray = (depth) =>
  Array.from({ length: generateRandomNumber(2, 10) }).map(() =>
    generateRandomStructure(depth > MAX_DEPTH && 'primitive', depth + 1)
  )

const generateRandomString = () => {
  const randomIndex = generateRandomNumber(0, NAME_LIST.length - 1)
  return NAME_LIST[randomIndex]
}

const generateRandomNumber = (min = 0, max = 100) =>
  Math.floor(Math.random() * (max + 1 - min) + min)

const generateRandomStructure = (type, depth = 0) => {
  const primitivesGenerators = [generateRandomString, generateRandomNumber]
  const complexGenerators = [generateRandomObj, generateRandomArray]

  let generatorsOptions

  if (type === 'primitive') {
    generatorsOptions = primitivesGenerators
  } else if (type === 'complex' || depth < MIN_DEPTH) {
    generatorsOptions = complexGenerators
  } else {
    generatorsOptions = [...primitivesGenerators, ...complexGenerators]
  }
  return generatorsOptions.sort(() => generateRandomNumber(-1, 1))[0](depth)
}

export default generateRandomStructure
