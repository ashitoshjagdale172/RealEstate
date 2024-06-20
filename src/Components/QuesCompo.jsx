import React from 'react'

const QuesCompo = (props) => {
  return (
    <div>
      <div className='flex flex-col  text-left w-[100%] h-auto pr-[10%] pl-4 py-[1%] border-[1px] border-[#D8D8D8] shadow-[-5px_5px_7px_-1px_#000000] gap-5'>
        <div className='text-[#D8232A] text-[16px] '>{props.ques}</div>
        <div className='text-[#606060] text-[14px]'>{props.ans}</div>
      </div>
    </div>
  )
}

export default QuesCompo
