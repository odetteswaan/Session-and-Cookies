const express=require('express')
const AuthLogin=require('../controllers/Auth')

const Router=express.Router()

Router.get('/login',AuthLogin.getLogin)

Router.post('/login',AuthLogin.postLogin)

module.exports=Router