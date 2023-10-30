import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import User from './components/User';
import Contact from './components/Contact';
import Home from './components/Home';
import Layout from './components/Layout';
import './App.css';

function App() {
  //   const location = window.location
  //   const params = new URLSearchParams(location.search);
  //   const new_url = new URL('../bcit', location.href);
  //   console.log(params)

  //   function handleClick(){
  //     const url = 'https://jsonplaceholder.typicode.com/posts/1'

  //     fetch(url, {
  //       method: 'PATCH',
  //       body: {
  //         title: 'title',
  //         userID: 1,
  //         body: 'body',
  //         id: 1
  //       }
  //     })
  //     .then(response => response.json())
  //     .then(data => console.log(data))


  // }

  return (
    // http://localhost:3000/hello/world?name=react&age=20
    // <div className="App">
    //   <h1>Hi!</h1>
    //   <p>Href: {location.href}</p>
    //   <p>Protocol: {location.protocol}</p>
    //   <p>Host: {location.host}</p>
    //   <p>Port: {location.port}</p>
    //   <p>Hostname: {location.hostname}</p>
    //   <p>Pathname: {location.pathname}</p>
    //   <p>Search: {location.search}</p>
    //   <p>ParamsGetName: {params.get('name')}</p>
    //   <p>ParamsGetAge: {params.get('age')}</p>
    //   <p>ParamsGetlang: {params.get('lang')}</p>
    //   <p>newURL: {new_url.href}</p>
    //   <div>
    //   <p>HTTP examples</p>
    //         <button onClick={handleClick}>go</button>
    //   </div>
    // </div>

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />} />
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='user' element={<User />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
