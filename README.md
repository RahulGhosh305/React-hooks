# React Hooks

## useState Hook Syntax

### const [State_Variable, Updated_State_Variable_Function] = useState(Initial_Value)

const [state, setState] = useState(0)

## useState Hook Syntax

### useEffect(Callback_Function, Dependency_Array)

- No dependency passes -> Run on every render
  useEffect(()=> {})

- An empty array -> Run only first render
  useEffect(()=> {},[])

- Props or Stata value -> Run First render and Render with every state or props changes
  useEffect(()=>{}, [])

## Context API Hook Syntax

### const NAME = createContext(InitialValue)

export const CONTEXT_NAME = createContext({})

- This have 2 part (Provider = which is pass value), (Consumer -> useContext Hook = which is get value)
