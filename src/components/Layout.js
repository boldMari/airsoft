import MyNavbar from './Navbar';
import Footer from './Footer';

const Layout = ({children}) => {

	return (
		<>
			<MyNavbar />
			<main>
				{children}
			</main>
			<Footer/>
		</>
	);
}

export default Layout;