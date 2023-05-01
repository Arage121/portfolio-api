const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
// const fs = require('fs');
// const path = require('path');
const app = express();
const cors = require('cors');
app.use(cors());

dotenv.config({ path: './config.env'});
// require('./db/conn');
const DB = process.env.DATABASE;
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB Atlas');
    // Read data from data.json file
    // const rawData = fs.readFileSync(path.join(__dirname, 'skill_data.json'));
    // const data = JSON.parse(rawData);
    // Insert data into MongoDB Atlas
    // const Project = require('./model/projectSchema');
    // Project.create(data)
    // .then(() => {
    //   console.log('Inserted data into MongoDB Atlas');
    // })
    // .catch(err => {
    //   console.error(err);
    // });
    // const Skill = require('./model/skillsSchema');
    // Skill.create(data)
    // .then(() => {
    //     console.log('created new collection');
    // })
    // .catch(err => {
    //     console.log(err);
    // });
  })
  .catch(err => {
    console.error(err);
  });


const port = process.env.PORT;

const Project = require('./model/projectSchema');

app.get('/user_details', (req, res) => {
    
    Project.find({}).sort({ _id: 1 }).exec()
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      console.error(err);
      res.status(500).send('Internal server error');
    });
  });

const Skill = require('./model/skillsSchema');

app.get('/user_skills', (req, res) => {
    
    Skill.find({}).sort({ _id: 1 }).exec()
    .then(data => {
        res.send(data);
    })
    .catch(err => {
        console.log(err);
        res.status(500).send('Internal server error 2');
    });
});

app.listen(port, () => {
    console.log(`Server listened on http://localhost:${port}`);
});

