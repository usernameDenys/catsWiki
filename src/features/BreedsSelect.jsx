import React, { useEffect, useState } from 'react';
import { getBreeds, getCatsImagesByBreed } from './breedsAPI';
import CatImage from '../components/CatImage';


const BreedsSelect = () => {
    const [breeds, setBreeds] = useState([]);
    const [selectedBreed, setSelectedBreed] = useState('');
    const [images, setImages] = useState([]);
    const [loading, setLoading] = useState(false);


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
                const data = await getCatsImagesByBreed(selectedBreed, 20);
                setImages(data);
            } catch (error) {
                console.error('Download error:', error);
            } finally {
                setLoading(false);
            }
        };

        loadImages();
    }, [selectedBreed]);

    return (
        <div className='grid grid-cols-4 grid-rows-3 gap-1'>




            <ul className='row-span-3'>
                {breeds.map((breed) => (
                    <li key={breed.id}>
                        <button className='bg-blue-200 w-60 text-left p-2' onClick={() => setSelectedBreed(breed.id)} >
                            {breed.name}
                        </button>

                    </li>
                ))}
            </ul>

            {loading && <p>Завантаження фото...</p>}

            <div className='col-span-3 row-span-3'>
                {images.map((img) => (
                    <CatImage key={img.id} src={img.url} />
                ))}
            </div>
        </div>
    );
};

export default BreedsSelect;

