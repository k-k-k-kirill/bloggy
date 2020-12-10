
import Archive from './views/Archive.vue'
import SinglePost from './views/SinglePost.vue'

const routes = [
  { path: "", component: Archive },
  { path: "/post/:id", component: SinglePost }
];

export default routes;