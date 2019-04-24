import { withRouter } from 'next/router'

const About = ({ router }) => <h1>About foos {router.query.foo}</h1>

export default withRouter(About)