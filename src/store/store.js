//Vuex
import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        posts: [],
        error: '',
        loading: false,
    },
    getters: {
        getLoadingStatus: ( state ) => {
            return state.loading
        },
        getPosts: ( state ) => {
            return state.posts
        },
        getSinglePost: ( state ) => ( id ) => {
            return state.posts.filter( ( post ) => {
                return post.id == id
            } )
        },
        getPostIndex: ( state ) => ( id ) => {
            return state.posts.findIndex( (post) => {
                return post.id == id
            })
        }
    },
    mutations: {
        setPosts: ( state, posts )  => {
            return state.posts = posts
        },
        setError: ( state, error ) => {
            return state.error = error
        },
        setLoading: ( state, value ) => {
            return state.loading = value
        },
        setCommentsForPostById: ( state, payload ) => {
            const index = state.posts.findIndex( (post) => {
                return post.id == payload.post_id
            })

            return state.posts[index].comments = payload.data
        },
        addComment: ( state, payload ) => {
            const index = state.posts.findIndex( (post) => {
                return post.id == payload.post_id
            })

            return state.posts[index].comments.push(payload.comment)
        }

    },
    actions: {
        fetchPosts: async ( { commit } ) => {
            commit( 'setLoading', true )

            try {
                const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts')

                // Set initial value for 'comments' for it to be observable by computed.
                const posts = data.map( (post) => {
                    post.comments = []
                    return post
                } )

                commit('setPosts', posts)
            } catch (e) {
                commit('setError', 'An error occured while fetching posts.')
            }

            commit('setLoading', false)
        },

        fetchComments: async ( context, post_id ) => {
            const { commit } = context

            commit( 'setLoading', true )

            try {
                const { data } = await axios.get(`https://jsonplaceholder.typicode.com/posts/${post_id}/comments`)
                commit( 'setCommentsForPostById', {
                    post_id,
                    data
                } )
            } catch (e) {
                commit( 'setError', 'There was an error while fetching comments.' )
            }

            commit( 'setLoading', false )
        }
    }
})