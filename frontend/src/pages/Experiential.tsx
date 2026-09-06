import ServiceOverview from '../components/services/ServiceOverview';
import { services } from '../data/services';

export default function Experiential() {
  const service = services.find(s => s.id === 'experiential');
  
  if (!service) return null;

  return <ServiceOverview {...service} />;
}
