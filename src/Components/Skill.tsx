import { SkillModel } from "../models";


const Skill: React.FC<SkillModel> = (skill) => {

    return(
        <div className="skill_container">
            <div className="skill_wrapper" style={{width: `${skill.proficiency}%`}}>
                <span>{skill.language_name}</span>
                <span>{skill.proficiency}</span>
            </div>
        </div>
    )
}

export default Skill;