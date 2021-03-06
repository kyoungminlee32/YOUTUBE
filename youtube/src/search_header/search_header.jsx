import styles from './search_header.module.css';
import React, { useRef } from 'react';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () => {
        const value = inputRef.current.value;
        //console.log(value);
        onSearch(value);
    }
    const onClick = () => {
        handleSearch();
    }
    const onChange = (event) => {
        if(event.key === 'Enter') {
            handleSearch();
            console.log('enter');
        }
    }
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt="logo" />
                <h1 className={styles.title}>Youtube</h1>
            </div>
            <input 
                ref={inputRef} 
                className={styles.input} 
                type="search" 
                placeholder="Search..." 
                onKeyDown={onChange}
            />
            <button className={styles.button} type="submit" onClick={onClick}>
                <img src="/images/search.png" alt="search" />
            </button>
        </header>
       
    )
};

export default SearchHeader;