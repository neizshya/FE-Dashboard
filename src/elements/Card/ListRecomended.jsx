import TagText from "../Tag/TagText"
import './Card.css'
import deleteSvg from '../../assets/icons/delete.svg'
const ListRecomended = ({img, text, date, btn, textTag, onDelete}) => {

    return(
        <div className="d-flex justify-content-between p-2">
            <div className="d-flex flex-row gap-3">
                <img src={img} style={{borderRadius:'15%'}} width={'60px'} alt="" />
                <div>
                    <p className="mb-1 fw-bolder">{text}</p>
                    {
                        date? 
                        <p>{date}</p> 
                        : 
                        <TagText
                            text={textTag}
                        />
                    }
                </div>
            </div>
            {
                btn ?
                <button>{btn}</button>
                :
                <button 
                    className="btnHover border-0"
                    onClick={onDelete}
                >
                    <img src={deleteSvg} width={'20px'} alt="" />
                </button>
            }
        </div>
    )
}

export default ListRecomended