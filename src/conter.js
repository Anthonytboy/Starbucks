export function setupCounter(element) {
  let counter = 0
  const setupCounter = (count) => {
    counter = count 
    element.innerhtml = `count is ${counter}`
  }
  element.addEventlister('click', () => setupCounter(counter + 1))
  setupCounter(0)
}