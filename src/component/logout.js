import React from 'react'

function logout() {
  return (
    <div>
         <div className="w-100 text-center mt-2">
        <Button varaint="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </div>
  )
}

export default logout