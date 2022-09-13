interface ButtonProps{
  title: string;
}

function Button(props: ButtonProps){
  return (
    <button>
      {props.title} 
    </button>
  )
}

function App() {
    //return <h1>Hello World</h1>
    return (
    <div>
    <Button title="send 1"/> 
    <Button title="send 2"/> 
    <Button title="aqui é o 3"/> 
    </div>
    )
}

export default App
