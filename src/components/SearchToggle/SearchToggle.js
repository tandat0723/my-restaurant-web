'use client'
import "./SearchToggle.css";
import data from "../../data/data.json"
import React, { useState, useEffect } from "react";

export default function SearchToggle() {
    const [query, setQuery] = useState('');
    const [result, setResult] = useState([]);

    useEffect(() => {
        if (query.trim() === '') {
            setResult([]);
            return;
        }

        const matches = data.filter(item =>
            item.A.toLowerCase().includes(query.toLowerCase())
        ).slice(0,5);
        setResult(matches);
    }, [query]);



    return (
        <div className="w-2xl mx-auto my-4 relative">
            <div className="search-input-container">
                <input
                    type="text"
                    placeholder="Dán câu hỏi vào đây"
                    className="search-input"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    autoFocus
                />
                {result.length > 0 && (
                    <div className="floating-answer-box">
                        {result.map((item, index) => (
                            <div key={index} className="answer-line">
                                {item.B}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}