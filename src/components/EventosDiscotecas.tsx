// src/components/EventosDiscotecas.tsx

import { EventoCard } from "./EventoCard";
import { OrganizacionCard } from "./OrganizacionCard";

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

interface EventosDiscotecasProps {
  data: DataStructure;
}

export default function EventosDiscotecas({ data }: EventosDiscotecasProps) {
  // Orden deseado
  const predefinedOrder = ['eventos', 'Discotecas', 'Festivales', 'Promotoras'];
  // Obtener las claves y ordenarlas
  const keys = Object.keys(data);
  const orderedKeys = [
    ...predefinedOrder.filter(key => keys.includes(key)),
    ...keys.filter(key => !predefinedOrder.includes(key)).sort()
  ];
  return (
    <main className="w-full max-w-screen-2xl mx-auto py-12 md:py-16 px-4 md:px-6">
      <div className="space-y-12">
        {orderedKeys.map((key) => (
          <section key={key} className="w-full">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-4xl font-bold">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-10">
              {data[key].map((item) =>
                key === 'eventos' ? (
                  <EventoCard key={item.id} item={item} />
                ) : (
                  <OrganizacionCard key={item.id} item={item} />
                )
              )}
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
