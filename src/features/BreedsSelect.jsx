import React, { useEffect, useState } from 'react';
import { getBreeds, getCatsImagesByBreed } from './breedsAPI';
import CatImage from '../components/CatImage';
import BreedInfo from '../components/BreedInfo';


const BreedsSelect = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);

    const [breedInfo, setBreedInfo] = useState(null);


    useEffect(() => {
        const loadBreeds = async () => {
            try {
                const data = await getBreeds();
                setBreeds(data);
            } catch (error) {
                console.error('Download error:', error);
            }
        };

        loadBreeds();
    }, []);


    useEffect(() => {
        if (!selectedBreed) return;

        const loadImages = async () => {
            setLoading(true);
            try {
                const data = await getCatsImagesByBreed(selectedBreed, 1);
                setImages(data);
            } catch (error) {
                console.error('Download error:', error);
            } finally {
                setLoading(false);
            }
        };

        loadImages();


        const selected = breeds.find((breed) => breed.id === selectedBreed);
        setBreedInfo(selected);

    }, [breeds, selectedBreed]);


    return (
        <div className='grid grid-cols-3 gap-8'>


            <ul className=''>
                {breeds.map((breed) => (
                    <li key={breed.id}>
                        <button className='bg-blue-200 w-60 text-left p-2' onClick={() => setSelectedBreed(breed.id)} >
                            {breed.name}
                        </button>
                    </li>
                ))}
            </ul>





            {loading && <p>Loading...</p>}

            <div className=''>
                {images.map((img) => (
                    <CatImage key={img.id} src={img.url} />
                ))}
            </div>

            {breedInfo && <BreedInfo info={breedInfo} />}


        </div>
    );
};

export default BreedsSelect;

