import {CareerElementModel} from '../models';

const CareerElement: React.FC<CareerElementModel> = (career) => {

    return (
        <div>
            <h4>{career.title}</h4>
            <h4>{career.start_date}-{career.end_date}</h4>
            {career.role && <h5>{career.role}</h5>}
            <p>{career.description}</p>
        </div>
    )
}
export default CareerElement;