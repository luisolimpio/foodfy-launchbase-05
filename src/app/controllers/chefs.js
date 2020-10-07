const Chef = require("../models/Chef")

module.exports = {
  index(req, res) {
    Chef.all(function(chefs) {
      return res.render("admin/chefs/index", { chefs })
    })
  },

  siteChefsIndex(req, res) {
    Chef.all(function(chefs) {
      return res.render("site/chef", { chefs })
    })
  },

  create(req, res) {
    return res.render("admin/chefs/create")
  },

  show(req, res) {
    Chef.find(req.params.id, function(chef) {
      if(!chef) return res.send("Instructor not found!")

      Chef.findRecipesOfOwner(req.params.id, function(recipes) {
        return res.render("admin/chefs/details", { chef, recipes })
      })
    })
  },

  edit(req, res) {
    Chef.find(req.params.id, function(chef) {
      return res.render("admin/chefs/edit", { chef })
    })
  },

  post(req, res) {
    Chef.create(req.body, function(chef) {
      return res.redirect(`/admin/chefs/${chef.id}`)
    })
  },

  put(req, res) {
    Chef.update(req.body, function() {
      return res.redirect(`/admin/chefs/${req.body.id}`)
    })
  },

  delete(req, res) {
    Chef.findRecipesOfOwner(req.body.id, function(recipes) {
      if(recipes[0]) return res.send("Error! Chefs who has recipes can not be deleted!")

      Chef.delete(req.body.id, function() {
        return res.redirect("/admin/chefs")
      })
    })
  }
}