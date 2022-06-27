import Header from "./Components/Navbar/Header"
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import 'bootswatch/dist/darkly/bootstrap.min.css';
import ProblemPage from "./Views/ProblemPage"
function App() {
    return <div>
      <Header />
      <ProblemPage />
    </div>;
}

export default App;
