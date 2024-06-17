import { NextResponse } from 'next/server';

async function fetchAll() {
    const response = await fetch('http://3.88.227.166/info', {
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