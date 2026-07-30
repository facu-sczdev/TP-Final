import { useSearchParams } from "react-router";
import '../styles/SearchBar.css';

export default function SearchBar() {
    const [searchParams, setSearchParams] = useSearchParams();

    const searchQuery = searchParams.get('search') || '';

    const handleSearchChange = (e) => {
        const text = e.target.value;

        if (text.trim() !== '') {
            setSearchParams({ search: text });
        } else {
            setSearchParams({});
        }
    };

    return (
        <div className='searchbar-wrapper'>
            <input
                className='searchbar-input'
                type='text'
                placeholder='Buscar o empezar un nuevo chat...'
                value={searchQuery}
                onChange={handleSearchChange}
            />
        </div>
    );
}