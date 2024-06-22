import React from 'react'
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
// import './prize.css' // Keep this if you still need the @font-face definition

function Prize({ pos, img, amt }) {
  return (
    <div className="border-2 border-whitesmoke rounded-lg h-96 w-80 text-white bg-gray-400 bg-opacity-30 font-bold mb-20 transition-transform duration-200 ease-in-out hover:scale-110">
      <div className="text-blanchedalmond pt-5 text-4xl">
        <h1>{pos}</h1>
      </div>
      <div className="pb-2">
        <img src={img} alt="" className="h-52" />
      </div>
      <h3 className="pb-2">Cash Prize:</h3>
      <div className="flex items-center justify-center pb-2">
        <h3 className="flex items-center"><CurrencyRupeeIcon />{amt}</h3>
      </div>
    </div>
  )
}

export default Prize;
