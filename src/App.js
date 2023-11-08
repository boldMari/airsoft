import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import 'assets/css/App.scss';
import Home from 'pages';
import Event from 'pages/event/details';
import New from 'pages/event/new';
import Contact from 'pages/contact';
import Rules from 'pages/rules';
import Pricing from 'pages/pricing';
import Events from 'pages/events';
import Login from 'pages/login';

import Layout from 'components/Layout';
import FirstTime from 'components/FirstTime';

function App() {
	return (
		<AuthProvider>
			<Router>
				<Layout>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/kontakt' element={<Contact />} />
						<Route path='/pravidla' element={<Rules />} />
						<Route path='/informace' element={<FirstTime />} />
						<Route path='/cenik' element={<Pricing />} />
						<Route path='/udalosti' element={<Events />} />
						<Route path='/udalosti/vytvorit' element={<New />} />
						<Route path='/udalosti/:id' element={<Event />} />
						<Route path='/prihlasit' element={<Login />} />
					</Routes>
				</Layout>
			</Router>
		</AuthProvider>
	);
}

export default App;
