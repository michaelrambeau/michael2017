import React from 'react'
import history from './history.md'

const History = () => (
  <div className="main-document" style={{ marginTop: '2rem' }}>
    <h2>職務経歴書</h2>
    <div dangerouslySetInnerHTML={{ __html: history.body }} />
  </div>
)

export default History
