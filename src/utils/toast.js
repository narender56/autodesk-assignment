import { toast } from 'react-toastify'

const defalutOptions = {
  autoClose: 3000,
  type: toast.TYPE.SUCCESS, // success
  position: 'top-center',
  closeButton: true,
  hideProgressBar: true,
  className: 'br5 maxh10 bg-light-blue'
}

const openToast = (message, options) => {
  options = { ...defalutOptions, ...options }
  toast(message, options)
}

export default openToast
