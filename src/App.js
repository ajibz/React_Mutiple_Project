import './App.css';
import Nav from './nav'
import Post from './post'
import FetchData from './datafetch'
import Calculator from './calc'
import AddPost from './add_post.js'
import Loan from './loan'
import { Route, Switch } from 'react-router-dom'

function App() {
    return ( <
        div >
        <
        Nav / >

        <
        Switch >
        <
        Route path = '/'
        exact >
        <
        Post / >
        <
        /Route>  <
        Route path = '/calculator' >
        <
        Calculator / >
        <
        /Route> <
        Route path = '/loan' >
        <
        Loan / >
        <
        /Route>  < /
        Switch > <
        /div>
    );
}

export default App;