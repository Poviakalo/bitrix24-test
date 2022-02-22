import classes from 'classnames';
import React  from 'react'

function Comment() {
  const [content, setContent] = React.useState(false)
  const [nameButton, setNameButton] = React.useState('Залишити коментар')
  const [text, setText] = React.useState('')
  const textareaRef = React.useRef()
  
  const textTransform = () => {    
    textareaRef.current.value = text.split(' ').reverse().join(' ')
    setText(text.split(' ').reverse().join(' '))
  }

  const showComment = () => {
    textareaRef.current.value = ''
    setText('')
    setContent(!content)    
    !content ? setNameButton('Сховати коментарі') : setNameButton('Залишити коментар')
  }
  return (
    <div className={classes('commentBlock', {'commentBlock__show': content})}>
      <div className='commentBlock__field'>

        <textarea ref={textareaRef} className={classes('filed__input')}name="comment" id="comment"
          onChange={(e) => {setText(e.target.value)}}
        ></textarea>
        <button 
          onClick={textTransform}
          className={classes('filed__btn')}
        >Надісдати коментар</button>          
      </div>

      <p className={classes('commentBlock__btn', {'commentBlock__btn-show': content})} onClick={showComment}>{nameButton}</p>
    </div>
  )
}

export default Comment