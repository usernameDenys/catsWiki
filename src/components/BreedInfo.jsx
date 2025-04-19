import { IoMdPaw } from "react-icons/io";
const BreedInfo = ({ info }) => {

    const colors = {
        violet: "#bd17b4",
        grey: "a9a9a9"
    }

    const paws = Array(5).fill(0)

    return <section>
        <h2>Name: {info.name}</h2>
        <div>
            <p>Origin: {info.origin}</p>
            <p>Weight: {info.weight.metric} kg.</p>
            <p>Life span: {info.life_span} years.</p>
            <p>Temperament: {info.temperament}</p>
            <p>Description: {info.description}</p>
        </div>

        <article className="flex">
            <h4>Dog friendly :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.energy_level) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Intelligence :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.intelligence) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Child friendly :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.child_friendly) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Energy level :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.energy_level) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Grooming :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.grooming) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Health issues :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.health_issues) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Adaptability :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.adaptability) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Affection level :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.affection_level) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Shadding level :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.shedding_level) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Social needs :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.social_needs) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Stranger friendly :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.stranger_friendly) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>

        <article className="flex">
            <h4>Vocalisation :</h4>
            {paws.map((_, index) => {
                return (
                    <IoMdPaw key={index} size={24} color={(info.vocalisation) > index ? colors.violet : colors.grey} />
                )
            })}
        </article>
    </section>
};

export default BreedInfo;