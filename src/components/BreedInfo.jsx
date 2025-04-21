import { IoMdPaw } from "react-icons/io";

const BreedInfo = ({ info }) => {
    const colors = {
        violet: "#bd17b4",
        grey: "#a9a9a9",
    };

    const paws = Array(5).fill(0);

    return (
        <section className="p-6 rounded-xl space-y-4 text-gray-800 max-w-md">
            <h1 className="text-3xl font-bold text-violet-600 mb-1">{info.name}</h1>

            <div className="space-y-2 text-sm leading-relaxed">
                <p><span className="font-semibold">Origin:</span> {info.origin}</p>
                <p><span className="font-semibold">Weight:</span> {info.weight.metric} kg</p>
                <p><span className="font-semibold">Life span:</span> {info.life_span} years</p>
                <p><span className="font-semibold">Temperament:</span> {info.temperament}</p>
                <p className="mt-2 text-base"><span className="font-semibold">Description:</span> {info.description}</p>
            </div>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Dog friendly:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.energy_level) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Intelligence:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.intelligence) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Child friendly:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.child_friendly) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Energy level:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.energy_level) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Grooming:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.grooming) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Health issues:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.health_issues) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Adaptability:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.adaptability) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Affection level:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.affection_level) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Shedding level:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.shedding_level) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Social needs:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.social_needs) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Stranger friendly:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.stranger_friendly) > index ? colors.violet : colors.grey} />
                ))}
            </article>

            <article className="flex items-center gap-1">
                <h4 className="font-semibold w-40">Vocalisation:</h4>
                {paws.map((_, index) => (
                    <IoMdPaw key={index} size={20} color={(info.vocalisation) > index ? colors.violet : colors.grey} />
                ))}
            </article>
        </section>
    );
};

export default BreedInfo;
