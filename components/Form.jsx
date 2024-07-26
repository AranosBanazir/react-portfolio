
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

    const styles = {
        text:{
            color: '#E5D0CC',
            fontSize: '25px',
            textShadow: '-2px 3px black'
        },
        input:{
            backgroundColor: '#455561',
            color: '#E5D0CC',
            letterSpacing: '2px',
            fontSize: '20px'
        }

    }


    return (
    <>
      <form onSubmit={handleSubmit}>
      <div className="mb-3">
            <label htmlFor="name" className="form-label permanent-marker-regular" style={styles.text} >Name:</label>
            <input style={styles.input} type="text" className="form-control permanent-marker-regular"  placeholder="John Doe" name="name" required/>
        </div>
        <div className="mb-3">
            <label htmlFor="email" className="form-label permanent-marker-regular" style={styles.text}>Email:</label>
            <input style={styles.input} type="email" className="form-control permanent-marker-regular"  placeholder="name@example.com" name="email" required />
        </div>
        <div className="mb-3">
            <label htmlFor="message" className="form-label permanent-marker-regular" style={styles.text}>Message:</label>
            <textarea style={styles.input} className="form-control pb-5 permanent-marker-regular"  rows="3" name="message" required></textarea>
        </div>

        <button className="btn permanent-marker-regular" style={styles.input}>Submit</button>
        </form>
    </>
    )
}