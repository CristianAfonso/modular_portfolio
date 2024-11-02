import {CareerElementModel} from '../models';

const CareerElement: React.FC<CareerElementModel> = (career) => {

    return (
        <div className='carreer_element'>
            <h4>{career.title}</h4>
            <h5>{career.start_date}-{career.end_date}</h5>
            {career.role && <h6>{career.role}</h6>}
            <p>{career.description}</p>
        </div>
    )
}
export default CareerElement;