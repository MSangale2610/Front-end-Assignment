import React, { PureComponent } from 'react'

export default class footer extends PureComponent {
  render() {
    return (
      <>
       <div class="card">
       <div class="card-header">
        Quote
       </div>
      <div class="card-body">
      <blockquote class="blockquote mb-0">
      <p>A well-known quote, contained in a blockquote element.</p>
      <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
    </blockquote>
    </div>
    </div> 
      </>
    )
  }
}
