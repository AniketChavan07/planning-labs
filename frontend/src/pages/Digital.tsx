import ServiceOverview from '../components/services/ServiceOverview';
import { services } from '../data/services';

export default function Digital() {
  const service = services.find(s => s.id === 'digital');
  
  if (!service) return null;

  return <ServiceOverview {...service} />;
}
