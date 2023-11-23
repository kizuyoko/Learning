import Link from "next/link";
import { Fragment } from "react";
function HomePage() {
  return <Fragment>
  <h1>Home Page</h1>
  <ul>
    {/* Not reccomended to use a-tag because it reloads. Instead, use Link. */}
    {/* <li><a href='/news'>News</a></li> */}
    <li><Link href='/news'>News</Link></li>
  </ul>
</Fragment>
}

export default HomePage;