import {TagModel} from '../../../models';
import styles from './Tag.module.css';


const Tag: React.FC<TagModel> = ({title, content}) => {
    const tagColors= {
        "date": "blue",
        "category": "pink",
        "language": "green",
        "engine": "orange"
    };
    const backgroundColor = tagColors[title as keyof typeof tagColors] || "gray";

    return(
        <p className={styles.tag}>
            {title}
            <span className={styles.tag_content} 
                  style={{backgroundColor: backgroundColor}}>
                {content}
            </span>
        </p>
    );
}

export default Tag;