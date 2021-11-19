import './Contact.css'

export default function Contact() {
    const handleSubmit = (e) => {

    }
    return (
        <div className='contact' id='contact'>
            <div className="left">
                <img src="assets/shake.svg" alt="" />
            </div>
            <div className="right">
                <h2>Contact.</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Email'/>
                    <textarea placeholder='Message'></textarea>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </div>
    )
}
