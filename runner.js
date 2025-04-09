const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');
const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjkxNTg1YmM3LTcwNzItNDM3OS1hYjYwLThiYTc3NjI0Mjc5NC0xNzQ0MjI1Mzk4ODA5IiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiYzdhYWYwMjctZWM0ZC00OGM2LWJhZWItMjg0ZmRlMjg0NWUzIiwidHlwZSI6InQifQ.s4VAusIohXKJK7_TWxUlPSMmK9UNyYJZ47IDLQHso7w'
cypress.run({
  
})
.then((results) => {
  const args = {
      target: TOKEN,
  }
  tesults.results(results, args);
})
.catch((err) => {
  console.error(err)
})
