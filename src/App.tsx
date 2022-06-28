import Logo from '../public/assets/images/react-logo.svg'
export const App = () => {
  return (
    <>
      <h1>
        React Typescript Template - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={Logo} alt="Logo" width="100%" />
    </>
  )
}
