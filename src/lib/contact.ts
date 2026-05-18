export const whatsappPhoneDisplay = "+54 9 11 4938-7428";
export const whatsappPhoneNumber = "5491149387428";
export const instagramHandle = "@mas_expediciones";
export const instagramUrl = "https://www.instagram.com/mas_expediciones/";

export function getWhatsAppUrl(expeditionTitle?: string) {
  const message = expeditionTitle
    ? `Hola, quiero subir ${expeditionTitle}. Me pasan más información?`
    : "Hola, quiero consultar por las salidas de Más Expediciones.";

  return `https://wa.me/${whatsappPhoneNumber}?text=${encodeURIComponent(message)}`;
}
