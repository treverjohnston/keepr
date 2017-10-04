import vue from 'vue'
import axios from 'axios'
import vuex from 'vuex'
import router from '../router'

let api = axios.create({
    baseURL: '//localhost:3000/api/',
    timeout: 2000,
    withCredentials: true
})
let auth = axios.create({
    // baseURL: 'http://localhost:5000/',
    baseURL: '//localhost:3000/',
    timeout: 2000,
    withCredentials: true
})

vue.use(vuex)

var store = new vuex.Store({
    state: {
        dummy: [
            {
                url: "https://loremFlickr.com/400/400/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 32
            },
            {
                url: "https://loremFlickr.com/600/700/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "what", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "large", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/1600/1300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/800/700/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/900/700/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/500/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/600/600/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/800/800/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/900/900/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/200/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            },
            {
                url: "https://loremFlickr.com/500/300/dog",
                author: "t-swizzle",
                keeps: 35,
                tags: ["cool", "neat-o", "cat"],
                views: 78
            }
        ],
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
        profileVaults: {}
    },
    mutations: {
        resetState(state, item) {
                state.current = {},
                state.keeps = {},
                state.vaults = {},
                state.currentVault = {},
                state.currentKeeps = {},
                state.profileInfo = {},
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
            // vue.set(state.profileVaults, obj._id, obj)
            // console.log('set vaults', state.profileVaults)
        },
        setKeeps(state, obj) {
            // console.log('ojb', obj)
            for (var i = 0; i < obj.length; i++) {
                var item = obj[i]
                if (!state.currentKeeps[item._id]) {
                    vue.set(state.currentKeeps, item._id, item)
                }
            }
        },
        setAllKeeps(state, obj) {
            // console.log('ojb', obj)
            for (var i = 0; i < obj.length; i++) {
                var item = obj[i]
                if (!state.keeps[item._id]) {
                    vue.set(state.keeps, item._id, item)
                }
            }
            // console.log('keepstate',state.keeps)
        },
        addVault(state, obj) {
            vue.set(state.vaults, obj._id, obj)
            // console.log('adding to vaults', state.vaults)
        }
    },
    actions: {
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
        getKeeps({ commit, dispatch }) {
            api('keeps')
                .then(res => {
                    // console.log('settinkeeps', res.data.data)
                    commit('setAllKeeps', res.data.data)
                })
                .catch(err => {
                    console.log("eerrrroror")
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
                    console.log("eerrrroror")
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
                    console.log("eerrrroror")
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
                    console.log("eerrrroror")
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
                    console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        addVault({ commit, dispatch }, obj) {
            // console.log("add vault:", obj)
            api.post('vaults', obj)
                .then(res => {
                    commit('addVault', res.data.data)
                    var keep = {
                        vault: res.data.data,
                        keep: obj.keep
                    }
                    // console.log("res", res)
                    dispatch('addKeep', keep)
                })
                .catch(err => {
                    console.log("eerrrroror")
                    commit('handleError', err)
                    // router.push('/')
                })
        },
        getAuth({ commit, dispatch }) {
            auth('authenticate')
                .then(res => {
                    // console.log("info", res)
                    if (!res.data) {
                        return router.push('/')
                    }
                    commit('setInfo', res.data)
                    commit('setLogged')
                })
                .catch(err => {
                    commit('handleError', err)
                    router.push('/')
                })
        },
        viewPlus({ commit, dispatch }) {
            console.log("add a plus view function")
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
                    console.log(res)
                })
        },
        login({ commit, dispatch }, obj) {
            auth.post('login', obj)
                .then(res => {
                    swal({
                        title: 'Logged in as',
                        text: res.data.username,
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
                    console.log(res)
                })
        },
        logout({ commit, dispatch }) {
            auth.delete('logout')
                .then(res => {
                    console.log(res)
                    commit('setLogged')
                    commit('resetState')                    
                }).catch(err => {
                    commit('handleError', err)
                    router.push('/')
                })
        }
    }
})

function CreateAccountExample() {
    api.post('account', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
}

function loginAndGetDataExample() {
    api.post('account/login', { email: "j@j.com", password: 'Testing123!' }).then(GetDataExample)
}

function logout() {
    api.delete('account/logout')
}

function GetDataExample() {
    api('values').then(d => {
        console.log("Values Controller Data:", d)
    }).catch(err => {
        console.error(err)
    })
}
function getAuth() {
    api('account').then(res => {
        console.log("Auth Response", res)
    })
}

// loginAndGetDataExample()
// getAuth()

export default store