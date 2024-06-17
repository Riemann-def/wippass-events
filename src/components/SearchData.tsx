import { useState } from 'react';

// Definir las interfaces al principio del archivo
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

interface DataStructure {
  eventos: EventData[];
  Discotecas: any[];
  Festivales: any[];
  Promotoras: any[];
  [key: string]: any[]; // Para manejar otras posibles claves
}

interface SearchDataProps {
  getSearchResults: (results: DataStructure) => void;
}

export default function SearchData({ getSearchResults }: SearchDataProps) {
  const [query, setQuery] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch(`/api/search?query=${query}`, {
      method: 'GET',
      headers: {
        'Cache-Control': 'no-store',
      },
    });
    const data: DataStructure = await response.json();
    getSearchResults(data);
  };

  return (
    <div className="text-center my-20">
      <form onSubmit={handleSubmit} className="flex items-center justify-center w-[90%] lg:w-full max-w-4xl mx-auto">
        <div className="relative flex-1">
          <input
            className="text-black border-2 border-black rounded-full px-4 lg:px-10 py-2 w-full"
            placeholder="Busca eventos, discotecas, promotoras..."
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button className="ml-4 bg-black text-white rounded-full px-4 py-2 hover:bg-black/60" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
