import { authLogo } from "../../../images/index";


const LogIn = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-7 col-xs-12">
            <div className="register__logo">
              <div className="img__logo">
                <img src={authLogo} alt="" />
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-5 col-xs-12">
            <div className="authForm">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="title__form">
                  <h2>
                    <FormattedMessage
                      id="login.Welcome back"
                      defaultMessage="Welcome back"
                    />
                  </h2>
                  <p>
                    <FormattedMessage
                      id="login.breif"
                      defaultMessage="First create your free account then start shopping."
                    />
                  </p>
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FormattedMessage id="login.Email" defaultMessage="Email" />
                  </label>
                  <input
                    // onChange={handelChange}
                    // value={email}
                    ref={register({
                      required: "Enter your e-mail",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                        message: "Enter a valid e-mail address",
                      },
                    })}
                    name="email"
                    type="email"
                  />
                  {errors.email && (
                    <p className="error">{errors.email.message}</p>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="password">
                    <FormattedMessage
                      id="login.Password"
                      defaultMessage="Password"
                    />
                  </label>
                  <input
                    ref={register({
                      required: "You must specify a password",
                      minLength: {
                        value: 6,
                        message: "Password must have at least 6 characters",
                      },
                    })}
                    // onChange={handelChange}
                    // value={password}
                    name="password"
                    type="password"
                  />
                  {errors.password && (
                    <p className="error">{errors.password.message}</p>
                  )}
                </div>
                <div className="btn__submit">
                  <button type="submit">
                    <FormattedMessage id="login.Login" defaultMessage="Login" />
                  </button>
                </div>
                <div className="label_forget_pass">
                  <a href="#">
                    <FormattedMessage
                      id="login.Forget password"
                      defaultMessage="Forget password"
                    />
                  </a>
                </div>
                <div className="label">
                  <FormattedMessage
                    id="login.if you already have an account"
                    defaultMessage="if you already have an account?"
                  />
                  <Link to="/register">
                    <FormattedMessage
                      id="login.register here"
                      defaultMessage="register here"
                    />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
