import { FormEvent, useState } from 'react'
import { Header } from '../components/Header'
import { Separator } from '../components/Separator'
import { Tweet } from '../components/Tweet'
import '../styles/status.css'

export function Status() {
  const awnsers = [
    'Concordo...',
    'Faz sentido até.',
    'Parabéns pelo progresso!'
  ]

  const [newAwnser, setNewAnwser] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Faz sentido até.',
    'Parabéns pelo progresso!'
  ])

  function createNewAwnser(event: FormEvent) {
    event.preventDefault()
    setAnswers([newAwnser, ...answers])
    setNewAnwser('')
  }
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione quisquam nostrum debitis beatae quia assumenda id deleniti earum, fuga labore quasi reiciendis amet sit impedit dolore minima laborum voluptatum. A." />

      <Separator />
      <form onSubmit={createNewAwnser} className="answerTweetForm">
        <label htmlFor="tweet">
          <img
            src="https://avatars.githubusercontent.com/u/92648265?v=4"
            alt="imagem do usuario"
          />
          <textarea
            id="tweet"
            placeholder=" Tweet your awnser "
            onChange={event => {
              setNewAnwser(event.target.value)
            }}
          />
        </label>

        <button type="submit">Awnser</button>
      </form>

      {awnsers.map(awnser => {
        return <Tweet key={awnser} content={awnser} />
      })}
    </main>
  )
}
