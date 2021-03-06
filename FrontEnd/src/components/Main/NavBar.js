import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import AnonTool from './AnonTool'
import ExportTool from './ExportTool'
import DeleteTool from './DeleteTool'

export default class NavBar extends Component {

  render () {
    return (
      <div className='navbar navbar-expand-lg navbar-light bg-light mb-5'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item'>
            <Link className='nav-link' to='/'>Authentication</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/OrthancContent'>Orthanc Content</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/import'>Import</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/query'>Query</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/auto-query'>Auto-Query</Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/options'>Administration</Link>
          </li>
        </ul>
        <div className="row">
          <div className="mr-1">
            <AnonTool />
          </div>
          <div className="mr-1">
            <ExportTool />
          </div>
          <div className="mr-1">
          <DeleteTool />
          </div>
        </div>
      </div>
    )
  }
  
}
