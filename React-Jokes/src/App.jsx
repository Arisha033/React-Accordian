import { useState } from 'react'
import { Jokes } from './Components/Jokes'


function App() {

  return (
    <>
    <h1>Jokes Hub</h1>
    <Jokes
      punchline= "It’s hard to explain puns to kleptomaniacs because they always take things literally."
      isPun= {true}
      upvotes= {10}
      downvotes= {5}
      comment= {[{autor: "", body: "", title: ""}]}
    />
    <Jokes
      setup= 'I got my daughter a fridge for her birthday.'
      punchline= "I can't wait to see her face light up when she opens it."
      isPun= {false}
      upvotes= {8}
      downvotes= {2}
    />
    <Jokes
      setup= 'How did the hacker escape the police?'
      punchline= "He just ransomware!"
      isPun= {true}
      upvotes= {6}
      downvotes= {3}
    />
    <Jokes
      setup= "Why don't pirates travel on mountain roads?"
      punchline= "Scurvy."
      isPun= {true}
      upvotes= {7}
      downvotes= {3}
    />
    <Jokes
      setup= 'Why do bees stay in the hive in the winter?'
      punchline= "Swarm."
      isPun= {false}
      upvotes= {0}
      downvotes= {10}
    />
    <Jokes
      setup= "What's the best thing about Switzerland?"
      punchline= "I don't know, but the flag is a big plus!"
      isPun= {false}
      upvotes= {10}
      downvotes= {1}
    />
    </>
  )
}

export default App
