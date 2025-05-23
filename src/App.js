import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from 'hooks/useAuth';
import 'assets/css/App.scss';
import Home from 'pages';
import Event from 'pages/event/details';
import New from 'pages/event/new';
import Edit from 'pages/event/edit';
import Contact from 'pages/contact';
import Rules from 'pages/rules';
import Pricing from 'pages/pricing';
import Error from 'pages/error';
import Events from 'pages/events';
import Login from 'pages/login';
import Register from 'pages/user/register';
import Dashboard from 'pages/user/dashboard';
import PassChange from 'pages/user/passChange';
import PassReset from 'pages/user/passReset';
import ProfileChange from 'pages/user/profileChange';

import Theme from 'assets/css/Theme';
import { ThemeProvider } from 'styled-components';
import PrivateRoute from 'components/PrivateRoute';

import Layout from 'components/Layout';
import FirstTime from 'components/FirstTime';
import About from 'components/About';

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
							<Route path='/onas' element={<About />} />
							<Route path='/cenik' element={<Pricing />} />
							<Route path='/akce' element={<Events />} />
							<Route element={<PrivateRoute />}>
								<Route path='/ucet' element={<Dashboard />} />
								<Route path='/ucet/profil/upravit' element={<ProfileChange />} />
								<Route path='/akce/vytvorit' element={<New />} />
								<Route path='/akce/upravit/:id' element={<Edit />} />
							</Route>)
							<Route path='/akce/:id' element={<Event />} />
							<Route path='/prihlasit' element={<Login />} />
							<Route path='/registrace' element={<Register />} />
							<Route path='/reset' element={<PassReset />} />
							<Route path='/ucet/heslo' element={<PassChange />} />
							<Route path='*' element={<Error/>} />
						</Routes>
					</Layout>
				</Router>
			</ThemeProvider>
		</AuthProvider>
	);
}

export default App;
