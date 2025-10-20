import React from 'react'

export const BillInput = ({value,onChange}) => {
  return (
      <div className='input-group'>
       <input 
       id='bill' 
       type="number" 
       value={value} 
       min="0" 
       step="0.01" 
       onChange={(e) => onChange(Number(e.target.value))} 
       placeholder='0.00' 
       />
      </div>
   )

}


