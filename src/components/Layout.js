import MyNavbar from './Navbar';

const Layout = ({children}) => {

	return (
		<>
			<MyNavbar />
			<main>
				{children}
			</main>
		</>
	);
}

export default Layout;