import { NextResponse } from 'next/server';

async function fetchAll() {
    const response = await fetch('https://public-api.wippass.com/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })


    const data = await response.json();
    return data;
}

export async function GET(request) {
    const data = await fetchAll();
    return NextResponse.json(data);
}