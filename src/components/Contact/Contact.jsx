import React from "react";
import './contact.css';


function Contact({open, setOpen}) {

    

    // const firstName = useInput("")
    // const emailInput = useInput("")

    const small = {
        color: '#f9ccac',
        fontFamily: 'Ink Free',
        fontSize: '2vh'
    }

    return (
        <>
            {open && (
                <div className="contact-container" onClick={open}>
                    <form>
                        <h1 id="title">Interested?</h1>
                        <h2 style={small}>Let's Connect</h2>
                        {/* <input
                            placeholder="Name"
                            value={firstName.value}
                            onChange={firstName.onChange}
                            className="input"
                            onKeyDown={enter}
                        />
                        <input placeholder="Email" value={emailInput.value} onChange={emailInput.onChange} className="input" /> */}



                        <button type="submit" id="button">Submit</button>
                    </form>
                </div>
            )}
        </>
    )
}

export default Contact 