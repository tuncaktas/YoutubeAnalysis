import { Stack, Link } from 'expo-router';
import { View, Text, TextInput, ScrollView, Image, Pressable } from 'react-native';
import { useState } from 'react';

import { supabase } from '~/lib/supabase';

// Mock data - replace with real data later
const popularChannels = [
  { id: '1', name: 'MKBHD', image: 'https://yt3.googleusercontent.com/lkH37D712tiyphnu0Id0D5MwwQ7IRuwgQLVD05iMXlDWO-kDHut3uI4MgIEAQ9StK25H6PN8=s176-c-k-c0x00ffffff-no-rj' },
  { id: '2', name: 'Fireship', image: 'https://yt3.googleusercontent.com/ytc/AIf8zZTUVa5AeFd3m5-4fdY2hEaKof3Byp8VruZ0f0FNEA=s176-c-k-c0x00ffffff-no-rj' },
  // Add more channels as needed
];

export default function Home() {
  const [url, setUrl] = useState('');

  const startAnalyzing = async () => {
    const{error, data} =await supabase.functions.invoke('trigger_collection_api', {body: { url}});
    console.log('error: ', error);
    console.log('data: ', data);
  };
  
  return (
    <>
      <Stack.Screen options={{ 
        title: 'YouTube Analytics',
        headerShown: false 
      }} />
      
      <ScrollView className="flex-1 bg-white">
        {/* Hero Section */}
        <View className="px-6 pt-16 pb-8">
          <Text className="mb-2 text-center text-4xl font-bold">YouTube Channel Analytics</Text>
          <Text className="text-gray-600 text-center mb-8">
            Analyze any YouTube channel in seconds
          </Text>
          
          {/* Search Input */}
          <View className="bg-gray-100 rounded-xl p-4 flex-row items-center">
            <TextInput
              placeholder="Paste YouTube channel URL"
              value={url}
              onChangeText={setUrl}
              className="flex-1 h-10 text-base"
            />
            
            <Pressable 
              onPress={startAnalyzing} 
              className="bg-red-500 rounded-lg px-6 py-3 ml-2">
              <Text className="text-white font-semibold">Analyze</Text>
            </Pressable>
            
          </View>
        </View>

        {/* Popular Channels Section */}
        <View className="px-6 pb-8">
          <Text className="text-xl font-semibold mb-4">Popular Channels</Text>
          <ScrollView 
            horizontal 
            showsHorizontalScrollIndicator={false}
            className="space-x-4"
          >
            {popularChannels.map((channel) => (
              <Link 
                key={channel.id} 
                href="/channel" 
                asChild
              >
                <Pressable className="items-center">
                  <Image source={{ uri: channel.image }} className="mb-2 h-20 w-20 rounded-full" />
                  <Text className="text-sm font-medium">{channel.name}</Text>
                </Pressable>
              </Link>
            ))}
          </ScrollView>
        </View>

        {/* Recent Searches Section */}
        <View className="px-6 pb-16">
          <Text className="text-xl font-semibold mb-4">Recent Searches</Text>
          {/* Recent searches list */}
          <View className="space-y-4">
            {[1, 2, 3].map((_, index) => (
              <Link 
                key={index}
                href="/channel" 
                asChild
              >
                <Pressable className="flex-row items-center bg-gray-50 p-4 rounded-lg">
                  <Image
                    source={{ uri: 'https://placeholder.com/50x50' }}
                    className="w-12 h-12 rounded-full"
                  />
                  <View className="ml-4">
                    <Text className="font-medium">Channel Name</Text>
                    <Text className="text-gray-600 text-sm">2.5M subscribers</Text>
                  </View>
                </Pressable>
              </Link>
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
}
