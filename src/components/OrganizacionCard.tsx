import Link from "next/link";


interface OrganizationData {
  nombre: string;
  url: string;
  image_url: string;
}
interface OrganizationCardProps {
  item: OrganizationData;
}


export function OrganizacionCard({ item }: OrganizationCardProps) {


  return (
    <Link href={item.url || "#"}>
      <div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md">
        <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-2">
          <img
            alt={item.nombre}
            className="w-16 h-16 object-cover rounded-full"
            src={item.image_url}
          />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold">{item.nombre}</h3>
        </div>
      </div>
    </Link>
  );
}
