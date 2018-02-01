import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      // rough draft just outlining things about the app for now and will proof read and finish up
      <div>
        <h3>About</h3>

        <p> A full stack application called Todos. It is basically
          a Todo List that has reminders and updates.
        </p>

        <p>
        So basically the Todo Task list app is an app that is a
        cloud based reminder that can help you when you need to
        remember things. In the todo list you have: Title,
        Description, Importance, Category, Due Date, and Status.
        </p>

        <h4>Title</h4>
        <p>In the Title description you can put what you need to be reminded about.</p>
        <h4>Description</h4>
        <p>In the description field you type a description of your reminder</p>
        <h4>Importance</h4>
        <p>There are 3 level of Importance that you can choose from</p>
        <ul>
          <li>Low - This level is of least imporantance if chosen, it will be on the bottom of the Todo list</li>
          <li>Moderate - This level is the average in amount or or intensity, theis level will show up
            in the middle between low and high within the level of importance</li>
          <li>High - This level of Importance is the highest level and will be put on the top of the Todo list</li>
        </ul>

        <h4>Category</h4>
        <p>There are six category fields you can choose from which are:</p>
        <ul>
          <li>Work</li>
          <li>Learning</li>
          <li>Health</li>
          <li>School</li>
          <li>Personal</li>
          <li>Family</li>
        </ul>
        <h4>Due Date</h4>
        <p>The Due Date Field </p>
      </div>
    )
  }
}

export default About
