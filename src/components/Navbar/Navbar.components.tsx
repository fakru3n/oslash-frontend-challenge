const NavbarComponents = () => {
  return (
    <>
      <nav className='bg-navCol-700 px-4 py-2'>
        <div className='text-white item-center flex justify-between'>
          <div>
            <h3 className='text-xl font-bold'>Movie Ticket Booking</h3>
          </div>
          <div className='items-center my-5'>
            <button className='bg-buttonCol-400 text-white text-sm rounded px-2 py-1'>
              Sign in
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavbarComponents;
