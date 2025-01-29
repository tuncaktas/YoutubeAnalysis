import { View, Text, Image, ScrollView } from 'react-native';

const channel = {
    "input": {
          "url": "https://www.youtube.com/@jaidenanimations/about"
    },
        "url": "https://www.youtube.com/@jaidenanimations/about",
        "handle": "@jaidenanimations",
        "handle_md5": "4e2083f32de8c4dca0e500600bd36486",
        "banner_img": "https://yt3.googleusercontent.com/9b5DW0WsoUtzke1Q54ARDE26FqU4FXAgjnWKEihmDCgYAu2ZLN8qLhvD1WjQT-lFjDbg43HsHQ=w2560-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj",
        "profile_image": "https://yt3.googleusercontent.com/6uDu4HmbcorfDWch6L4FAzv-DFMOstOwhTks-5VUm-kY5puZ_oU4EeA1YOqEM_EDvCTj3UPUW68=s160-c-k-c0x00ffffff-no-rj",
        "name": "JaidenAnimations",
        "subscribers": 14300000,
        "Description": "hi it's jaiden and bird\n\nchannel profile picture made by: me\nchannel banner art made by: https://twitter.com/motiCHIKUBI\n",
        "videos_count": 163,
        "created_date": "2014-02-16T00:00:00.000Z",
        "views": 2773536427,
        "Details": {
          "location": "United States"
        },
        "Links": [
          "jaidenanimations.com",
          "twitch.tv/jaidenanimations",
          "twitter.com/JaidenAnimation",
          "instagram.com/jaiden_animations"
        ],
        "identifier": "UCGwu0nbY2wSkW8N-cghnLpA",
        "id": "UCGwu0nbY2wSkW8N-cghnLpA",
        "timestamp": "2025-01-29T16:04:05.374Z"
        
};

export default function Channel() {
    return (
        <ScrollView className="flex-1">
            {/* Banner Image */}
            <Image 
                source={{ uri: channel.banner_img }}
                className="w-full h-40"
                resizeMode="cover"
            />
            
            {/* Profile Section */}
            <View className="p-4 -mt-16">
                <Image 
                    source={{ uri: channel.profile_image }}
                    className="w-24 h-24 rounded-full border-4 border-white"
                />
                
                <View className="mt-2">
                    <Text className="text-2xl font-bold">{channel.name}</Text>
                    <Text className="text-gray-600">{channel.handle}</Text>
                    
                    <View className="flex-row mt-2 gap-4">
                        <Text className="text-gray-600">{channel.subscribers.toLocaleString()} subscribers</Text>
                        <Text className="text-gray-600">{channel.videos_count} videos</Text>
                    </View>
                </View>

                {/* Description */}
                <Text className="mt-4 text-gray-700">{channel.Description}</Text>

                {/* Stats */}
                <View className="mt-6 bg-gray-50 p-4 rounded-lg">
                    <View className="flex-row justify-between">
                        <View>
                            <Text className="text-gray-600">Total Views</Text>
                            <Text className="text-lg font-semibold">{channel.views.toLocaleString()}</Text>
                        </View>
                        <View>
                            <Text className="text-gray-600">Joined</Text>
                            <Text className="text-lg font-semibold">
                                {new Date(channel.created_date).getFullYear()}
                            </Text>
                        </View>
                        <View>
                            <Text className="text-gray-600">Location</Text>
                            <Text className="text-lg font-semibold">{channel.Details.location}</Text>
                        </View>
                    </View>
                </View>

                {/* Links */}
                <View className="mt-6">
                    <Text className="font-semibold mb-2">Links</Text>
                    {channel.Links.map((link, index) => (
                        <Text key={index} className="text-blue-500 mb-1">
                            {link}
                        </Text>
                    ))}
                </View>
            </View>
        </ScrollView>
    );
}
