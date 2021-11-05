import React, {Component} from "react"

class Register extends Component {
    render() {
        return ( <main className="form-signin">
            <form>
                <h1 className="h3 mb-3 fw-normal">Please register</h1>
                <div className="form-floating">
                    <input className="form-control" placeholder="First Name" />
                    <label>First Name</label>
                </div>
                <div className="form-floating">
                    <input className="form-control" placeholder="Last Name" />
                    <label>Last Name</label>
                </div>
                <div className="form-floating">
                    <input type="email" className="form-control" placeholder="name@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password" />
                    <label>Password</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" placeholder="Password confirm" />
                    <label>Password confirm</label>
                </div>
                <button className="w-100 btn btn-lg btn-primary" type="submit">Submit</button>

            </form>
        </main>);
    };
}

export default Register;
