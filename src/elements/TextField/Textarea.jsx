import './TextField.css'

const Textarea = ({name, id, value, onChange, count, classNameTextarea, label, classNameLabel, maxLength, placeholder}) => {
    return(
        <div className='divTextarea' style={{width:'100%'}}>
            <label className={classNameLabel} htmlFor={name}>{label}</label>
            <textarea 
                name={name} 
                id={id}
                onChange={onChange}
                className={`${classNameTextarea} form-control borderInput rounded-3`}
                value={value}
                placeholder={placeholder? placeholder : 'The best weapon against viruses is your immunity. This low-impact cardio exercise help bolster up your immune system.'}
                maxLength={maxLength}
            >
            </textarea>
            <span className='d-flex justify-content-end'>{count}</span>
        </div>
    )
}
export default Textarea


/*
-- how to use --

const [textarea, setTextarea] = useState('')
const handleTextarea = (e) => {
  setTextarea(e.target.value)
}
let textareaCount = textarea.length

<Textarea
    name='textarea'
    id='textarea'
    value={textarea}
    onChange={handleTextarea}
    count={`${textareaCount} / 200 word`}
/>
*/