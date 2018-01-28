import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const WrapperDiv = styled.div`
display: flex;
flex-wrap: wrap;
flex-direction: row;
align-items: center;
justify-content: center;
`
const CourseDiv = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const CoursePhotoImg = styled.img`
width: 300px;
height: 300px;
border-radius: 50%;
`
const DiscPhotoImg = styled.img`
width: 250px;
height: 175px;
border-radius: 50%;
`

class UserPage extends Component {

    state = {
        user: {},
        courses: [],
        discs: []
    }



    componentWillMount() {
        this.getUser()
        this.getCourses()
        this.getDiscs()
    }

    getUser = () => {

        axios.get(`/api/users/${this.props.match.params.userId}`)
            .then(res => {
                console.log("Response from API:", res.data)
                this.setState({ user: res.data })
                console.log("User in state:", this.state.user)
            })
    }

    getCourses = () => {
        axios.get(`/api/users/${this.props.match.params.userId}/courses`)
            .then(res => {
                console.log(res.data)
                this.setState({ courses: res.data })
            })
    }

    getDiscs = () => {
        axios.get(`/api/users/${this.props.match.params.userId}/discs`)
            .then(res => {
                console.log(res.data)
                this.setState({ discs: res.data })
            })
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div>
                    <h1>{this.state.user.username}'s page</h1>
                    <h3>Courses</h3>
                    <WrapperDiv>
                        {this.state.courses.map((course) => {
                            return (
                                <CourseDiv key={course._id}>
                                    <div>
                                        {course.courseName}
                                    </div>
                                    <div>
                                    <CoursePhotoImg src={course.photoUrl} alt={`photo of ${course.courseName}`} />
                                    </div>
                                    <div>{course.location}</div>
                                </CourseDiv>
                            )
                        })}
                    </WrapperDiv>
                    <h3>Discs</h3>
                    <WrapperDiv>
                        {this.state.discs.map((disc) => {
                            return (
                                <div key={disc._id}>
                                    <div>
                                        <DiscPhotoImg src={disc.photoUrl} alt={`photo of ${disc.discMake} ${disc.discModel} ${disc.discType}`} />
                                    </div>
                                </div>
                            )
                        })}
                    </WrapperDiv>
                </div>
                <Link to={`/users/${this.props.match.params.userId}/edit`}>Edit User</Link>
            </div>
        )
    }
}

export default UserPage