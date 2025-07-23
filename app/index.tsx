import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/SimpleLineIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function App() {
  const products = [
    {
      id: 1,
      name: 'calça feminina',
      img: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&h=500&fit=crop&auto=format',
    },
    {
      id: 2,
      name: 'homem de ferro cosplay',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQaeJfQHV_xEzV5SILyOS6rE-5XUjJrU0OA&s',
    },
    {
      id: 3,
      name: 'homem aranha cosplay',
      img: 'https://http2.mlstatic.com/D_NQ_NP_695715-MLB75368840336_042024-O-fantasia-homem-aranha-adulto-completa-longe-de-casa.webp',
    },
    {
      id: 4,
      name: 'Estilo Will Smith',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrqL-YTqwiE7zumfZ_Pw8AHHMv7wc4aDdPez8K53BHvEE3UefVxvWio31hBXzkHywyqeA&usqp=CAU',
    },
    {
      id: 5,
      name: 'jaqueta preta',
      img: 'https://images.unsplash.com/photo-1520975916090-3105956dac38?w=500&h=500&fit=crop&auto=format',
    },
    {
      id: 6,
      name: 'Estilo Maluco do pedaço',
      img: 'https://seligafranca.files.wordpress.com/2013/06/will-smith-and-jazzy-jeff-in-fresh-prince-of-bel-air.jpeg',
    },
  ];

  return (
    <ScrollView className="bg-white p-4">
      <View className="mb-8">
        <TouchableOpacity className="self-start mb-4">
          <Icon name="arrow-left" size={20} color="#000" />
        </TouchableOpacity>

        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-semibold">Best Dress Collection</Text>
          <View className="flex-row items-center space-x-3">
            <FontAwesome5 name="ticket-alt" size={20} color="#ec4899" solid={false} />
            <FontAwesome5 name="shopping-cart" size={22} color="#ec4899" />
          </View>
        </View>
      </View>

      {/* Filtros */}
      <View className="flex-row flex-wrap gap-2 mb-6">
        {['Category', 'Color', 'Size', 'Price', 'More'].map((filter) => (
          <Text
            key={filter}
            className="px-3 py-1 bg-gray-100 rounded-full text-sm"
          >
            {filter}
          </Text>
        ))}
      </View>

      {/* Grade de Produtos */}
      <View className="flex-row flex-wrap justify-between">
        {products.map((product) => (
          <View
            key={product.id}
            className="w-[48%] mb-4 border rounded-lg overflow-hidden"
          >
            <Image
              source={{ uri: product.img }}
              className="w-full h-36"
              resizeMode="cover"
            />
            <View className="p-2">
              <Text className="text-sm font-medium text-gray-800">
                {product.name}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}
