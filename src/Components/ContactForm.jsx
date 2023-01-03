import { Form } from "react-bootstrap";
import { useState } from "react";

export default function ContactForm() {
    const [company, setCompany]=useState("");
    const [name, setName] = useState("'")
    const [contactMethod, setContactMethod] = useState("'")
    const [note, setNote] = useState("'")

    return (
        <div>
            <Form>
                <div>
                    <label>Name</label>
                    <input 
                    type="text"
                    value={name}
                    id="name">{setName}</input>
                </div>
                <div>
                    <label>Company</label>
                    <input 
                    minwidth={"50vw"}
                    type="text"
                    value={company}
                    id="company">{setCompany}</input>
                    </div>
                <div>
                    <label>Contact Method</label>
                    <input 
                    minwidth={"50vw"}
                    type="checkbox"
                    value={contactMethod}
                    id="company">{setContactMethod}</input>
                </div>
                <div>
                    <label>Message:</label>
                    <input 
                    minwidth={"50vw"}
                    type="text"
                    value={note}
                    id="company">{setNote}</input>
                </div>
            </Form>

        </div>
    )
}