const express = require('express');
const { Agent, Review } = require('./model');


const app = express();

app.use(express.json())







app.get('/agents', async (req, res, next) => {
  const agents = await Agent.findAll();
  return res.json(agents);
});


//helper function for post agent to sort create agent requests to account for nullable columns
//I would have created a util folder and imported the function but I got a "SyntaxError: Cannot use import statement outside a module"
//Fixing this would require editing base files of the assessment and that seemed out of scope
function sortCreateAgent({practiceAreas, aboutMe}){
  if(!practiceAreas||!aboutMe){
      if (!practiceAreas && aboutMe) return "2"

      else if (practiceAreas && !aboutMe) return "3"

      else return "4"

    }
  else return "1"
}

//Creates a new agent
app.post('/agents', async (req, res, next) => {
  console.log("we've hit the post route")
  const {
    firstName, lastName, photoUrl,
    agentLicence, address, practiceAreas,
    aboutMe
  } = req.body

  const agentReqObj = {
    firstName, lastName, photoUrl,
    agentLicence, address, practiceAreas,
    aboutMe
  }

  let newAgent;

  let requestType = sortCreateAgent(agentReqObj)
  console.log("--REQUEST TYPE--:", requestType)

  switch(requestType){
    case "1":
      newAgent = await Agent.create({
        firstName, lastName, photoUrl,
        agentLicence, address, practiceAreas,
        aboutMe
  })
    case "2":
      newAgent = await Agent.create({
        firstName, lastName, photoUrl,
        agentLicence, address,
        aboutMe
      })
    case "3":
      newAgent = await Agent.create({
        firstName, lastName, photoUrl,
        agentLicence, address,
        practiceAreas
      })
    case "4":
      newAgent = await Agent.create({
        firstName, lastName, photoUrl,
        agentLicence, address
      })}


  res.status(200)
  res.json({
    id: newAgent.id,
    firstName: newAgent.firstName,
    lastName: newAgent.lastName,
    photoUrl: newAgent.photoUrl,
    agentLicense: newAgent.agentLicense,
    address: newAgent.address,
    practiceAreas: newAgent.practiceAreas,
    aboutMe: newAgent.aboutMe
  })
})


//gets reviews by agent Id
app.get('/agents/:agentId/reviews', async (req, res, next) => {
  const agentId = req.params.agentId
  const reviews = await Review.findAll({
    where: {agentId: agentId }
  })
  return res.json(reviews);
});


//posts a new review for an agent
app.post('/agents/:agentId/reviews', async (req, res, next) =>{
  const {agentId, stars, review} = req.body
  const newReview = await Review.create({
    agentId, stars, review
  })
  return res.json(newReview);
})

module.exports = app;
