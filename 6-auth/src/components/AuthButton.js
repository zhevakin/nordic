import { useAuth0 } from '@auth0/auth0-react'

function AuthButton() {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0()
  return (
    <>
      {!isAuthenticated && (
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => loginWithRedirect()}
        >
          Войти
        </button>
      )}
      {isAuthenticated && (
        <div>
          <span className="me-2">{user.name}</span>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => logout()}
          >
            Выйти
          </button>
        </div>
      )}
    </>
  )
}

export default AuthButton
