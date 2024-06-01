// MyFitnessPalData.js
import React, { useState, useEffect } from 'react';

const ApiCall = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://myfitnesspal2.p.rapidapi.com/searchByKeyword?keyword=oreo', {
                    method: 'GET',
                    headers: {
                        'X-RapidAPI-Key': '24d93d1ab7msh18f9c1d4ee557fdp102a87jsn74023306f75b',
                        'X-RapidAPI-Host': 'myfitnesspal2.p.rapidapi.com'
                    }
                });

                if (response.status === 429) {
                    // If rate limit exceeded, wait for some time and retry
                    await new Promise(resolve => setTimeout(resolve, 5000)); // Wait for 5 seconds
                    fetchData(); // Retry the request
                    return;
                }

                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const result = await response.json();
                setData(result);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">My Fitness Pal Data</h1>
            <ul>
                {data.map((item, index) => (
                    <li key={index} className="border border-gray-300 p-2 mb-2">
                        <div>Name: {item.name}</div>
                        <div>Calories: {item.calories}</div>
                        <div>Protein: {item.protein}</div>
                        {/* Add other fields as needed */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiCall;
