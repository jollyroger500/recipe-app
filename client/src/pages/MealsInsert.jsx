import React, { Component } from 'react'
import api from '../api/api.js'

import styled from 'styled-components'

const Title = styled.h1.attrs({
    className: 'h1',
})``

const Wrapper = styled.div.attrs({
    className: 'form-group',
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
`

const InputText = styled.input.attrs({
    className: 'form-control',
})`
    margin: 5px;
`

const Button = styled.button.attrs({
    className: `btn btn-primary`,
})`
    margin: 15px 15px 15px 5px;
`

const CancelButton = styled.a.attrs({
    className: `btn btn-danger`,
})`
    margin: 15px 15px 15px 5px;
`

class MealsInsert extends Component {
    constructor(props) {
        super(props)

        this.state = {
            title: '',
            day: '',
            mealtype: '',
            recipe: '',
            votes: '',
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputDay = async event => {
        const day = event.target.validity.valid
            ? event.target.value
            : this.state.day

        this.setState({ day })
    }

    handleChangeInputMealtype= async event => {
        const mealtype = event.target.value
        this.setState({ mealtype })
    }

    handleChangeInputRecipe= async event => {
     const recipe = event.target.value
     this.setState({ recipe })
    }

    handleChangeInputVotes= async event => {
     const votes = event.target.value
     this.setState({ votes })
   }

    handleIncludeMeals = async () => {
        const { title, day, mealtype, recipe, votes } = this.state
        const payload = { title, day, mealtype, recipe, votes }

        await api.insertMeals(payload).then(res => {
            window.alert(`Meal inserted successfully`)
            this.setState({
                title: '',
                day: '',
                mealtype: '',
                recipe: '',
                votes: '',
            })
        })
    }

    render() {
        const { title, day, mealtype, recipe, votes } = this.state
        return (
            <Wrapper>
                <Title>Create Meal</Title>

                <Label>Title: </Label>
                <InputText
                    type="text"
                    value={title}
                    onChange={this.handleChangeInputTitle}
                />

                <Label>Day: </Label>
                <InputText
                    type="text"
                    value={day}
                    onChange={this.handleChangeInputDay}
                />

                <Label>Mealtype: </Label>
                <InputText
                    type="text"
                    value={mealtype}
                    onChange={this.handleChangeInputMealtype}
                />

                <Label>Recipe: </Label>
                                <InputText
                                    type="text"
                                    value={recipe}
                                    onChange={this.handleChangeInputRecipe}
                                />

                <Label>Votes: </Label>
                <InputText
                    type="number"
                    step="0.1"
                    lang="en-US"
                    min="0"
                    max="10"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={votes}
                    onChange={this.handleChangeInputVotes}
                />

                <Button onClick={this.handleIncludeMeals}>Add Meals</Button>
                <CancelButton href={'/meals/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MealsInsert
