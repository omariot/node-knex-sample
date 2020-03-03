var express = require('express');
var knex = require('../configknex');
var users = require('../api/user');

var router = express.Router();

router.route('/users/build').post(function(req,res) {
    
  console.log('probando api crear user');

  users.createTableUsers(knex)
    .then(function(){
      res.json({
        error:false,
        data: {
          message: 'Table created'
        }
      });
    })
    .catch(function(err){
        res.status(500).json({
          error:true,
          data:{
            message:err.message
          }
        });
    });
  });
  
router.route('/users')
    .get(function(req,res){
      users.selectUsers(knex)
        .then(function(collection){
          res.json({
            error:false,
            data: collection
          });
        })
        .catch(function(err){
          res.status(500).json({
            error:true,
            data:{
              message:err.message
            }
          });
      });
    })
    .post(function(req,res){
      const user = {
        name: req.body.name,
        password: req.body.name
      };
  
      users.insertUsers(knex, user)
      .then(function(id){
        res.json({
          error:false,
          data: id
        });
      })
      .catch(function(err){
        res.status(500).json({
        error:true,
        data:{
          message:err.message
        }
        });
      });
    });

module.exports = router;