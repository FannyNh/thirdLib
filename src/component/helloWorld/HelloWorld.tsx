import './style.css'

import React from 'react'

import { IHelloWorld } from './types'

export const Helloworld = ({ text }: IHelloWorld) => {
  return <div className="text">This is test text: {text}</div>
}
