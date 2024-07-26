import Form from "../components/Form";



export default function ContactPage({contactMessage}) {

    const styles ={
        header:{
            color: '#E5D0CC',
            textShadow: '-2px 3px black'

        }
    }




    return (
        
        <div className="mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                <h1 className="permanent-marker-regular" style={styles.header}>Contact Me</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-sm-12 offset-lg-3">
                        <Form contactMessage={contactMessage}/>
                    </div>
                </div>
            </div>
        </div>
    
    )
}