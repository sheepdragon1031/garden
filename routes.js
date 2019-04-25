const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('signin/login', 'signin/login')
routes.add('signin/register', '/register')

routes.add('user/blog', '/blog/:slug')
routes.add('about', '/about-us/:foo(bar|baz)')