import React, {useContext} from 'react'
import FrenchFlag from '../../assets/france.svg'
import SpanishFlag from '../../assets/spain.svg'
import EnglishFlag from '../../assets/united-kingdom.svg'
import './ToggleLangs.css'
import {Context} from '../../context/langContext'

export default function ToggleLangs() {

    const {ToggleLang} = useContext(Context)

  return (
  <div className='container-langs'>
      <img onClick={() => ToggleLang('FR')} src={FrenchFlag} />
      <img onClick={() => ToggleLang('EN')} src={EnglishFlag} />
      <img onClick={() => ToggleLang('ES')} src={SpanishFlag} />
  </div>
  )
}
