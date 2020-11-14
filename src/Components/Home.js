import React, { Component } from 'react'

export default class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navigation">
                        <div className="username" >
                            <p>User</p>
                        </div>
                        <div>
                            <input type="search" className="search-box" placeholder="search here..." />
                            <input type="search" className="search-box" placeholder="search here..." />
                        </div>
                        <div className="logout">
                            <p>Logout</p>
                        </div>
                </nav>
            </div>
        )
    }
}
