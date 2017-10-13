import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

var production = !window.location.host.includes('localhost');
var baseUrl = production ? '//keepur.herokuapp.com/' : '//localhost:3000/';

let api = axios.create({
    // baseURL: '//keepur.herokuapp.com/api/',
    baseURL: baseUrl + 'api/',
    timeout: 4000,
    withCredentials: true
})
let auth = axios.create({
    // baseURL: '//keepur.herokuapp.com/',
    baseURL: baseUrl,
    timeout: 4000,
    withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        dummy: [],
        current: {},
        userInfo: {},
        dummyVaults: {

        },
        keeps: {

        },
        loggedIn: false,
        vaults: {},
        currentVault: {},
        currentKeeps: {},
        profileInfo: {},
        profileVaults: {},
        userKeeps: {}
    },
    mutations: {
        resetState(state, item) {
            state.current = {},
                state.keeps = {},
                state.vaults = {},
                state.currentVault = {},
                state.currentKeeps = {},
                state.userKeeps = {},
                state.profileVaults = {}
        },
        setZoom(state, item) {
            state.current = item;
            // console.log(state.current)
        },

        handleError(state, err) {
            console.error(err)
            // state.error = err
        },

        setInfo(state, obj) {
            // console.log('infocommit', obj.data)
            state.userInfo = obj.data
        },
        setCurrentVault(state, obj) {
            // console.log('currentvault', obj)
            state.currentVault = obj
        },
        addToKeeps(state, obj) {
            vue.set(state.dummyKeeps, obj.vault, obj)
        },
        setLogged(state) {
            state.loggedIn = !state.loggedIn
        },
        setVaults(state, obj) {
            for (var i = 0; i < obj.length; i++) {
                // console.log(obj[i])
                var item = obj[i]
                vue.set(state.vaults, item._id, item)

            }
            // console.log('setting vaults', state.vaults)
        },
        setProfileVaults(state, obj) {
            // console.log('seting vaults', obj)
            for (var i = 0; i < obj.length; i++) {
                // console.log(obj[i])
                var item = obj[i]
                vue.set(state.profileVaults, item._id, item)
            }
        },
        setUserKeeps(state, obj) {
            for (var i = 0; i < obj.length; i++) {
                var item = obj[i]
                vue.set(state.userKeeps, item._id, item)
            }
        },
        setKeeps(state, obj) {
            // console.log('ojb', obj)
            for (var i = 0; i < obj.length; i++) {
                var item = obj[i]
                    vue.set(state.currentKeeps, item._id, item)
                
            }
        },
        setAllKeeps(state, obj) {
            // console.log('ojb', obj)
            for (var i = 0; i < obj.length; i++) {
                var item = obj[i]
                vue.set(state.keeps, item._id, item)

            }
            // console.log('keepstate',state.keeps)
        },
        addVault(state, obj) {
            vue.set(state.vaults, obj._id, obj)
            // console.log('adding to vaults', state.vaults)
        }
    },
    actions: {
        sendDesign({ commit, dispatch }, payload) {
            // console.log('dis is payload', payload[0])
            api.post('keeps', payload[0])
                .then(res => {
                    // console.log('dis is res', res)
                    dispatch('getKeeps')
                })
                .catch(err => {
                    commit('handleError', err)
                })
        },
        deleteKeep({ commit, dispatch }, obj) {
            api.delete(`keeps/${obj.keepId}`)
                .then(res => {
                    // console.log('delete', res)
                    commit('resetState')
                    dispatch('getUserKeeps', obj.userId)
                    dispatch('getKeeps')
                    dispatch('getArtistProfile', obj.userId)
                })
                .catch(err => {
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        deleteVault({ commit, dispatch }, obj) {
            api.delete(`vaults/${obj.keepId}`)
                .then(res => {
                    // console.log('delete', res)
                    // commit('resetState')
                    dispatch('getUserVaults')
                    dispatch('getArtistProfile', obj.userId)
                })
                .catch(err => {
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getAllVaults({ commit, dispatch }) {
            api('vaults')
                .then(res => {
                    // console.log('settinvaults', res.data.data)
                    commit('setVaults', res.data.data)
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getKeeps({ commit, dispatch }) {
            api('keeps')
                .then(res => {
                    // console.log('settinkeeps', res.data.data)
                    commit('setAllKeeps', res.data.data)
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        addKeep({ commit, dispatch }, obj) {
            obj.keep.vaults.push(obj.vault._id)
            api.put(`keeps/${obj.keep._id}`, obj.keep)
                .then(res => {
                    // console.log(res.data.data)
                    dispatch('getKeeps')
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getCurrentKeeps({ commit, dispatch }, Id) {
            api(`vaults/${Id}/keeps`)
                .then(res => {
                    // console.log('currentKeeps', res)
                    commit('setKeeps', res.data.data)
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getUserVaults({ commit, dispatch }) {
            // console.log("id", id)
            api(`uservaults`)
                .then(res => {
                    // console.log('userVaults',res)
                    commit('setVaults', res.data.data)
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getArtistProfile({ commit, dispatch }, id) {
            // console.log("id", id)
            api(`uservaults/${id}/vaults`)
                .then(res => {
                    // console.log('profileVaults',res)
                    commit('setProfileVaults', res.data.data)
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getUserKeeps({ commit, dispatch }, id) {
            // console.log("id", id)
            api(`uservaults/${id}/keeps`)
                .then(res => {
                    // console.log('profileVaults',res)
                    commit('setUserKeeps', res.data.data)
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        addVault({ commit, dispatch }, obj) {
            // console.log("add vault:", obj)
            api.post('vaults', obj)
                .then(res => {
                    commit('addVault', res.data.data)
                    if (obj.keep) {
                        var keep = {
                            vault: res.data.data,
                            keep: obj.keep
                        }
                        // console.log("res", res)
                        dispatch('addKeep', keep)
                    }
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        viewPlus({ commit, dispatch }, obj) {
            // console.log('obj', obj)
            api.put(`uservaults/keeps/${obj.keepId}`)
                .then(res => {
                    // console.log('updatedkeep', res)
                    // commit('resetState')
                    dispatch('getKeeps')
                })
                .catch(err => {
                    // console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getAuth({ commit, dispatch }) {
            auth('authenticate')
                .then(res => {
                    // console.log("info", res)
                    if (res.data.data == null) {
                        console.log("failed login")
                        return router.push('/')
                    }
                    else if (res.data.data._id !== null) {
                        console.log("successful login")
                        commit('setInfo', res.data)
                        commit('setLogged')
                    } else {
                        console.log("login failed")
                    }
                })
                .catch(err => {
                    commit('handleError', err)
                    router.push('/')
                })
        },
        createAccount({ commit, dispatch }, obj) {
            auth.post('register', obj)
                .then(res => {
                    swal({
                        title: 'Account Created',
                        timer: 2000
                    }).then(
                        function () { },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                console.log('I was closed by the timer')
                            }
                        })
                        .catch(err => {
                            commit('handleError', err)
                            router.push('/')
                        })
                    commit('setLogged')
                    commit('resetState')
                    // console.log(res)
                })
        },
        login({ commit, dispatch }, obj) {
            auth.post('login', obj)
                .then(res => {
                    swal({
                        title: 'Logged in as',
                        text: res.data.data.name,
                        timer: 2000
                    }).then(
                        function () {
                            commit('setInfo', res.data)
                            commit('setLogged')
                            // console.log('logres', res)
                        },
                        // handling the promise rejection
                        function (dismiss) {
                            if (dismiss === 'timer') {
                                console.log('I was closed by the timer')
                            }
                        })
                        .catch(err => {
                            commit('handleError', err)
                            router.push('/')
                        })
                    // console.log(res)
                })
                .catch(err => {
                    commit('handleError', err)
                    router.push('/')
                })
        },
        logout({ commit, dispatch }) {
            auth.delete('logout')
                .then(res => {
                    // console.log(res)
                    commit('setLogged')
                    commit('resetState')
                }).catch(err => {
                    commit('handleError', err)
                    router.push('/')
                })
        }
    }
})


export default store