
import ContactInfo from "./contactInfo";
import EducationInfo from "./eduExp";
import WorkExperience from "./workExp";
import SkillsInfo from "./skills";

export default function CVForms( {Data, setData} ) {
    return (
        <>
            <ContactInfo  Data={Data} setData={setData} />
            <p></p>
            <EducationInfo Data={Data} setData={setData} />
            <p></p>
            <WorkExperience Data={Data} setData={setData} />
            <p></p>
            <SkillsInfo Data={Data} setData={setData} />
        </>
    )
}