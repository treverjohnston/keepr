let Vaults = require('../models/vault')
let Keeps = require('../models/keep')

module.exports = {
  userVaults: {
    path: '/uservaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Vaults'
      Vaults.find({creatorId: req.session.uid})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  profileVaults: {
    path: '/uservaults/:userId/vaults',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Vaults by Id'
      Vaults.find({creatorId: req.params.userId})
        .then(vaults => {
          res.send(handleResponse(action, vaults))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  },
  profileKeeps: {
    path: '/uservaults/:userId/keeps',
    reqType: 'get',
    method(req, res, next){
      let action = 'Find User Keeps by Id'
      Keeps.find({creatorId: req.params.userId})
        .then(keeps => {
          res.send(handleResponse(action, keeps))
        }).catch(error => {
          return next(handleResponse(action, null, error))
        })
    }
  }
}


function handleResponse(action, data, error) {
    var response = {
      action: action,
      data: data
    }
    if (error) {
      response.error = error
    }
    return response
  }