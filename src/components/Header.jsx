import { LiaCatSolid } from "react-icons/lia";
const Header = () => {
    return (
        <div className='flex items-end justify-center h-20 mb-10'>
            <a href="/"><LiaCatSolid size={64} /></a>
            <a href="/" className='text-4xl text-center font-[Poppins]'>CatWiki</a>
        </div>
    )
}

export default Header;