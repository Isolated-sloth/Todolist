import React, {useState, useEffect, useRef} from 'react'

function TodoForm(props) {
  const [input , setinput] = useState(props.edit ? props.edit.value : '')

  const focus = useRef(null)

  useEffect(() => {
    focus.current.focus()
  })

  const handleChange = e =>{
    setinput(e.target.value)
  }

  const handleSubmit = e =>{
    e.preventDefault ();

    props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input
    });

  };
    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            {props.edit ? (
                <>
            <input type= "text"
            placeholder = 'تغییراتت رو اعمال کن'
            value={input}
            name='text'
            className='todo-input edit'
            onChange={handleChange}
            ref={focus}
            />
            <button className='todo-button edit'>ذخیره</button>
            </>
            ):
            (
            <>
            <input type= "text"
            placeholder = 'اضافه کردن کار'
            value={input}
            name='text'
            className='todo-input'
            onChange={handleChange}
            ref={focus}
            />
            <button className='todo-button'>اضافه کن</button>
            </>
        
            )
            }
        </form>
  );
}

export default TodoForm

