import React from 'react'

const WorkCompo = (props) => {
  return (
    <div>
      <div className='flex  flex-col justify-evenly'>
            <div>
              <img src={props.images} alt="" className="h-[114px] w-[159px]" />
            </div>
            <div className='w-[393px]'>
            <div className="text-[#091E42] font-[600] text-[20px] mt-10 mb-2">{props.h1} <br />{props.h2}</div>
            <div className='text-[18px]'>
              {props.text}
            </div>
            </div>
          </div>
    </div>
  )
}

export default WorkCompo
