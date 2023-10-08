import { FormEvent, useState } from "react";
import "./CrateQr.css";


export function CrateQr() {
    const [state, setState] = useState("123");
    const [result1, setresult1] = useState("");
    const [details, setdetails] = useState("");
    const [showdetails, setshowdetails] = useState(false);
    const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
        setresult1(state)
        event.preventDefault()
        setdetails(new Date().toString() + "   " + state)
    }
    return (
        <div className="CrateQr">
            <form action="" onSubmit={handleSubmit}>
                <label>
                    <input
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        type="text" placeholder="enter url" />
                    <button data-testid="1" >Click me</button>
                </label>
            </form>
            {result1 ? <img src={"https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + result1} alt="qr code" /> : null}
            <div>
                <button data-testid="2" onClick={() =>
                    showdetails ? setshowdetails(false) : setshowdetails(true)
                }
                >more details</button>
            </div>
            <div>
                {showdetails ? <div>{details}</div> : null}
            </div>
        </div>
    );
}


