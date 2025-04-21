import React, { useEffect, useState } from 'react';
import { getBreeds, getCatsImagesByBreed } from './breedsAPI';
import CatImage from '../components/CatImage';
import BreedInfo from '../components/BreedInfo';


const BreedsSelect = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [images, setImages] = useState([]);


    const [breedInfo, setBreedInfo] = useState(null);

    useEffect(() => {
        const loadBreeds = async () => {
            try {
                const data = await getBreeds();
                setBreeds(data);

                if (data.length > 0) {
                    setSelectedBreed(data[0].id);
                }
            } catch (error) {
                console.error('Download error:', error);
            }
        };

        loadBreeds();
    }, []);

    useEffect(() => {
        if (!selectedBreed) return;

        const loadImages = async () => {

            try {
                const data = await getCatsImagesByBreed(selectedBreed, 20);
                setImages(data);
            } catch (error) {
                console.error('Download error:', error);
            }
        };
        loadImages();

        const selected = breeds.find((breed) => breed.id === selectedBreed);
        setBreedInfo(selected);

    }, [breeds, selectedBreed]);


    return (
        <div className='flex flex-row gap-5 font-[Poppins]'>
            <ul className='basis-1/4 max-h-[100vh] overflow-y-auto pr-2 bg-violet-50 rounded-xl p-3 shadow-sm sticky top-0'>
                {breeds.map((breed) => (
                    <li key={breed.id}>
                        <button className='w-full text-left px-2 py-1 hover:bg-violet-100 rounded-lg transition-colors duration-200' onClick={() => setSelectedBreed(breed.id)} >
                            {breed.name}
                        </button>
                    </li>
                ))}
            </ul>

            <div className='basis-2/4'>
                {images.map((img) => (
                    <CatImage key={img.id} src={img.url} />
                ))}
            </div>

            <div className='basis-1/4 max-h-[100vh] overflow-y-auto pr-2 bg-violet-50 rounded-xl p-3 shadow-sm sticky top-0'> {breedInfo && <BreedInfo info={breedInfo} />}</div>

        </div>
    );
};

export default BreedsSelect;

