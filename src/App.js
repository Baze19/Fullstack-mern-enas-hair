
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Appnavbar from './components/Appnavbar'
import Hair from './components/Hair'
import { Provider } from 'react-redux'
import ItemModal from '../src/components/itemModal'
import store from './store'
import Header from '../src/components/Header'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Images from '../src/components/Images'
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/"
            render={props => (
              <>
                <Appnavbar />
                <ItemModal />
                <Hair />
              </>
            )} />



          <Route path="/images" component={Images} />


        </div>
      </Router>
    </Provider>
  );
}

export default App;
