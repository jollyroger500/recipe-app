import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api/api.js'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Delete = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class UpdateMeals extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/meals/update/${this.props.id}`
    }

    render() {
        return <Update onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMeals extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the meal ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMealsById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete onClick={this.deleteUser}>Delete</Delete>
    }
}

class MealsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            meals: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMeals().then(meals => {
            this.setState({
                meals: meals.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { meals, isLoading } = this.state

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Title',
                accessor: 'title',
                filterable: true,
            },
            {
                Header: 'Day',
                accessor: 'day',
                filterable: true,
            },
            {
                Header: 'Mealtype',
                accessor: 'mealtype',
                filterable: true,            
            },
            {
             Header: 'Recipe',
             accessor: 'recipe',
             filterable: true,            
            },
            {
             Header: 'Votes',
             accessor: 'votes',
            },                     
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMeals id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateMeals id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!meals.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable
                        data={meals}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default MealsList
