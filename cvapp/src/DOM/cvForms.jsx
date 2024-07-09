
import ContactInfo from "./contactInfo";
import EducationInfo from "./eduExp";
import WorkExperience from "./workExp";

export default function CVForms( {Data, setData} ) {
    return (
        <>
            <ContactInfo  Data={Data} setData={setData} />
            <p></p>
            <EducationInfo Data={Data} setData={setData} />
            <p></p>
            <WorkExperience Data={Data} setData={setData} />
        </>
    )
}