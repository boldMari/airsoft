import camo from "../assets/images/camo.jpg"

const Error = () => {
    const textStyle = {
        position: 'absolute',
        top: '20%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: '#fff',
        background: 'rgba(0,0,0,0.5)',
        padding: '20px 30px',
        textAlign: 'center',
      };

  return (
    <div className="container">
        <div className="position-relative p-3 p-md-5 m-md-3 bg-body-tertiary">
            <h2 style={textStyle}>Stránka nenalezena: <br /> ztratila se na airsoftovém  hřišti.</h2>
            <img src={camo} alt="" className="featurette-image img-fluid mx-auto" width="2000" height="500"  />
        </div>
      
    </div>
  )
}

export default Error