import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.scss';
import Home from './pages';
import Contact from './pages/contact';
import Layout from './components/Layout';
import Rules from './pages/Rules';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/pravidla' element={<Rules/>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
