import React from 'react'

type ContainerProps = {
  title: string
  children: React.ReactNode
}

const Container: React.FC<ContainerProps> = (props) => {
  const { title, children } = props

  return (
    <div>
      <span>{title}</span>
    </div>
  )
}
