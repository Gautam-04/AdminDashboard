import './Navbar.scss'

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className='logo'>
        <img src='logo.svg' alt='' />
        <span>React-Admin</span>
      </div>
      <div className='icons'>
        <img src='/search.svg' alt='' className='icon' />
        <img src='/app.svg' alt='' className='icon' />
        <img src='/expand.svg' alt='' className='icon' />
        <div className='notification'>
          <img src='/notifications.svg' alt=''/>
          <span>1</span>
        </div>
        <div className='user'>
          <img src="https://yt3.ggpht.com/C0Mo21Ed1pqlDA96LPgghHumYtM5T3d6fDAcmNOPyU4Xkh--QyhrT6FH3ijlcssreeqPTCI=s88-c-k-c0x00ffffff-no-rj" alt="" />
          <span>Gautam</span>
        </div>
        <img src="/settings.svg" alt="" className='icon'/>
      </div>
    </div>
  )
}
