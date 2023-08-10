
import { RouterMain } from "./router"
import { GlobalStyle } from "./styles/global"
import { ResetStyle } from "./styles/reset"
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {

  return (
    <>
      <GlobalStyle />
      <ResetStyle />
      <RouterMain />
    </>
  )
}

export default App
