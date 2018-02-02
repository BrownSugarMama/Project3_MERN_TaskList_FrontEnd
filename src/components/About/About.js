import React, { Component } from 'react'
import './About.css'

class About extends Component {
  render () {
    return (
      // rough draft just outlining things about the app for now and will proof read and finish up
      // may move this to the readme section and add something more simple.. notably what the app is about
      <div>
        <h3>About</h3>

        <p>
          The Todo Task list is a reminder app that can help you when you need to remember tasks or day to day activities.
          In the todo list you have: Description, Importance, Category, Due Date, and Status.
        </p>
        <p>
        Under the 'Add Task' button, there are Inspirational quotes to help with stress management and other day to day activities. Inspirational
        quotes are a great way to boost your mood thoughout the day.
        </p>
        <p>
          Rather you are on the go, or just need to accomplish somehing at a later date, there is a level of
          importance button where you can categorize based on the level of Importance. The least importance will
          load on the bottom while the most important or urgent tasks will load on the top.
        </p>
      </div>
    )
  }
}

export default About
