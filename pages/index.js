import { Link, Router } from '../routes'
import Appbar from '../components/appbar'
export default () => (
<div>
    <Appbar/>
  <ul>
    <li>
      <Link route='blog' params={{ slug: 'hello-world' }}>
        <a>Blog: Hello world</a>
      </Link>
    </li>
    <li>
      <Link route='blog' params={{ slug: 'another-blog-post' }}>
        <a>Blog: Another blog post</a>
      </Link>
    </li>
    <li>
      <Link route='blog' params={{ slug: 'non-existant' }}>
        <a>Blog: Not found</a>
      </Link>
    </li>
    <li>
      <button onClick={() => Router.pushRoute('about', { foo: 'bar' })}>
        About foo bar
      </button>
    </li>
    <li>
      <button onClick={() => Router.pushRoute('about', { foo: 'baz' })}>
        About foo baz
      </button>
    </li>
  </ul>
</div>
)