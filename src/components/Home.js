import { Link } from "react-router-dom"

export default function Home(){


    return(
        <div>
<h1>Home Page</h1>
<p><Link to='about'>About Link</Link></p>
<p><a href='about'>About Tag</a></p>
<p><Link to='contact'>Contact</Link></p>
        </div>
    )
}