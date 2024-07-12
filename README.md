# React Hooks

## useState Hook Syntax

### const [State_Variable, Updated_State_Variable_Function] = useState(Initial_Value)

const [state, setState] = useState(0)

## useEffect Hook Syntax

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

## useReducer Hook Syntax

### const [State_Variable, Action_Dispatch] = useReducer(Reducer_Function, Initial_Value)

const [state, dispatch] = useReducer(reducer, initialValue)

- Reducer_Function function take 2 parameter: (state, action)

## useRef Hook Syntax

### const REF_NAME = useRef(Initial_Value)

- Initial_Value is Optional

## useLayoutEffect Hook Syntax

### useEffect(Callback_Function, Dependency_Array)

- useLayoutEffect -> run synchronously after the render but before the screen update. This means that the browser paint the UI after the effect runs.

- useEffect -> run asynchronously after the render is committed to the screen. This means that the browser has already painted the UI before the effect runs.
