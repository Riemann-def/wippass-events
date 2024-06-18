'use client'
import { useState, useEffect } from 'react'
import EventosDiscotecas from '../components/EventosDiscotecas'
import LoadingPage from '../components/LoadingPage'
import SearchData from '../components/SearchData'

export default function Home() {
  
  interface EventData {
    aforo: number;
    descripcion: string;
    discoteca_nombre: string;
    edad: number;
    fecha: string;
    hora: string;
    id: number;
    image_url: string;
    nombre: string;
    notificaciones: boolean;
    ubicacion: {
      direccion: string;
      id: number;
      latitud: string | null;
      longitud: string | null;
      nombre: string;
    };
    url: string;
  }
  
  interface OrganizationData {
    id: string;
    name: string;
    details: string;
  }
  
  interface DataStructure {
    eventos: EventData[];
    Discotecas: OrganizationData[];
    Festivales: OrganizationData[];
    Promotoras: OrganizationData[];
    [key: string]: any[]; // Para manejar otras posibles claves
  }
  
  const [data, setData] = useState<DataStructure>({eventos: [], Discotecas: [], Festivales: [], Promotoras: []});
  const [isLoading, setLoading] = useState(true);  // Initialize loading state

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch('https://3.88.227.166/info', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json();
        setData(data);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      } finally {
        setLoading(false);  // Set loading to false when the fetch is complete
      }
    };

    getData();
  }, []);

  return (
    <div className='text-center'>
      <h1 className='font-bold text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-14'>Encuentra tu evento</h1>
      {<SearchData getSearchResults={(results: DataStructure) => setData(results)} />}
      {!isLoading ? <EventosDiscotecas data={data} /> : <LoadingPage />}
    </div>
  );
}
