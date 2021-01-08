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

class MealsUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            day: '',
            mealtype: '',         
        }
    }

    handleChangeInputTitle = async event => {
        const title = event.target.value
        this.setState({ title })
    }

    handleChangeInputday = async event => {
        const day = event.target.validity.valid
            ? event.target.value
            : this.state.day

        this.setState({ day })
    }

    handleChangeInputMealtype = async event => {
        const mealtype = event.target.value
        this.setState({ mealtype })
    }


    handleUpdateMeal = async () => {
        const { id, title, day, mealtype } = this.state
        const payload = { title, day, mealtype }

        await api.updateMealsById(id, payload).then(res => {
            window.alert(`Meals updated successfully`)
            this.setState({
              title: '',
              day: '',
              mealtype: '',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const meals = await api.getMealsById(id)

        this.setState({
            title: meals.data.data.title,
            day: meals.data.data.day,
            mealtype: meals.data.data.mealtype,
        })
    }

    render() {
        const { title, day, mealtype } = this.state
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

                <Button onClick={this.handleUpdateMeals}>Update Meal</Button>
                <CancelButton href={'/meals/list'}>Cancel</CancelButton>
            </Wrapper>
        )
    }
}

export default MealsUpdate
