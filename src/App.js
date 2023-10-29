import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import './assets/css/App.scss';
import Home from './pages';
import Contact from './pages/contact';
import Layout from './components/Layout';
import Rules from './pages/Rules';
import Pricing from './pages/Pricing';
import FirstTime from './components/FirstTime';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/contact' element={<Contact />} />
					<Route path='/pravidla' element={<Rules/>} />
					<Route path='/informace' element={<FirstTime/>} />
					<Route path='/cenik' element={<Pricing/>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
