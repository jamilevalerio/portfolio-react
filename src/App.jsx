import MainContent from "./components/MainContent"
import Sidebar from "./components/Sidebar"
import './styles/app.scss'

function App() {
  return (
    <div className="App fullpage">
     <h1 className="page-title">Jamile Valério</h1>
     <Sidebar />
     <MainContent />
    </div>
  )
}

export default App
