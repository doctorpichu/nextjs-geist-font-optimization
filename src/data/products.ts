import { Product } from '@/context/CartContext'

export const products: Product[] = [
  {
    id: '1',
    nombre: 'Proteína Whey Premium',
    precio: 15999,
    imagen: 'https://images.pexels.com/photos/4162449/pexels-photo-4162449.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Proteína de suero de leche de alta calidad con 25g de proteína por porción. Ideal para el desarrollo muscular y recuperación post-entrenamiento. Sabor chocolate.',
    stock: 50,
    categoria: 'Proteínas'
  },
  {
    id: '2',
    nombre: 'Creatina Monohidrato',
    precio: 8999,
    imagen: 'https://images.pexels.com/photos/6551415/pexels-photo-6551415.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Creatina monohidrato pura al 100%. Aumenta la fuerza, potencia y masa muscular. Sin sabor, fácil de mezclar.',
    stock: 75,
    categoria: 'Creatinas'
  },
  {
    id: '3',
    nombre: 'Pre-Entreno Explosivo',
    precio: 12999,
    imagen: 'https://images.pexels.com/photos/6551070/pexels-photo-6551070.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Fórmula pre-entreno con cafeína, beta-alanina y citrulina. Máxima energía y concentración para entrenamientos intensos. Sabor frutas tropicales.',
    stock: 30,
    categoria: 'Pre-Entrenos'
  },
  {
    id: '4',
    nombre: 'BCAA 2:1:1',
    precio: 9999,
    imagen: 'https://images.pexels.com/photos/6550835/pexels-photo-6550835.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Aminoácidos de cadena ramificada en proporción 2:1:1. Previene el catabolismo muscular y acelera la recuperación. Sabor limón.',
    stock: 40,
    categoria: 'Aminoácidos'
  },
  {
    id: '5',
    nombre: 'Multivitamínico Deportivo',
    precio: 6999,
    imagen: 'https://images.pexels.com/photos/5938567/pexels-photo-5938567.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Complejo vitamínico y mineral especialmente formulado para deportistas. Apoya el sistema inmune y el rendimiento deportivo.',
    stock: 60,
    categoria: 'Vitaminas'
  },
  {
    id: '6',
    nombre: 'Quemador de Grasa',
    precio: 11999,
    imagen: 'https://images.pexels.com/photos/6550825/pexels-photo-6550825.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Termogénico natural con extractos de té verde, cafeína y L-carnitina. Acelera el metabolismo y ayuda en la definición muscular.',
    stock: 25,
    categoria: 'Quemadores'
  },
  {
    id: '7',
    nombre: 'Proteína Vegana',
    precio: 17999,
    imagen: 'https://images.pexels.com/photos/6550849/pexels-photo-6550849.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'Proteína vegetal de guisante y arroz. 22g de proteína por porción, libre de lactosa y gluten. Sabor vainilla natural.',
    stock: 35,
    categoria: 'Proteínas'
  },
  {
    id: '8',
    nombre: 'Glutamina Pura',
    precio: 7999,
    imagen: 'https://images.pexels.com/photos/6550837/pexels-photo-6550837.jpeg?auto=compress&cs=tinysrgb&w=500',
    descripcion: 'L-Glutamina pura para mejorar la recuperación muscular y fortalecer el sistema inmunológico. Sin sabor, alta solubilidad.',
    stock: 45,
    categoria: 'Aminoácidos'
  }
]

export const categories = [
  'Todas',
  'Proteínas',
  'Creatinas',
  'Pre-Entrenos',
  'Aminoácidos',
  'Vitaminas',
  'Quemadores'
]
