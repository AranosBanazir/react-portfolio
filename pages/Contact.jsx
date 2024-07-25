import Form from "../components/Form";



export default function ContactPage({contactMessage}) {


    return (
        
        <div className="mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                <h1>Contact Me</h1>
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