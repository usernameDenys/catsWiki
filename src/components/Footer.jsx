import React from 'react';

const Footer = () => {
    return (
        <footer className="w-full mt-10 py-4 border-t text-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Cat Wiki. Created by Denys Holenko.</p>
            <p>Cat breed information and images provided by <a href="https://thecatapi.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">TheCatAPI</a>.</p>
        </footer>
    );
};

export default Footer;
