import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import 'assets/css/App.scss';
import Home from 'pages';
import Event from 'pages/event/details';
import New from 'pages/event/new';
import Contact from 'pages/contact';
import Rules from 'pages/rules';
import Pricing from 'pages/pricing';
import Events from 'pages/events';

// import { Events, Layout, FirstTime } from 'components';
import Layout from 'components/Layout';
import FirstTime from 'components/FirstTime';

function App() {
	return (
		<Router>
			<Layout>
				<Routes>
					<Route path='/' element={<Home />} />
					<Route path='/kontakt' element={<Contact />} />
					<Route path='/pravidla' element={<Rules/>} />
					<Route path='/informace' element={<FirstTime/>} />
					<Route path='/cenik' element={<Pricing/>} />
					<Route path='/udalosti' element={<Events/>} />
					<Route path='/udalosti/vytvorit' element={<New/>} />
					<Route path='/udalosti/:id' element={<Event/>} />
				</Routes>
			</Layout>
		</Router>
	);
}

export default App;
