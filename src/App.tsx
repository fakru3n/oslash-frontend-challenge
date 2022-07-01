import Logo from '../public/assets/images/react-logo.svg';
export const App = () => {
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500'>
      <h1 className='text-3xl font-bold underline'>
        React Typescript Template - {process.env.NODE_ENV} {process.env.name}
      </h1>
      <img src={Logo} alt="Logo" width="100%" />
    </div>
  )
}
