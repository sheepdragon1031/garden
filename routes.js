const nextRoutes = require('next-routes')
const routes = (module.exports = nextRoutes())

routes.add('pages/user/login', 'Login','pages/user/login')
routes.add('Register', '/register')

routes.add('blog', '/blog/:slug')
routes.add('about', '/about-us/:foo(bar|baz)')