import Form from "../components/Form";



export default function ContactPage({contactMessage}) {


    return (
        
        <div className="mt-5">
            <div className="d-flex flex-wrap justify-content-center">
                <h1>Contact Me</h1>
            </div>
            <div className="container d-flex flex-row w-75 justify-content-center">
                <Form contactMessage={contactMessage}/>
            </div>
        </div>
    
    )
}