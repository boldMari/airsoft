import styled from 'styled-components';
import { Container, Row, Col } from "react-bootstrap";
import Icon from "./Icon"

const Map = styled.iframe`
	width: 100%;
`;

const Address = () => {
	return (
		<>
			<Container>
				<Row>
					<Col>
						<h2 className="mt-3 text-primary">Kde nás najdete</h2>
			<Container>
				<Row>
					<Col>
						<h2 className="mt-3 text-primary">Kde nás najdete</h2>
						<h3 className="text-body-secondary">Nově jsme v Bohnicích</h3>
						<div className="col d-flex align-items-start">
							<Icon name="mail" title="Mail" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3 mt-3" />
							<p className="lead mt-3"> <a href="mailto:bulletfarmklecany@gmail.com">bulletfarmklecany@gmail.com</a></p>
						</div>
						<div className="d-flex align-items-start">
							<Icon name="mail" title="Mail" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3 mt-3" />
							<p className="lead mt-3"> <a href="mailto:bulletfarmklecany@gmail.com">bulletfarmklecany@gmail.com</a></p>
						</div>
						<div className="d-flex align-items-start">
							<Icon name="location" title="Location" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3 mt-3" />
							<p className="lead mt-3">Dynamitka Alfréda Nobela, V Zámcích 41, Praha 8 - Bohnice</p>
						</div>
						<div className="d-flex align-items-start">
						<div className="d-flex align-items-start">
							<Icon name="parking" title="Parking" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3 mt-3" />
							<p className="lead mt-3">Parkovat lze: U Drahaně, Praha 8. </p>
						</div>
						<h3 className="mt-3">Z parkoviště na registraci</h3>
						<Map
							src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5114.122548179629!2d14.405275098802036!3d50.141285562227466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d50.144634499999995!2d14.407100799999998!4m3!3m2!1d50.1379185!2d14.4137244!5e0!3m2!1scs!2scz!4v1700496214043!5m2!1scs!2scz"
							width="800"
							height="600"
							style={{ border: 0 }}
							title="Google Maps - Býv. Dynamitka Alfreda Nobela"
							allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></Map>
						<h3 className="mt-3">Vstup od Vltavy</h3>
						<Map
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.947455384245!2d14.39723507687279!3d50.14341480942312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bea93253a9941%3A0xdd5b454ac4f15532!2sB%C3%BDv.%20Dynamitka%20Alfreda%20Nobela!5e0!3m2!1scs!2scz!4v1698422789746!5m2!1scs!2scz"
							width="800"
							height="600"
							style={{ border: 0 }}
							title="Google Maps - Býv. Dynamitka Alfreda Nobela"
							allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></Map>
					</Col>
				</Row>
			</Container>
						<h3 className="mt-3">Z parkoviště na registraci</h3>
						<Map
							src="https://www.google.com/maps/embed?pb=!1m24!1m12!1m3!1d5114.122548179629!2d14.405275098802036!3d50.141285562227466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m9!3e2!4m3!3m2!1d50.144634499999995!2d14.407100799999998!4m3!3m2!1d50.1379185!2d14.4137244!5e0!3m2!1scs!2scz!4v1700496214043!5m2!1scs!2scz"
							width="800"
							height="600"
							style={{ border: 0 }}
							title="Google Maps - Býv. Dynamitka Alfreda Nobela"
							allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></Map>
						<h3 className="mt-3">Vstup od Vltavy</h3>
						<Map
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.947455384245!2d14.39723507687279!3d50.14341480942312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bea93253a9941%3A0xdd5b454ac4f15532!2sB%C3%BDv.%20Dynamitka%20Alfreda%20Nobela!5e0!3m2!1scs!2scz!4v1698422789746!5m2!1scs!2scz"
							width="800"
							height="600"
							style={{ border: 0 }}
							title="Google Maps - Býv. Dynamitka Alfreda Nobela"
							allowFullScreen="" loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"></Map>
					</Col>
				</Row>
			</Container>
		</>
	)
}

export default Address