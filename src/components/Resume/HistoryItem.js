import React from 'react'
import styles from './resume.module.sass'
import Icon from '../../svg/Icon'
import Markdown from 'markdown-it'

const md = new Markdown()

const getDate = (item) => {
  const year = item.from === item.to ? item.from : `${item.from} ⇒ ${item.to}`
  const duration = item.duration ? ` (${item.duration})` : ''
  return `${year}${duration}`
}

const HistoryItem = ({ item }) => (
  <div className={styles.experience}>
    <header>
      <div className="date">
        <Icon id="calendar" className="svg-icon" />
        {getDate(item)}
      </div>
      <div className={styles.location}>
        <Icon id="globe" className="svg-icon" />
        {item.location}
      </div>
    </header>
    <h3>{item.title}</h3>
    {item.resp && (
      <p
        dangerouslySetInnerHTML={{ __html: md.render(item.resp) }}
      />
    )}
    {item.points && (
      <ul>
        {item.points.map((point, i) => (
          <li
            key={i}
            dangerouslySetInnerHTML={{ __html: md.render(point) }}
          />
        ))}
      </ul>
    )}
  </div>
)

export default HistoryItem
