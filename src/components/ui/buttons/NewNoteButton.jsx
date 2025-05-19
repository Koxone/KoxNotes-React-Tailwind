import { useNavigate } from "react-router-dom"

function NewNoteButton({ icon = '', mode = '' }) {
  const navigate = useNavigate()
  const navigationHandler = () => {
    navigate('/newnote')
  }
  return (
    <button 
    onClick={navigationHandler}
    className=' w-12 h-12 rounded-full flex justify-center items-center cursor-pointer bg-blue-500 hover:bg-blue-800 active:bg-blue-700 absolute bottom-17 right-4'>
        <img src={`src/assets/images/icon-${icon}-${mode}.svg`} alt="icon" />
    </button>
  )
}

export default NewNoteButton