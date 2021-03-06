require("dotenv/config")
const path = require('path')
const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')

const routes = require('./routes')

const server = express()

server.use(express.urlencoded({
    extended: true
}))
server.use(express.static(path.join(__dirname, '..', 'public')))
server.use(methodOverride('_method'))
server.use(routes)

server.use(function(req, res){
    return res.status(404).render("not-found")
})    

server.set('view engine', 'njk')

nunjucks.configure('src/app/views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.listen(process.env.PORT || 5000, function(req, res){
    console.log('Server is running')
})