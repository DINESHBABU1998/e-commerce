import React from 'react'

function Profile() {
  return (
    <div>
      <form>
        <label className='sign'>SIGN IN / LOGIN IN</label>
        <input type='text' placeholder='name'/><br/><br/>
        <input type='email' placeholder='email'/><br/><br/>
        <input type='password' placeholder='password'/><br/><br/>
        <input type='number' placeholder='number'/><br/><br/>
        <input type='submit' value='Buy Now'/>
      </form>
    </div>
  )
}

export default Profile
