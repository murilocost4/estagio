import React from 'react';

// Lista de profissionais
const professionals = [
  {
    id: 1,
    name: 'Anderson Silveira',
    specialty: 'Clínico Geral',
    photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Substitua pela URL da foto
  },
  {
    id: 2,
    name: 'Alexandre Silva',
    specialty: 'Neurologista',
    photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Substitua pela URL da foto
  },
  {
    id: 3,
    name: 'Luiz Augusto',
    specialty: 'Psiquiatra',
    photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Substitua pela URL da foto
  },
  {
    id: 4,
    name: 'Thaís Felten',
    specialty: 'Ginecologista',
    photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Substitua pela URL da foto
  },
  {
    id: 5,
    name: 'Lívia Gorden',
    specialty: 'Otorrinolaringologista',
    photo: 'https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250', // Substitua pela URL da foto
  },
  // Adicione mais profissionais conforme necessário
];

export function Carousel() {
  return (
    <div className="max-w-4xl md:max-w-fit mx-auto py-10">
      <h2 className="text-5xl text-center mb-16">Nossos Profissionais</h2>
      <div className="flex overflow-x-auto space-x-10 py-6">
        {professionals.map((professional) => (
          <div key={professional.id} className="flex flex-col items-center text-center bg-white p-4 rounded-lg shadow-lg min-w-48">
            <img
              src={professional.photo}
              alt={professional.name}
              className="w-40 h-40 rounded-full mb-2"
            />
            <h3 className="text-lg font-semibold">{professional.name}</h3>
            <p className="text-gray-600">{professional.specialty}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
