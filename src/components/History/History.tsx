import React from 'react'
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from '@mui/lab'
import { Typography } from '@mui/material'

const items = [
  {
    title: "Education",
    year: "2011",
  },
  {
    title: "Student Employment",
    year: "2012",
  },
  {
    title: "IT Technical Associate",
    year: "2016",
  },
  {
    title: "Research Programmer",
    year: "2019",
  },
  {
    title: "Senior Software Engineer",
    year: "2021",
  },
]

const History = () => {
  const timelineItems = items.map((item, idx) => {
    const { title, year } = item
    return (
      <TimelineItem key={idx}>
        <TimelineOppositeContent sx={{ flex: 0.2}}>{year}</TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot />
          {idx !== items.length-1 ? <TimelineConnector /> : null}
        </TimelineSeparator>
        <TimelineContent>{title}</TimelineContent>
      </TimelineItem>
    )
  })

  return (
    <Timeline>
      {timelineItems}
    </Timeline>
  )
}

export default History