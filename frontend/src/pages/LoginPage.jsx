import './LoginPage.css'

function LoginPage() {
    return (
        <div className="account-form">
            <fieldset>
                <h2>Log in</h2>
                <form name="form">
                    <div>
                        <label htmlFor="emailEntry">Email</label>
                        <input type="email" id="emailEntry" />
                    </div>
                    <div>
                        <label htmlFor="passwordEntry">Password</label>
                        <input type="password" id="passwordEntry" />
                    </div>
                    <button type="submit">
                        Log in
                    </button>
                </form>
            </fieldset>
        </div>
    )
}

export default LoginPage