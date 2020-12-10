<template>
    <div class="row mt-4">
        <div class="col-lg-8 offset-lg-2">
            <h3 class="mb-4 d-block">What do you think about this post?</h3>
            <form>
                <div v-if="submitted">
                    <h4>Thank you for sharing your opinion!</h4>
                </div>
                <form class="mb-4" v-else @submit.prevent="handleSubmit">
                    <div class="form-group mb-4">
                        <input type="text" name="title" class="form-control" placeholder="Title*" v-model="title">
                        <div v-if="errors.title" class="error">{{ errors.title }}</div>
                    </div>

                    <div class="form-group mb-4">
                        <input type="email" name="email" class="form-control" placeholder="Your email" v-model="email">
                    </div>

                    <div class="form-group mb-4">
                        <textarea class="form-control" name="comment" placeholder="Comment*" v-model="comment" />
                        <div v-if="errors.comment" class="error">{{ errors.comment }}</div>
                    </div>

                    <div class="form-group text-right">
                        <input class="btn btn-primary" type="submit" value="Post comment">
                    </div>
                </form>
            </form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
    name: 'PostComment',
    props: ['post_id'],
    data() {
        return {
            submitted: false,
            title: '',
            email: '',
            comment: '',
            errors: {
                title: '',
                comment: ''
            }
        }
    },
    methods: {
        ...mapMutations([
            'addComment'
        ]),
        validateForm() {
            let filterPass = true

            for( let error in this.errors ) {
                this.errors[error] = ''
            }

            if ( this.title === '' ) {
                this.errors.title = 'Title of the comment is required.'
                filterPass = false
            }

            if ( this.comment === '' ) {
                this.errors.comment = 'Comment content is required.'
                filterPass = false
            }

            return filterPass
        },
        handleSubmit() {
            if ( this.validateForm() ) {
                this.addComment({
                    post_id: this.post_id,
                    comment: {
                        name: this.title,
                        email: this.email,
                        body: this.comment
                    }
                })
            }
        }
    }
}
</script>

<style lang="scss">
    .error {
        color: red;
    }
</style>