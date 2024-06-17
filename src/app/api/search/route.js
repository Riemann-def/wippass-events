import { NextResponse } from 'next/server';

async function fetchAll() {
    const response = await fetch('http://3.88.227.166/info', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Cache-Control': 'no-store' // Asegura que la respuesta no se almacene en caché
        },
    })

    const data = await response.json();
    return data;
}

export async function GET(request) {
    const data = await fetchAll();
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('query');

    const filterData = (data) => {
        const filtered = {};

        Object.keys(data).forEach((key) => {
            const filteredItems = data[key].filter((item) =>
                item.nombre.toLowerCase().includes(query) ||
                item.descripcion?.toLowerCase().includes(query) ||
                (item.fecha && item.fecha.toLowerCase().includes(query))
            );

            if (filteredItems.length > 0) {
                filtered[key] = filteredItems;
            }
        });

        return filtered;
    }

    const filteredData = filterData(data);

    return NextResponse.json(filteredData);

}