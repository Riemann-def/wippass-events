import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Badge, Divider } from "@tremor/react";
import { RiMapPin2Fill } from "react-icons/ri";

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

interface EventoCardProps {
  item: EventData;
}

export function EventoCard({ item }: EventoCardProps) {
  return (
    <Link href={item.url || "#"}>
      <Card className="flex flex-col md:flex-row items-start bg-white border border-gray-200 rounded-lg shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 overflow-hidden md:max-w-3xl transition-transform duration-300 ease-in-out transform hover:shadow-md">
        <div className="w-full md:w-1/3 h-64 md:h-full overflow-hidden">
          <img
            alt={item.nombre}
            className="object-cover w-full h-full rounded-t-lg md:rounded-none md:rounded-l-lg"
            src={item.image_url}
          />
        </div>
        <CardContent className="p-6 flex-1 flex flex-col">
          <div>
            <h3 className="text-2xl xl:text-3xl font-bold tracking-tight text-left text-gray-900 dark:text-white mb-2">
              {item.nombre}
            </h3>
            <div className="text-gray-500 text-md text-left xl:text-xl mb-2">
              <span>{item.fecha}</span> - <span>{item.hora}</span>
            </div>
            <Divider className="my-2" />
          </div>
          <div className="flex items-center mt-auto mb-4 text-gray-500 text-md xl:text-lg">
            <RiMapPin2Fill className="mr-2" />
            <span>{item.ubicacion.nombre}</span>
          </div>
          <div className="mt-4 text-left">
            <Link href={item.url || "#"}>
              <button className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Comprar entradas
                <svg
                  className="w-4 h-4 ml-2"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
