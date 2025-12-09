import { useState, useEffect } from 'react';
// Importamos el JSON directamente
import productsData from '../data/products.json';

// Este hook simula una petición API
export const useFetch = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Simulamos un retraso de 1 segundo XD
        const getData = new Promise((resolve, reject) => {
            setTimeout(() => {             
                resolve(productsData);
            }, 1000);
        });

        getData
            .then((response) => {
                setData(response);
                setLoading(false);
            })
            .catch((err) => {
                setError(err);
                setLoading(false);
            });
    }, []); 
    // Retornamos valores 
    return { data, loading, error };
};