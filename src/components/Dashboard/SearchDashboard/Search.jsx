import { IconSearch } from '@tabler/icons-react';
import './Search.css'

export default function Search(){
    return(
        <div className="search-container">
            <IconSearch stroke={2} size={20}/>
            <input type="text" placeholder='Search' className='search-input'/>
        </div>
    );
}