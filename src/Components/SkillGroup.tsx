import { SkillGroupModel } from "../models";
import Skill from "./Skill";


const SkillGroup: React.FC<SkillGroupModel> = ({title, skills}) => {

    return(
        <div className="skill_group">
            <h4>{title}</h4>
            { skills.map((element, index) => (
                <Skill key={index} {...element}/>
            ))}
        </div>
    );
}

export default SkillGroup;