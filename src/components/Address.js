import "./Address.css"
import Icon from "./Icon"

const Address = () => {
    return (
        <>
        <div className="container">
            <div className="row featurette">
                <div className="col-md-7">
                <h2 className="featurette-heading fw-normal lh-1 mt-3"><span class="text-primary">Kde nás najdete.</span> <span
                    className="text-body-secondary">Nově jsmě v Bohnicích </span></h2>
                    <div className="col d-flex align-items-start">
                        <Icon name="location" title="Mail" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3 mt-3" />
                        <p className="lead mt-3">Dynamitka Alfréda Nobela, V Zámcích 41, Praha 8 - Bohnice</p>
                     </div>
                    
                    <div className="col d-flex align-items-start"> 
                    <Icon name="mail" title="Mail" size='1.5em' className="bi text-body-secondary flex-shrink-0 me-3 mt-3" />
                    <p className="lead  mt-3"> <a href="mailto:bulletfarmklecany@gmail.com">bulletfarmklecany@gmail.com</a></p>
                    </div>   
                </div>
            </div>
        </div>
        <div className="container maps">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2556.947455384287!2d14.397235077530299!3d50.14341480942233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470bea93253a9941%3A0xdd5b454ac4f15532!2sB%C3%BDv.%20Dynamitka%20Alfreda%20Nobela!5e0!3m2!1ssk!2scz!4v1690625288700!5m2!1ssk!2scz"
                width="800" 
                height="600" 
                style={{ border: 0 }}  
                title="Google Maps - Býv. Dynamitka Alfreda Nobela"
                allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        </>
    )
}

export default Address