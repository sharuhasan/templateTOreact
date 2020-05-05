import React,{Component} from 'react'
import {Link} from 'react-router-dom'

export default class Header extends Component{
    render(){
        return(
        <div>
            <header id="header">
                <a href="index.html" class="logo">Massively</a>
            </header>
            
            <nav id="nav">
                <ul class="links">
                    <li class="active"><Link to='/'>This is Massively</Link></li>
                    <li><Link to='/Generic'>Generic Page</Link></li>
                    <li><a href="elements.html">Elements Reference</a></li>
                </ul>
                <ul class="icons">
                    <li><a href="#" class="icon brands fa-twitter"><span class="label">Twitter</span></a></li>
                    <li><a href="#" class="icon brands fa-facebook-f"><span class="label">Facebook</span></a></li>
                    <li><a href="#" class="icon brands fa-instagram"><span class="label">Instagram</span></a></li>
                    <li><a href="#" class="icon brands fa-github"><span class="label">GitHub</span></a></li>
                </ul>
            </nav>
        </div>
        )
    }
}