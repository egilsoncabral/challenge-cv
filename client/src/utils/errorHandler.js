import M from 'materialize-css'

//Show the message
const _showToast = (msg) => {
    M.toast({html: msg})
}
// different Toast message depending on the error 
export const handleToasts = (error) => {
    if (error.toString().includes('401')) {
      _showToast('Invalid User/Password');
    } else if (error.toString().includes('500')) {
      _showToast('Something wrong with the server! Please try again later.');
    } else if (error.toString().includes('Network')) {
      _showToast('Server offline, try again later.');
    } else {
      _showToast('Error! Please try again.');
    }
}

