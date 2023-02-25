const express = require ('express');

const router = express.Router();

//GET /stories: send all stories to the user

router.get('/', (req, res)=>{
    res.send('send all the stories');
});

//GET /stories: send html form for creating a new story

router.get('/new', (req, res)=>{
    res.send('send the new form');
});

//POST /stories: create a new story
router.post('/', (req, res)=>{
    res.send('Created a new Story');
});

//GET /stories/:id: send details of story identified by id

router.get('/:id', (req, res)=>{
    res.send('send story with id ' + req.params.id);
});

//GET /stories/:id/edit: send html form for editing an existing story

router.get('/:id/edit', (req, res)=>{
    res.send('send the edit form');
});

//PUT /stories/:id: update the story identified by id

router.put('/:id', (req, res)=>{
    res.send('update story with id' + req.params.id);
});

//DELETE /stories/:id: delete the story identified by id

router.delete('/:id', (req, res)=>{
    res.send('delete story with id' + req.params.id);
});


module.exports = router;