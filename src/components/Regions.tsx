import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { MapPin } from 'lucide-react';
import { regions } from '../data/content';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const Regions = () => {
  const centerPosition: [number, number] = [-23.6489, -46.8522]; // Embu das Artes

  return (
    <section id="regions" className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Regiões de Atuação</span>
          <h2 className="text-4xl sm:text-5xl font-heading font-bold text-neutral-900 mt-4 mb-6">
            Onde atendo
          </h2>
          <p className="text-xl text-neutral-600 leading-relaxed">
            Atendimento em hospitais, prontos-socorros, clínicas, casas de repouso e domicílios na região sudoeste da Grande São Paulo
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Cities List */}
          <div className="space-y-4">
            {regions.map((region, index) => (
              <div
                key={index}
                className="bg-white border-2 border-neutral-100 hover:border-primary/20 rounded-2xl p-6 flex items-center gap-4 transition-all duration-300 hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white flex-shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-neutral-900">
                    {region.name}
                  </h3>
                  <p className="text-sm text-neutral-600">São Paulo, Brasil</p>
                </div>
              </div>
            ))}
          </div>

          {/* Map */}
          <div className="rounded-3xl overflow-hidden border-2 border-neutral-100 shadow-xl h-[500px] relative z-0">
            <MapContainer
              center={centerPosition}
              zoom={11}
              style={{ height: '100%', width: '100%' }}
              scrollWheelZoom={false}
              className="z-0"
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {regions.map((region, index) => (
                <Marker key={index} position={region.coords}>
                  <Popup>
                    <div className="text-center p-2">
                      <strong className="text-primary">{region.name}</strong>
                      <p className="text-sm text-neutral-600 mt-1">Área de atuação</p>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regions;
