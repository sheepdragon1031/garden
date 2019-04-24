const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('signin/login/index', '/login')
// routes.add('signin/Register', '/register')

routes.add('user/blog', '/blog/:slug')
routes.add('about', '/about-us/:foo(bar|baz)')