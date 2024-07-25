
export default function Form({contactMessage}){

    const handleSubmit = (e) =>{
        e.preventDefault()
        const {name, email, message} = e.target.elements
        const msg = {
            name: name.value, 
            email: email.value, 
            msg: message.value}
        
        e.target.elements.name.value = ''
        e.target.elements.email.value = ''
        e.target.elements.message.value = ''
        contactMessage(msg)
    }

    return (
    <>
      <form className="w-50" onSubmit={handleSubmit}>
      <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Name:</label>
            <input type="text" className="form-control"  placeholder="John Doe" name="name" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">Email:</label>
            <input type="email" className="form-control"  placeholder="name@example.com" name="email" required />
        </div>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">Message:</label>
            <textarea className="form-control pb-5"  rows="3" name="message" required></textarea>
        </div>

        <button className="btn btn-success">Submit</button>
        </form>
    </>
    )
}