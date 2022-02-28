import { NextPage } from "next"

const Login: NextPage = () => {
    return (
        <>
        <div className="container login-container">
            <button type="button" className="btn btn-primary">42 API로 로그인하기</button>
            <p>OR</p>
            <div className="form-group">
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label htmlFor="floatingInput">Email address</label>
                </div>
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
            </div>
        </div>
        <style jsx>{`
            .login-container {
                text-align: center;
                align-items: center;
                max-width: 800px;
            }
            .form-group {
                display: table;
                margin: auto;
            }
            .form-floating {
                align-items: center;
            }
        `}</style>
        </>
    )
}

export default Login