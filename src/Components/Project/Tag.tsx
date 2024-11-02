import {TagModel} from '../../models';
import {tagColors} from '../../globalVariables';

const Tag: React.FC<TagModel> = ({title, content}) => {
    const backgroundColor = tagColors[title as keyof typeof tagColors] || "gray";

    return(
        <div className='tag'>
            <span className='tag_title'>{title}</span>
            <span className='tag_content' 
                  style={{backgroundColor: backgroundColor}}>
                {content}
            </span>
        </div>
    );
}

export default Tag;