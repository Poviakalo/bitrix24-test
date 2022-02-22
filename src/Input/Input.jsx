import React, { Fragment } from 'react'

function Input({type, nameLabel, className, values, name, step, min, onChange}) {    
  return (
    <p className={className}>
                <label htmlFor={name}>{nameLabel}</label> 
                {values && values.map((item, index) => {
                    return <Fragment>
                                <input key={`${item}_${name}`} 
                                       className={name}                                    
                                       name={name}
                                       type={type} 
                                       id={name}                                       
                                       step={step}
                                       min={min}
                                       placeholder={item}
                                       onChange={e => (type === 'radio' ? onChange(item, name) : onChange(e.target.value, name))}          
                                /> {type === 'radio' ? item : ''}
                            </Fragment>
                }) }
            </p>
  )
}

export default Input