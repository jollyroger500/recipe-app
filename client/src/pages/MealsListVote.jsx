import React, { Component } from 'react'
import ReactTable from 'react-table'
import api from '../api/api.js'

import styled from 'styled-components'

import 'react-table/react-table.css'

const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Voteup = styled.div`
    color: #ef9b0f;
    cursor: pointer;
`

const Votedown = styled.div`
    color: #ff0000;
    cursor: pointer;
`

class DownvoteMeals extends Component {
 deleteUser = event => {
     event.preventDefault()
         api.deleteMealsById(this.props.id)
         window.location.reload()
 }

 render() {
     return <Votedown onClick={this.deleteUser}>Down</Votedown>
 }
}

class UpvoteMeals extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/meals/update/${this.props.id}`
    }

    render() {
        return <Voteup onClick={this.updateUser}>Up</Voteup>
    }
}



class MealsListVote extends Component {
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
             Header: '',
             accessor: '',
             Cell: function(props) {
                 return (
                     <span>
                         <UpvoteMeals id={props.original._id} />
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
                            <DownvoteMeals id={props.original._id} />
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

export default MealsListVote
