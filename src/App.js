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

import Theme from 'assets/css/Theme';
import { ThemeProvider } from 'styled-components';

import Layout from 'components/Layout';
import FirstTime from 'components/FirstTime';

function App() {
	return (
		<AuthProvider>
			<ThemeProvider theme={Theme}>
				<Router>
					<Layout>
						<Routes>
							<Route path='/' element={<Home />} />
							<Route path='/kontakt' element={<Contact />} />
							<Route path='/pravidla' element={<Rules />} />
							<Route path='/informace' element={<FirstTime />} />
							<Route path='/cenik' element={<Pricing />} />
							<Route path='/akce' element={<Events />} />
							<Route path='/akce/vytvorit' element={<New />} />
							<Route path='/akce/:id' element={<Event />} />
							<Route path='/prihlasit' element={<Login />} />
						</Routes>
					</Layout>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
