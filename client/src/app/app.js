import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { NavBar } from '../components'
import { MealsList, MealsInsert, MealsUpdate, MealsListVote } from '../pages'

import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/meals/list" exact component={MealsList} />
                <Route path="/meals/create" exact component={MealsInsert} />
                <Route
                    path="/meals/update/:id"
                    exact
                    component={MealsUpdate}
                />
                <Route path="/meals/vote" exact component={MealsListVote} />               
            </Switch>
        </Router>
    )
}

export default App
