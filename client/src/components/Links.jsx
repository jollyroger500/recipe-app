import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})``

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})``

class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand">
                    Recipe Shop
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/meals/list" className="nav-link">
                                List Meals
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/meals/create" className="nav-link">
                                Create Meal
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/meals/vote" className="nav-link">
                                Vote Meal
                            </Link>
                        </Item>                        
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links
